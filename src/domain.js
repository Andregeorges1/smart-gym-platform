export const STORAGE_KEY = "forma-gym-demo-v1";
export const TODAY = "2026-10-22";
export const money = (value) => `EGP ${Number(value).toLocaleString("en-EG")}`;
export const uid = () =>
  globalThis.crypto?.randomUUID?.() ||
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const facilities = [
  {
    id: "yoga",
    name: "Morning flow",
    category: "Yoga",
    time: "08:00",
    duration: 45,
    trainer: "Nour Hassan",
    capacity: 16,
    occupied: 12,
    day: 1,
    color: "sage",
    price: 0,
  },
  {
    id: "strength",
    name: "Strength & sculpt",
    category: "Strength",
    time: "18:30",
    duration: 50,
    trainer: "Omar Adel",
    capacity: 20,
    occupied: 14,
    day: 0,
    color: "green",
    price: 0,
  },
  {
    id: "pilates",
    name: "Reformer pilates",
    category: "Pilates",
    time: "19:00",
    duration: 45,
    trainer: "Laila Ahmed",
    capacity: 8,
    occupied: 8,
    day: 0,
    color: "peach",
    price: 120,
  },
  {
    id: "sauna",
    name: "Recovery sauna",
    category: "Recovery",
    time: "20:00",
    duration: 30,
    trainer: "Wellness suite",
    capacity: 4,
    occupied: 1,
    day: 0,
    color: "cream",
    price: 80,
  },
  {
    id: "hiit",
    name: "Full body energy",
    category: "HIIT",
    time: "17:00",
    duration: 40,
    trainer: "Omar Adel",
    capacity: 18,
    occupied: 9,
    day: 1,
    color: "lime",
    price: 0,
  },
  {
    id: "spa",
    name: "Sports recovery massage",
    category: "Spa",
    time: "14:00",
    duration: 45,
    trainer: "Wellness suite",
    capacity: 2,
    occupied: 0,
    day: 2,
    color: "sage",
    price: 350,
  },
];
export const workouts = [
  {
    id: "lower",
    name: "Lower body foundations",
    category: "Strength",
    duration: 35,
    level: "Intermediate",
    muscles: "Legs & glutes",
    color: "green",
    exercises: [
      {
        name: "Leg press",
        equipment: "legpress",
        sets: 3,
        reps: 12,
        cue: "Keep your back supported. Lower slowly within a comfortable range.",
      },
      {
        name: "Dumbbell reverse lunge",
        equipment: "dumbbells",
        sets: 3,
        reps: 10,
        cue: "Step back with control. Keep your front knee aligned with your toes.",
      },
      {
        name: "Leg extension",
        equipment: "extension",
        sets: 3,
        reps: 12,
        cue: "Align the pivot with your knee. Extend without locking your knees.",
      },
      {
        name: "Easy treadmill cooldown",
        equipment: "treadmill",
        sets: 1,
        reps: 5,
        cue: "Walk at a comfortable pace for five minutes.",
      },
    ],
  },
  {
    id: "upper",
    name: "Upper body essentials",
    category: "Strength",
    duration: 40,
    level: "Beginner",
    muscles: "Chest & back",
    color: "sage",
    exercises: [
      {
        name: "Chest press",
        equipment: "chestpress",
        sets: 3,
        reps: 12,
        cue: "Keep shoulders supported and wrists straight. Press with control.",
      },
      {
        name: "Supported dumbbell row",
        equipment: "dumbbells",
        sets: 3,
        reps: 12,
        cue: "Support your free hand on a stable bench. Pull with control without twisting your back.",
      },
      {
        name: "Dumbbell bicep curl",
        equipment: "dumbbells",
        sets: 3,
        reps: 10,
        cue: "Keep your upper arms still and avoid swinging the weights.",
      },
    ],
  },
  {
    id: "cardio",
    name: "Find your rhythm",
    category: "Cardio",
    duration: 25,
    level: "All levels",
    muscles: "Full body",
    color: "peach",
    exercises: [
      {
        name: "Treadmill warm-up",
        equipment: "treadmill",
        sets: 1,
        reps: 5,
        cue: "Start with a comfortable five-minute walk.",
      },
      {
        name: "Bike intervals",
        equipment: "bike",
        sets: 5,
        reps: 2,
        cue: "Alternate a moderate effort with an easy recovery. Stay comfortable.",
      },
      {
        name: "Easy walk cooldown",
        equipment: "treadmill",
        sets: 1,
        reps: 5,
        cue: "Bring your effort down gradually.",
      },
    ],
  },
];
export const equipmentSeed = [
  {
    id: "treadmill",
    name: "Treadmill",
    zone: "Cardio",
    muscle: "Full body",
    x: 15,
    y: 24,
    status: "Active",
    icon: "activity",
    instructions:
      "Attach the safety clip, start slowly, and use the stop control before stepping off.",
  },
  {
    id: "bike",
    name: "Stationary bike",
    zone: "Cardio",
    muscle: "Legs",
    x: 35,
    y: 24,
    status: "Active",
    icon: "bike",
    instructions:
      "Adjust the saddle to your height. Begin with low resistance and keep a steady cadence.",
  },
  {
    id: "legpress",
    name: "Leg press",
    zone: "Strength",
    muscle: "Legs",
    x: 63,
    y: 27,
    status: "Active",
    icon: "dumbbell",
    instructions:
      "Adjust the seat, keep feet flat on the platform, and press without locking your knees.",
  },
  {
    id: "extension",
    name: "Leg extension",
    zone: "Strength",
    muscle: "Legs",
    x: 82,
    y: 27,
    status: "Active",
    icon: "dumbbell",
    instructions:
      "Align the machine pivot with your knees. Extend smoothly and lower with control.",
  },
  {
    id: "chestpress",
    name: "Chest press",
    zone: "Strength",
    muscle: "Chest",
    x: 63,
    y: 62,
    status: "Active",
    icon: "dumbbell",
    instructions:
      "Set handles at chest height, support your back, and press with controlled motion.",
  },
  {
    id: "pulldown",
    name: "Lat pulldown",
    zone: "Strength",
    muscle: "Back",
    x: 82,
    y: 62,
    status: "Maintenance",
    icon: "dumbbell",
    instructions:
      "Secure the thigh pads. Pull the bar toward the upper chest without leaning back excessively.",
  },
  {
    id: "dumbbells",
    name: "Dumbbell rack",
    zone: "Free weights",
    muscle: "Full body",
    x: 24,
    y: 69,
    status: "Active",
    icon: "dumbbell",
    instructions:
      "Choose a manageable load, allow room for others, and return weights to the rack.",
  },
];
export const partners = [
  {
    id: "sara",
    name: "Sara Mostafa",
    initials: "SM",
    goal: "Build strength",
    level: "Intermediate",
    schedule: "Weekday evenings",
    match: 96,
    color: "sage",
    bio: "Looking for a consistent training partner. Upper/lower split, three days a week.",
  },
  {
    id: "youssef",
    name: "Youssef Ali",
    initials: "YA",
    goal: "Build strength",
    level: "Beginner",
    schedule: "Weekday evenings",
    match: 91,
    color: "peach",
    bio: "Getting back into a routine. Always up for a little accountability.",
  },
  {
    id: "mariam",
    name: "Mariam Tarek",
    initials: "MT",
    goal: "Improve fitness",
    level: "Intermediate",
    schedule: "Weekend mornings",
    match: 87,
    color: "lilac",
    bio: "Classes, cardio, and a good post-workout coffee.",
  },
];
export const rewards = [
  {
    id: "smoothie",
    name: "Your post-workout smoothie",
    partner: "Blend Lab",
    points: 500,
    icon: "cup",
    color: "peach",
    description:
      "One signature protein smoothie. Collect at Blend Lab, beside the club.",
  },
  {
    id: "meal",
    name: "A little fuel, on us",
    partner: "Green Bowl",
    points: 750,
    icon: "salad",
    color: "sage",
    description:
      "EGP 75 off a meal at Green Bowl. Show your redemption code at pickup.",
  },
  {
    id: "sauna-reward",
    name: "Make room for recovery",
    partner: "Club wellness suite",
    points: 1000,
    icon: "sparkles",
    color: "cream",
    description:
      "One 30-minute sauna session. Book your preferred slot with reception.",
  },
  {
    id: "pt",
    name: "One-to-one, just for you",
    partner: "Your coaching team",
    points: 2000,
    icon: "dumbbell",
    color: "lilac",
    description:
      "One 45-minute personal training session, subject to trainer availability.",
  },
];
export const meals = [
  {
    id: "bowl",
    name: "The power bowl",
    restaurant: "Green Bowl",
    category: "Meals",
    price: 200,
    protein: 38,
    calories: 520,
    emoji: "🥗",
    color: "sage",
    description: "Grilled chicken, quinoa, seasonal greens & lemon tahini.",
    distance: "3 min walk",
  },
  {
    id: "salmon",
    name: "Salmon & greens",
    restaurant: "Green Bowl",
    category: "Meals",
    price: 285,
    protein: 36,
    calories: 580,
    emoji: "🍣",
    color: "peach",
    description: "Roasted salmon, brown rice, avocado & crisp greens.",
    distance: "3 min walk",
  },
  {
    id: "smoothie",
    name: "Berry strong",
    restaurant: "Blend Lab",
    category: "Drinks",
    price: 110,
    protein: 25,
    calories: 280,
    emoji: "🫐",
    color: "lilac",
    description: "Mixed berries, banana, whey protein & oat milk.",
    distance: "1 min walk",
  },
  {
    id: "wrap",
    name: "The everyday wrap",
    restaurant: "Green Bowl",
    category: "Meals",
    price: 165,
    protein: 30,
    calories: 450,
    emoji: "🌯",
    color: "cream",
    description: "Grilled chicken, hummus, crunchy slaw & whole-wheat wrap.",
    distance: "3 min walk",
  },
];
export function initialState() {
  return {
    gymName: "Pulse Athletic Club",
    branch: "New Cairo",
    logo: "",
    memberName: "Alex Morgan",
    cart: {},
    plan: "Club Plus",
    membershipStatus: "Active",
    renewal: "22 Nov 2026",
    checkedIn: false,
    occupancy: 42,
    capacity: 100,
    points: 1280,
    ledger: [
      {
        id: "opening",
        label: "Previous activity balance",
        points: 1165,
        date: "Earlier this month",
      },
      {
        id: "class-seed",
        label: "Reformer pilates attended",
        points: 15,
        date: "Yesterday",
      },
      {
        id: "challenge-seed",
        label: "Consistency challenge",
        points: 100,
        date: "Yesterday",
      },
    ],
    bookings: [],
    workoutLogs: [],
    equipment: structuredClone(equipmentSeed),
    redemptions: [],
    orders: [],
    joinedChallenge: false,
    claimedChallenge: false,
    wearable: false,
    shareHealth: false,
    discoverable: false,
    partnerPreferences: {
      goal: "Build strength",
      schedule: "Weekday evenings",
      level: "Intermediate",
    },
    invitations: {},
    blocked: [],
    reports: [],
    messages: [
      {
        id: "hello",
        channel: "trainer",
        from: "trainer",
        text: "Hey Alex! Your lower body session is ready. Let me know how the new program feels.",
        time: "09:15",
      },
    ],
    assignedTrainer: "Omar Adel",
    program: "Lower body foundations",
    customProgram: null,
    documents: [
      {
        id: "guide",
        name: "Everyday nutrition guide",
        text: "General nutrition guidance\n\nBuild balanced meals with a source of protein, vegetables, and carbohydrates. Drink water regularly and choose meals that suit your preferences.\n\nThis is general educational guidance, not individualized medical nutrition advice. Speak with an appropriately qualified professional for individual medical needs.",
        date: "Today",
      },
    ],
    payments: [
      {
        id: "payment-seed",
        label: "Club Plus · monthly renewal",
        amount: 1500,
        date: "22 Oct 2026",
        status: "Paid",
      },
    ],
    trainerSessions: [
      {
        id: "pt-seed",
        member: "Alex Morgan",
        date: TODAY,
        time: "17:30",
        status: "Scheduled",
      },
    ],
    rewardInventory: { smoothie: 12, meal: 8, "sauna-reward": 5, pt: 3 },
    saasPlan: "Growth",
    audit: [],
  };
}
const audit = (s, label) => ({
  ...s,
  audit: [
    {
      id: uid(),
      label,
      time: new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    ...s.audit,
  ].slice(0, 60),
});
export function availablePlaces(state, session) {
  return Math.max(
    0,
    session.capacity -
      session.occupied -
      state.bookings.filter(
        (b) =>
          b.sessionId === session.id &&
          ["Booked", "Attended"].includes(b.status),
      ).length,
  );
}
export function bookSession(state, sessionId) {
  const session = facilities.find((f) => f.id === sessionId);
  if (
    !session ||
    state.bookings.some(
      (b) =>
        b.sessionId === sessionId &&
        ["Booked", "Waitlisted", "Attended"].includes(b.status),
    )
  )
    return state;
  const status = availablePlaces(state, session) ? "Booked" : "Waitlisted";
  return audit(
    {
      ...state,
      bookings: [
        ...state.bookings,
        { id: uid(), sessionId, status, member: state.memberName },
      ],
    },
    `${state.memberName}: ${status.toLowerCase()} ${session.name}`,
  );
}
export function cancelBooking(state, id) {
  return audit(
    {
      ...state,
      bookings: state.bookings.map((b) =>
        b.id === id && ["Booked", "Waitlisted"].includes(b.status)
          ? { ...b, status: "Cancelled" }
          : b,
      ),
    },
    "Booking cancelled",
  );
}
export function addPoints(state, id, label, points) {
  if (state.ledger.some((e) => e.id === id) || state.points + points < 0)
    return state;
  return {
    ...state,
    points: state.points + points,
    ledger: [{ id, label, points, date: "Today" }, ...state.ledger],
  };
}
export function checkIn(state) {
  if (state.checkedIn)
    return audit(
      {
        ...state,
        checkedIn: false,
        occupancy: Math.max(0, state.occupancy - 1),
      },
      "Member checked out",
    );
  if (state.occupancy >= state.capacity) return state;
  return audit(
    addPoints(
      { ...state, checkedIn: true, occupancy: state.occupancy + 1 },
      `checkin-${TODAY}`,
      "Verified gym check-in",
      10,
    ),
    "Member checked in",
  );
}
export function finishWorkout(state, workout) {
  if (
    state.workoutLogs.some(
      (w) => w.workoutId === workout.id && w.date === TODAY,
    )
  )
    return state;
  const next = {
    ...state,
    workoutLogs: [
      ...state.workoutLogs,
      {
        id: uid(),
        workoutId: workout.id,
        name: workout.name,
        duration: workout.duration,
        date: TODAY,
      },
    ],
  };
  // One rewarded workout per demo day; other unique sessions can still be logged.
  return audit(
    addPoints(next, `workout-${TODAY}`, "Completed workout", 20),
    `Workout completed: ${workout.name}`,
  );
}
export function verifyAttendance(state, id) {
  const booking = state.bookings.find((b) => b.id === id);
  if (!booking || booking.status !== "Booked") return state;
  return audit(
    addPoints(
      {
        ...state,
        bookings: state.bookings.map((b) =>
          b.id === id ? { ...b, status: "Attended" } : b,
        ),
      },
      `attendance-${id}`,
      "Attended booked class",
      15,
    ),
    "Class attendance verified",
  );
}
export function redeemReward(state, rewardId) {
  const reward = rewards.find((r) => r.id === rewardId);
  if (
    !reward ||
    state.points < reward.points ||
    state.rewardInventory[rewardId] < 1
  )
    return state;
  const id = uid();
  const next = addPoints(state, `redeem-${id}`, reward.name, -reward.points);
  return audit(
    {
      ...next,
      rewardInventory: {
        ...next.rewardInventory,
        [rewardId]: next.rewardInventory[rewardId] - 1,
      },
      redemptions: [
        {
          id,
          rewardId,
          name: reward.name,
          code: `FORMA-${id.slice(0, 6).toUpperCase()}`,
          status: "Ready to use",
        },
        ...next.redemptions,
      ],
    },
    `Reward redeemed: ${reward.name}`,
  );
}
export function placeOrder(state, cart, usePoints, fulfillment) {
  const items = Object.entries(cart)
    .filter(
      ([id, qty]) =>
        meals.some((m) => m.id === id) && Number.isInteger(qty) && qty > 0,
    )
    .map(([id, qty]) => ({ ...meals.find((m) => m.id === id), qty }));
  if (!items.length || !["Pickup", "Delivery"].includes(fulfillment))
    return state;
  const subtotal = items.reduce((sum, m) => sum + m.price * m.qty, 0);
  const pointsSpent =
    usePoints && state.points >= 250 && subtotal >= 25 ? 250 : 0;
  const id = uid(),
    discount = pointsSpent ? 25 : 0,
    delivery = fulfillment === "Delivery" ? 25 : 0;
  const next = pointsSpent
    ? addPoints(
        state,
        `order-${id}`,
        "Food order reward discount",
        -pointsSpent,
      )
    : state;
  return audit(
    {
      ...next,
      orders: [
        {
          id,
          items,
          subtotal,
          discount,
          delivery,
          total: subtotal - discount + delivery,
          commission: Math.round((subtotal - discount) * 10) / 100,
          fulfillment,
          status: "Confirmed",
          pointsSpent,
        },
        ...next.orders,
      ],
    },
    "Demo food order confirmed",
  );
}
export function refundOrder(state, id) {
  const order = state.orders.find((o) => o.id === id);
  if (!order || order.status === "Refunded") return state;
  const next = order.pointsSpent
    ? addPoints(
        state,
        `refund-${id}`,
        "Food order points returned",
        order.pointsSpent,
      )
    : state;
  return audit(
    {
      ...next,
      orders: next.orders.map((o) =>
        o.id === id ? { ...o, status: "Refunded", commission: 0 } : o,
      ),
    },
    "Demo food order refunded",
  );
}
export function claimChallenge(state) {
  if (
    !state.joinedChallenge ||
    state.claimedChallenge ||
    !state.workoutLogs.length
  )
    return state;
  return audit(
    addPoints(
      { ...state, claimedChallenge: true },
      "weekly-challenge",
      "Five for you · challenge complete",
      100,
    ),
    "Challenge reward claimed",
  );
}
export function loadState(storage) {
  try {
    const parsed = JSON.parse(storage.getItem(STORAGE_KEY));
    if (
      parsed &&
      parsed.version === 1 &&
      Array.isArray(parsed.state?.ledger) &&
      Array.isArray(parsed.state?.bookings)
    )
      return { ...initialState(), ...parsed.state };
  } catch {
    /* Start with a fresh demo when storage is unavailable or invalid. */
  }
  return initialState();
}
