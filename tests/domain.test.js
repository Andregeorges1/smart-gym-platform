import test from "node:test";
import assert from "node:assert/strict";
import {
  initialState,
  availablePlaces,
  bookSession,
  cancelBooking,
  checkIn,
  finishWorkout,
  verifyAttendance,
  redeemReward,
  placeOrder,
  refundOrder,
  claimChallenge,
  facilities,
  workouts,
  loadState,
} from "../src/domain.js";

test("a reservation consumes capacity, duplicate booking does not, cancellation frees the spot", () => {
  const seed = initialState(),
    session = facilities.find((f) => f.id === "strength");
  const booked = bookSession(seed, session.id);
  assert.equal(booked.bookings.length, 1);
  assert.equal(
    availablePlaces(booked, session),
    availablePlaces(seed, session) - 1,
  );
  assert.strictEqual(bookSession(booked, session.id), booked);
  const cancelled = cancelBooking(booked, booked.bookings[0].id);
  assert.equal(
    availablePlaces(cancelled, session),
    availablePlaces(seed, session),
  );
  assert.equal(
    bookSession(cancelled, session.id).bookings.filter(
      (b) => b.status === "Booked",
    ).length,
    1,
  );
});
test("a full session creates a waitlist without consuming another place", () => {
  const seed = initialState(),
    result = bookSession(seed, "pilates");
  assert.equal(result.bookings[0].status, "Waitlisted");
  assert.equal(
    availablePlaces(
      result,
      facilities.find((f) => f.id === "pilates"),
    ),
    0,
  );
  assert.strictEqual(verifyAttendance(result, result.bookings[0].id), result);
});
test("repeated entry cannot farm check-in points and occupancy tracks entry/exit", () => {
  const seed = initialState(),
    entered = checkIn(seed),
    exited = checkIn(entered),
    again = checkIn(exited);
  assert.equal(entered.occupancy, seed.occupancy + 1);
  assert.equal(exited.occupancy, seed.occupancy);
  assert.equal(again.points, seed.points + 10);
  assert.equal(
    again.ledger.filter((e) => e.label === "Verified gym check-in").length,
    1,
  );
  const full = { ...seed, occupancy: seed.capacity };
  assert.strictEqual(checkIn(full), full);
});
test("duplicate workout completion is idempotent and daily workout points are capped", () => {
  const seed = initialState(),
    once = finishWorkout(seed, workouts[0]);
  assert.strictEqual(finishWorkout(once, workouts[0]), once);
  const twice = finishWorkout(once, workouts[1]);
  assert.equal(twice.workoutLogs.length, 2);
  assert.equal(twice.points, seed.points + 20);
});
test("verified class attendance awards points only once", () => {
  const booked = bookSession(initialState(), "strength"),
    id = booked.bookings[0].id;
  const attended = verifyAttendance(booked, id);
  assert.equal(attended.bookings[0].status, "Attended");
  assert.equal(attended.points, booked.points + 15);
  assert.equal(
    availablePlaces(
      attended,
      facilities.find((f) => f.id === "strength"),
    ),
    availablePlaces(
      booked,
      facilities.find((f) => f.id === "strength"),
    ),
  );
  assert.strictEqual(verifyAttendance(attended, id), attended);
});
test("reward redemption debits an auditable ledger and inventory; overdrafts and sold-out rewards fail", () => {
  const seed = initialState(),
    next = redeemReward(seed, "smoothie");
  assert.equal(next.points, seed.points - 500);
  assert.equal(
    next.rewardInventory.smoothie,
    seed.rewardInventory.smoothie - 1,
  );
  assert.equal(
    next.ledger.reduce((a, e) => a + e.points, 0),
    next.points,
  );
  assert.equal(next.redemptions.length, 1);
  const poor = { ...seed, points: 0 };
  assert.strictEqual(redeemReward(poor, "smoothie"), poor);
  const empty = {
    ...seed,
    rewardInventory: { ...seed.rewardInventory, smoothie: 0 },
  };
  assert.strictEqual(redeemReward(empty, "smoothie"), empty);
});
test("food checkout applies reward discount, records commission, and refunds points exactly once", () => {
  const seed = initialState(),
    ordered = placeOrder(seed, { bowl: 1 }, true, "Pickup"),
    order = ordered.orders[0];
  assert.equal(order.total, 175);
  assert.equal(order.commission, 17.5);
  assert.equal(ordered.points, 1030);
  const refunded = refundOrder(ordered, order.id);
  assert.equal(refunded.points, 1280);
  assert.equal(refunded.orders[0].commission, 0);
  assert.equal(refunded.orders[0].status, "Refunded");
  assert.strictEqual(refundOrder(refunded, order.id), refunded);
  assert.equal(
    refunded.ledger.reduce((a, e) => a + e.points, 0),
    refunded.points,
  );
});
test("empty or invalid orders do not change state; delivery fee is explicit", () => {
  const seed = initialState();
  assert.strictEqual(placeOrder(seed, {}, false, "Pickup"), seed);
  assert.strictEqual(placeOrder(seed, { bowl: -1 }, false, "Pickup"), seed);
  assert.strictEqual(placeOrder(seed, { bowl: 1 }, false, "Invalid"), seed);
  assert.equal(
    placeOrder(seed, { bowl: 1 }, false, "Delivery").orders[0].total,
    225,
  );
});
test("challenge points require joining and a logged workout, and cannot be claimed twice", () => {
  const seed = initialState();
  assert.strictEqual(claimChallenge(seed), seed);
  const joined = { ...seed, joinedChallenge: true };
  assert.strictEqual(claimChallenge(joined), joined);
  const trained = finishWorkout(joined, workouts[0]),
    claimed = claimChallenge(trained);
  assert.equal(claimed.points, seed.points + 120);
  assert.ok(claimed.claimedChallenge);
  assert.strictEqual(claimChallenge(claimed), claimed);
});
test("damaged or inaccessible local storage starts a complete fresh demo", () => {
  assert.equal(
    loadState({ getItem: () => "{bad json" }).gymName,
    "Pulse Athletic Club",
  );
  assert.equal(
    loadState({
      getItem: () => {
        throw new Error("blocked");
      },
    }).points,
    1280,
  );
  const seeded = initialState();
  seeded.points = 100;
  assert.equal(
    loadState({ getItem: () => JSON.stringify({ version: 1, state: seeded }) })
      .points,
    100,
  );
});
