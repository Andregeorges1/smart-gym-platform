import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Bars,
  Button,
  DownloadDoc,
  EmptyState,
  Icon,
  Metric,
  Notice,
  PageHeading,
  Ring,
  SectionTitle,
} from "./components.jsx";
import {
  facilities,
  meals,
  money,
  rewards,
  verifyAttendance,
  workouts,
} from "./domain.js";
import { GymMapPage } from "./MemberPages.jsx";

function ClientCard({ s, open }) {
  return (
    <section className="panel client-card">
      <div className="spread">
        <Avatar initials="AM" size="large" />
        <Badge color="sage">Assigned to you</Badge>
      </div>
      <h3>{s.memberName}</h3>
      <p>Build strength · Intermediate · {s.branch}</p>
      <div className="mini-metrics">
        <span>
          <strong>{4 + s.workoutLogs.length}</strong>Weekly sessions
        </span>
        <span>
          <strong>{s.program.includes("Lower") ? "Lower" : "Custom"}</strong>
          Training focus
        </span>
      </div>
      <Button variant="secondary" icon="users" onClick={() => open("client")}>
        View member profile
      </Button>
    </section>
  );
}
export function TrainerPage({ page, s, update, open, go, notify }) {
  if (page === "calendar")
    return (
      <>
        <PageHeading
          eyebrow="YOUR TIME, WELL SPENT"
          title="Room for meaningful progress."
          description="Your coaching sessions, all in one place."
        >
          <Button icon="plus" onClick={() => open("trainerSession")}>
            Schedule a session
          </Button>
        </PageHeading>
        <section className="panel">
          <SectionTitle
            title="Coaching calendar"
            eyebrow="THURSDAY, 22 OCTOBER"
          />
          {s.trainerSessions.length ? (
            s.trainerSessions.map((t) => (
              <div className="booking-row" key={t.id}>
                <span className="schedule-time">{t.time}</span>
                <Avatar initials="AM" />
                <span className="grow">
                  <strong>{t.member}</strong>
                  <small>Personal coaching · 45 min · {t.date}</small>
                </span>
                <Badge color="sage">{t.status}</Badge>
                {t.status === "Scheduled" && (
                  <>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        update((st) => ({
                          ...st,
                          trainerSessions: st.trainerSessions.map((v) =>
                            v.id === t.id ? { ...v, status: "Completed" } : v,
                          ),
                        }));
                        notify("Coaching session marked complete.");
                      }}
                    >
                      Mark complete
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => open("cancelTrainerSession", t)}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            ))
          ) : (
            <EmptyState
              title="A clear calendar"
              description="Schedule your first coaching session."
            />
          )}
        </section>
      </>
    );
  if (page === "clients")
    return (
      <>
        <PageHeading
          eyebrow="PEOPLE BEFORE PROGRAMS"
          title="In their corner."
          description="Your assigned member’s goals, program, progress, and shared insights."
        />
        <div className="three-col">
          <ClientCard s={s} open={open} />
          <section className="panel span-two">
            <SectionTitle title="A routine taking shape" />
            <div className="metrics-grid three">
              <Metric
                icon="dumbbell"
                label="Demo workouts logged"
                value={s.workoutLogs.length}
              />
              <Metric
                icon="calendar"
                label="Upcoming sessions"
                value={
                  s.trainerSessions.filter((t) => t.status === "Scheduled")
                    .length
                }
              />
              <Metric
                icon="heart"
                label="Health sharing"
                value={s.shareHealth && s.wearable ? "On" : "Off"}
              />
            </div>
            <Notice icon="shield">
              {s.shareHealth && s.wearable
                ? "Alex has consented to share sample activity and heart-rate summaries."
                : `${s.memberName} has not shared wearable summaries with you. Their health metrics remain private.`}
            </Notice>
            <div className="inline-actions">
              <Button icon="edit" onClick={() => open("programBuilder")}>
                Adjust their program
              </Button>
              <Button
                variant="secondary"
                icon="chat"
                onClick={() =>
                  open("chat", { channel: "trainer", name: s.memberName })
                }
              >
                Check in with a message
              </Button>
            </div>
          </section>
        </div>
      </>
    );
  if (page === "programs")
    return (
      <>
        <PageHeading
          eyebrow="GUIDANCE THAT FITS"
          title="A program with their name on it."
          description="Create sessions using equipment that exists in this member’s branch."
        >
          <Button icon="plus" onClick={() => open("programBuilder")}>
            Build a program
          </Button>
        </PageHeading>
        <div className="two-col">
          <section className="panel">
            <Badge color="sage">ASSIGNED TO {s.memberName.toUpperCase()}</Badge>
            <h2 className="space-top">{s.customProgram?.name || s.program}</h2>
            <p className="muted">
              {s.branch} · {s.customProgram?.exercises.length || 4} exercises ·{" "}
              {s.customProgram?.duration || 35} minutes
            </p>
            {(s.customProgram?.exercises || workouts[0].exercises).map(
              (ex, i) => (
                <div className="list-row" key={i}>
                  <span className="step-number">{i + 1}</span>
                  <span className="grow">
                    <strong>{ex.name}</strong>
                    <small>
                      {ex.sets} sets × {ex.reps} reps
                    </small>
                  </span>
                  <Badge color="sage">
                    {s.equipment.find((e) => e.id === ex.equipment)?.name ||
                      "Bodyweight"}
                  </Badge>
                </div>
              ),
            )}
            <Button
              className="space-top"
              variant="secondary"
              icon="edit"
              onClick={() => open("programBuilder")}
            >
              Edit assigned program
            </Button>
          </section>
          <section className="panel">
            <SectionTitle
              title="A little guidance beyond the gym"
              action="Share a document"
              onAction={() => open("document")}
            />
            {s.documents.map((doc) => (
              <div className="document-card" key={doc.id}>
                <span className="square-icon cream">
                  <Icon name="file" />
                </span>
                <div>
                  <h3>{doc.name}</h3>
                  <p>General guidance · Shared {doc.date.toLowerCase()}</p>
                  <DownloadDoc doc={doc} />
                </div>
              </div>
            ))}
            <Notice>
              Share general nutrition education. Individual medical nutrition
              care needs an appropriately qualified professional.
            </Notice>
          </section>
        </div>
      </>
    );
  if (page === "messages")
    return (
      <>
        <PageHeading
          eyebrow="A LITTLE ENCOURAGEMENT"
          title="Keep the conversation going."
          description="Coaching continues between sessions."
        />
        <section className="panel">
          <button
            className="list-row clickable full"
            onClick={() =>
              open("chat", { channel: "trainer", name: s.memberName })
            }
          >
            <Avatar initials="AM" />
            <span className="grow align-left">
              <strong>{s.memberName}</strong>
              <small>
                {s.messages.filter((m) => m.channel === "trainer").at(-1)
                  ?.text || "Start a conversation"}
              </small>
            </span>
            <Badge color="sage">
              {s.messages.filter((m) => m.channel === "trainer").length}{" "}
              messages
            </Badge>
            <Icon name="arrow" />
          </button>
        </section>
      </>
    );
  return (
    <>
      <PageHeading
        eyebrow="YOUR COACHING SPACE"
        title="Good coaching starts with you."
        description={`Welcome back, ${s.assignedTrainer.split(" ")[0]}. Let’s make today count.`}
      >
        <Button icon="plus" onClick={() => open("trainerSession")}>
          Schedule a session
        </Button>
      </PageHeading>
      <div className="metrics-grid">
        <Metric
          icon="users"
          label="Connected demo member"
          value="1"
          change="Assigned and ready to train"
        />
        <Metric
          icon="calendar"
          label="Upcoming sessions"
          value={
            s.trainerSessions.filter((t) => t.status === "Scheduled").length
          }
          color="cream"
          change="In your coaching calendar"
        />
        <Metric
          icon="dumbbell"
          label="Workouts completed"
          value={s.workoutLogs.length}
          color="sage"
          change="Logged in this demo"
        />
        <Metric
          icon="chat"
          label="Member messages"
          value={
            s.messages.filter(
              (m) => m.from === "member" && m.channel === "trainer",
            ).length
          }
          color="lilac"
          change="A little encouragement goes far"
        />
      </div>
      <div className="two-col space-top">
        <section className="panel">
          <SectionTitle
            title="Your next conversation"
            action="View members"
            onAction={() => go("clients")}
          />
          <div className="trainer-member-focus">
            <Avatar initials="AM" size="large" />
            <div>
              <h3>{s.memberName}</h3>
              <p>Build strength · Intermediate</p>
            </div>
            <Ring
              value={Math.min(100, (4 + s.workoutLogs.length) * 20)}
              size={95}
            />
          </div>
          <p className="muted">
            Your member’s next program is ready. A quick check-in can help keep
            their momentum going.
          </p>
          <div className="inline-actions">
            <Button
              variant="secondary"
              icon="chat"
              onClick={() =>
                open("chat", { channel: "trainer", name: s.memberName })
              }
            >
              Send encouragement
            </Button>
            <Button variant="ghost" onClick={() => open("client")}>
              View progress
              <Icon name="arrow" size={16} />
            </Button>
          </div>
        </section>
        <section className="panel">
          <SectionTitle title="A week of small wins" />
          <Bars active={4} />
          <div className="spread">
            <span className="muted small">Member’s sample weekly activity</span>
            <Badge color="sage">{s.workoutLogs.length} new sessions</Badge>
          </div>
        </section>
      </div>
      <section className="panel space-top">
        <SectionTitle
          title="Today’s coaching"
          action="Open calendar"
          onAction={() => go("calendar")}
        />
        {s.trainerSessions
          .filter((t) => t.status === "Scheduled")
          .map((t) => (
            <div className="list-row" key={t.id}>
              <span className="schedule-time">{t.time}</span>
              <span className="grow">
                <strong>{t.member}</strong>
                <small>{t.date} · Personal coaching · 45 min</small>
              </span>
              <Button variant="secondary" onClick={() => open("client")}>
                Session details
              </Button>
            </div>
          ))}
      </section>
    </>
  );
}

function AdminBookings({ s, update, notify, open }) {
  const live = s.bookings.filter((b) => b.status !== "Cancelled");
  return (
    <>
      <PageHeading
        eyebrow="A WELL-RUN CLUB"
        title="Every session, in sync."
        description="See member reservations and verify attendance. Changes appear in the member experience."
      />
      <div className="metrics-grid three">
        <Metric icon="calendar" label="Reservations" value={live.length} />
        <Metric
          icon="users"
          label="Waitlisted"
          value={live.filter((b) => b.status === "Waitlisted").length}
        />
        <Metric
          icon="success"
          label="Verified attendance"
          value={live.filter((b) => b.status === "Attended").length}
        />
      </div>
      <section className="panel space-top">
        <SectionTitle title="Member reservations" />
        {live.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Session</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {live.map((b) => {
                  const f = facilities.find((f) => f.id === b.sessionId);
                  return (
                    <tr key={b.id}>
                      <td>{b.member}</td>
                      <td>{f.name}</td>
                      <td>{f.time}</td>
                      <td>
                        <Badge
                          color={b.status === "Waitlisted" ? "cream" : "sage"}
                        >
                          {b.status}
                        </Badge>
                      </td>
                      <td>
                        {b.status === "Booked" ? (
                          <Button
                            variant="secondary"
                            onClick={() => {
                              update((st) => verifyAttendance(st, b.id));
                              notify(
                                "Attendance verified. 15 points added to the member wallet.",
                              );
                            }}
                          >
                            Verify attendance
                          </Button>
                        ) : b.status === "Waitlisted" ? (
                          <Button
                            variant="ghost"
                            onClick={() => open("waitlistInfo", b)}
                          >
                            Waitlist details
                          </Button>
                        ) : (
                          <span className="positive">Recorded</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            icon="calendar"
            title="Ready for your first reservation"
            description="Switch to the member experience and book a session. It will appear here immediately."
          />
        )}
      </section>
      <section className="panel space-top">
        <SectionTitle title="Branch schedule & capacity" />
        {facilities.map((f) => (
          <div className="list-row" key={f.id}>
            <span className={`square-icon ${f.color}`}>
              <Icon name="calendar" />
            </span>
            <span className="grow">
              <strong>{f.name}</strong>
              <small>
                {f.trainer} · {f.time}
              </small>
            </span>
            <span>
              {f.occupied +
                s.bookings.filter(
                  (b) =>
                    b.sessionId === f.id &&
                    ["Booked", "Attended"].includes(b.status),
                ).length}{" "}
              / {f.capacity}
            </span>
            <Badge color="sage">{f.category}</Badge>
          </div>
        ))}
      </section>
    </>
  );
}
export function AdminPage({ page, s, update, open, go, notify }) {
  if (page === "equipment")
    return <GymMapPage s={s} open={open} role="admin" />;
  if (page === "bookings")
    return <AdminBookings {...{ s, update, notify, open }} />;
  if (page === "members")
    return (
      <>
        <PageHeading
          eyebrow="PEOPLE AT THE HEART OF YOUR CLUB"
          title="A membership worth coming back to."
          description="Manage the connected demo member and their coaching relationship."
        />
        <section className="panel">
          <div className="member-admin-row">
            <Avatar initials="AM" size="large" />
            <div className="grow">
              <h2>{s.memberName}</h2>
              <p>
                {s.plan} · {s.branch} · FM-00428
              </p>
            </div>
            <Badge color="sage">{s.membershipStatus}</Badge>
            <Button variant="secondary" onClick={() => open("assignTrainer")}>
              Assign trainer
            </Button>
            <Button onClick={() => open("client")}>View member</Button>
          </div>
          <div className="plan-details space-top">
            <span>
              Personal trainer<strong>{s.assignedTrainer}</strong>
            </span>
            <span>
              Membership renewal<strong>{s.renewal}</strong>
            </span>
            <span>
              Points balance<strong>{s.points.toLocaleString()}</strong>
            </span>
            <span>
              Attendance
              <strong>
                {s.checkedIn ? "Checked in now" : "Outside the club"}
              </strong>
            </span>
          </div>
        </section>
        <section className="panel space-top">
          <SectionTitle title="Member payment records" />
          {s.payments.map((p) => (
            <div className="list-row" key={p.id}>
              <span className="square-icon sage">
                <Icon name="card" />
              </span>
              <span className="grow">
                <strong>{p.label}</strong>
                <small>
                  {s.memberName} · {p.date}
                </small>
              </span>
              <strong>{money(p.amount)}</strong>
              <Badge color="sage">{p.status}</Badge>
            </div>
          ))}
        </section>
        <Notice icon="shield">
          Gym administration does not expose private wearable data or
          trainer-member conversations.
        </Notice>
      </>
    );
  if (page === "rewards")
    return (
      <>
        <PageHeading
          eyebrow="ENGAGEMENT WITH INTENTION"
          title="Make the good habits stick."
          description="Track reward inventory, issued points, and member redemptions."
        />
        <div className="metrics-grid three">
          <Metric
            icon="wallet"
            label="Member points balance"
            value={s.points.toLocaleString()}
          />
          <Metric
            icon="gift"
            label="Rewards redeemed"
            value={s.redemptions.length}
          />
          <Metric
            icon="trophy"
            label="Challenge participation"
            value={s.joinedChallenge ? "Joined" : "Not yet"}
          />
        </div>
        <section className="panel space-top">
          <SectionTitle title="Reward inventory" />
          {rewards.map((r) => (
            <div className="booking-row" key={r.id}>
              <span className={`square-icon ${r.color}`}>
                <Icon name={r.icon} />
              </span>
              <span className="grow">
                <strong>{r.name}</strong>
                <small>
                  {r.partner} · {r.points} points
                </small>
              </span>
              <span>{s.rewardInventory[r.id]} available</span>
              <Button variant="secondary" onClick={() => open("inventory", r)}>
                Edit inventory
              </Button>
            </div>
          ))}
        </section>
        <section className="panel space-top">
          <SectionTitle title="Redemption requests" />
          {s.redemptions.length ? (
            s.redemptions.map((r) => (
              <div className="booking-row" key={r.id}>
                <span className="grow">
                  <strong>{r.name}</strong>
                  <small>
                    {s.memberName} · {r.code}
                  </small>
                </span>
                <Badge color="sage">{r.status}</Badge>
                {r.status !== "Used" && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      update((st) => ({
                        ...st,
                        redemptions: st.redemptions.map((x) =>
                          x.id === r.id ? { ...x, status: "Used" } : x,
                        ),
                      }));
                      notify("Reward marked as used.");
                    }}
                  >
                    Mark fulfilled
                  </Button>
                )}
              </div>
            ))
          ) : (
            <p className="muted">
              No redemptions yet. Try redeeming a reward in the member
              experience.
            </p>
          )}
        </section>
        <Notice>
          Demo values: check-in 10 pts, one completed workout per day 20 pts,
          attended class 15 pts, weekly challenge 100 pts. Reward funding and
          economics require pilot validation.
        </Notice>
      </>
    );
  if (page === "partners")
    return (
      <>
        <PageHeading
          eyebrow="YOUR LOCAL FITNESS ECOSYSTEM"
          title="Good partnerships. Shared growth."
          description="Branch-specific food partners, order activity, and illustrative commissions."
        />
        <div className="metrics-grid three">
          <Metric icon="salad" label="Branch partners" value="2" />
          <Metric
            icon="wallet"
            label="Confirmed order value"
            value={money(
              s.orders
                .filter((o) => o.status !== "Refunded")
                .reduce((a, o) => a + o.total, 0),
            )}
          />
          <Metric
            icon="trend"
            label="Illustrative commission"
            value={money(s.orders.reduce((a, o) => a + o.commission, 0))}
          />
        </div>
        <div className="two-col space-top">
          {[
            ["Green Bowl", "salad", "3 min walk · Bowls & fresh meals"],
            ["Blend Lab", "cup", "1 min walk · Protein smoothies"],
          ].map(([name, icon, desc]) => (
            <section className="panel" key={name}>
              <span className="square-icon sage">
                <Icon name={icon} />
              </span>
              <h2>{name}</h2>
              <p className="muted">{desc}</p>
              <Badge color="sage">Partner · {s.branch}</Badge>
              <p className="muted small">
                Illustrative total commission: 10% after reward discounts.
                Allocation between gym and platform remains to be agreed.
              </p>
              <Button
                variant="secondary"
                onClick={() => open("partnerInfo", { name })}
              >
                Partner details
                <Icon name="arrow" size={16} />
              </Button>
            </section>
          ))}
        </div>
        <section className="panel space-top">
          <SectionTitle title="Orders & commission ledger" />
          {s.orders.length ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Member total</th>
                    <th>Commission</th>
                    <th>Fulfillment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {s.orders.map((o) => (
                    <tr key={o.id}>
                      <td>{o.id.slice(0, 8).toUpperCase()}</td>
                      <td>{money(o.total)}</td>
                      <td>{money(o.commission)}</td>
                      <td>{o.fulfillment}</td>
                      <td>
                        <Badge
                          color={o.status === "Refunded" ? "cream" : "sage"}
                        >
                          {o.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              icon="salad"
              title="Your next local connection"
              description="Place a demo food order as a member to see the commission ledger update."
            />
          )}
        </section>
      </>
    );
  if (page === "reports")
    return (
      <>
        <PageHeading
          eyebrow="A CLEARER PICTURE"
          title="Your club, in perspective."
          description="Sample baseline metrics plus the live activity from this demonstration."
        >
          <Button
            variant="secondary"
            icon="download"
            onClick={() => {
              const rows = [
                ["Metric", "Value"],
                ["Member", s.memberName],
                ["Occupancy", s.occupancy],
                ["Demo bookings", s.bookings.length],
                ["Completed workouts", s.workoutLogs.length],
                ["Points balance", s.points],
                ["Redemptions", s.redemptions.length],
                ["Food orders", s.orders.length],
              ];
              const a = document.createElement("a");
              a.href =
                "data:text/csv;charset=utf-8," +
                encodeURIComponent(
                  rows
                    .map((row) =>
                      row
                        .map((c) => '"' + String(c).replaceAll('"', '""') + '"')
                        .join(","),
                    )
                    .join("\n"),
                );
              a.download = "forma-demo-report.csv";
              a.click();
              notify("Demo activity report downloaded.");
            }}
          >
            Export demo report
          </Button>
        </PageHeading>
        <div className="metrics-grid">
          <Metric
            icon="users"
            label="Sample active memberships"
            value="248"
            change="Illustrative pilot baseline"
          />
          <Metric
            icon="calendar"
            label="New demo bookings"
            value={s.bookings.filter((b) => b.status !== "Cancelled").length}
          />
          <Metric
            icon="trophy"
            label="Reward redemptions"
            value={s.redemptions.length}
          />
          <Metric
            icon="salad"
            label="New demo orders"
            value={s.orders.length}
          />
        </div>
        <div className="two-col space-top">
          <section className="panel">
            <SectionTitle title="Sample member visits" />
            <Bars values={[50, 68, 60, 85, 72, 95, 45]} />
            <small className="muted">
              Illustrative weekly baseline, not a measured result.
            </small>
          </section>
          <section className="panel">
            <SectionTitle title="Demo engagement funnel" />
            {[
              ["Member explored the demo", true],
              ["Booked a session", s.bookings.length > 0],
              ["Completed a workout", s.workoutLogs.length > 0],
              ["Redeemed a reward", s.redemptions.length > 0],
              ["Ordered from a partner", s.orders.length > 0],
            ].map(([label, done]) => (
              <div className="list-row" key={label}>
                <span className={`square-icon ${done ? "sage" : "cream"}`}>
                  <Icon name={done ? "check" : "clock"} />
                </span>
                <strong>{label}</strong>
              </div>
            ))}
          </section>
        </div>
        <section className="panel space-top">
          <SectionTitle title="Operational audit trail" />
          {s.audit.length ? (
            s.audit.slice(0, 12).map((a) => (
              <div className="list-row" key={a.id}>
                <span className="muted small">{a.time}</span>
                <strong>{a.label}</strong>
              </div>
            ))
          ) : (
            <p className="muted">
              Bookings, visits, rewards, and orders create entries here as you
              explore.
            </p>
          )}
        </section>
      </>
    );
  const active = s.bookings.filter((b) =>
    ["Booked", "Attended"].includes(b.status),
  ).length;
  return (
    <>
      <PageHeading
        eyebrow="YOUR CLUB, CONNECTED"
        title="A good day starts with clarity."
        description={`${s.gymName} · ${s.branch} · Thursday, 22 October`}
      >
        <Button
          variant="secondary"
          icon="settings"
          onClick={() => open("branding")}
        >
          Personalize this demo
        </Button>
      </PageHeading>
      <div className="metrics-grid">
        <Metric
          icon="users"
          label="In the club now"
          value={s.occupancy}
          suffix={`/ ${s.capacity}`}
          change="Connected to demo check-ins"
        />
        <Metric
          icon="calendar"
          label="New reservations"
          value={active}
          color="cream"
          change="Member bookings appear here"
        />
        <Metric
          icon="wallet"
          label="Demo member payments"
          value={money(s.payments.reduce((a, p) => a + p.amount, 0))}
          color="sage"
          change="Includes sample opening payment"
        />
        <Metric
          icon="gift"
          label="Member reward balance"
          value={s.points.toLocaleString()}
          suffix="pts"
          color="lilac"
          change={`${s.redemptions.length} rewards redeemed`}
        />
      </div>
      <div className="admin-feature-grid space-top">
        <section className="panel">
          <SectionTitle
            title="A little space for everyone"
            action="Manage attendance"
            onAction={() => open("occupancyAdmin")}
          />
          <div className="occupancy-admin">
            <Ring value={(s.occupancy / s.capacity) * 100} size={160}>
              <strong>{s.occupancy}</strong>
              <small>members inside</small>
            </Ring>
            <div>
              <Badge color="sage">
                {s.occupancy < 60 ? "Comfortable" : "Getting busy"}
              </Badge>
              <p className="muted">
                Keep your members informed before they arrive.
              </p>
              <small>Branch capacity: {s.capacity}</small>
            </div>
          </div>
          <div className="spread">
            <small className="muted">Last updated in this demo</small>
            <span className="live-label">
              <i />
              Connected demo
            </span>
          </div>
        </section>
        <section className="panel">
          <SectionTitle
            title="Your club’s weekly rhythm"
            action="View reports"
            onAction={() => go("reports")}
          />
          <Bars values={[45, 65, 50, 88, 76, 95, 40]} />
          <small className="muted">
            Sample baseline · member visits by day
          </small>
        </section>
      </div>
      <div className="three-col space-top">
        {[
          [
            "calendar",
            "Keep every session running smoothly",
            "Bookings & attendance",
            "bookings",
          ],
          [
            "dumbbell",
            "A gym map that stays up to date",
            "Equipment & floor plans",
            "equipment",
          ],
          [
            "salad",
            "Build your local fitness ecosystem",
            "Partners & commission",
            "partners",
          ],
        ].map(([icon, title, action, page]) => (
          <button
            className="panel admin-shortcut"
            key={page}
            onClick={() => go(page)}
          >
            <span className="square-icon sage">
              <Icon name={icon} />
            </span>
            <h3>{title}</h3>
            <span className="text-link">
              {action}
              <Icon name="arrow" size={16} />
            </span>
          </button>
        ))}
      </div>
      <section className="panel space-top">
        <SectionTitle
          title="Recent club activity"
          action="View all activity"
          onAction={() => go("reports")}
        />
        {s.audit.length ? (
          s.audit.slice(0, 4).map((a) => (
            <div className="list-row" key={a.id}>
              <span className="square-icon sage">
                <Icon name="activity" />
              </span>
              <span className="grow">
                <strong>{a.label}</strong>
                <small>Connected demo activity</small>
              </span>
              <span className="muted small">{a.time}</span>
            </div>
          ))
        ) : (
          <EmptyState
            icon="activity"
            title="See the connection for yourself"
            description="Switch to the member view and book a class, check in, or redeem a reward. The activity appears here."
          />
        )}
      </section>
    </>
  );
}

export function PlatformPage({ s, open, go }) {
  return (
    <>
      <PageHeading
        eyebrow="PLATFORM ADMINISTRATION"
        title="A foundation for every club."
        description="A preview of onboarding, SaaS billing, and platform oversight."
      />
      <div className="metrics-grid three">
        <Metric icon="building" label="Connected demo tenant" value="1" />
        <Metric icon="pin" label="Demo branches" value="1" />
        <Metric icon="shield" label="Gym subscription" value={s.saasPlan} />
      </div>
      <section className="panel space-top">
        <SectionTitle title="Your gym portfolio" />
        <div className="member-admin-row">
          <span className="square-icon sage">
            <Icon name="building" />
          </span>
          <div className="grow">
            <h3>{s.gymName}</h3>
            <p>
              {s.branch} · {s.saasPlan} plan
            </p>
          </div>
          <Badge color="sage">Pilot ready</Badge>
          <Button variant="secondary" onClick={() => open("platformPlan")}>
            Manage SaaS plan
          </Button>
          <Button onClick={() => go("overview", "admin")}>
            Open gym workspace
            <Icon name="arrow" size={16} />
          </Button>
        </div>
      </section>
      <div className="two-col space-top">
        <section className="panel">
          <SectionTitle title="Gym onboarding checklist" />
          {[
            "Gym and branch created",
            "Equipment manually catalogued",
            "Sample floor plan prepared",
            "Trainer and demo member assigned",
          ].map((t) => (
            <div className="list-row" key={t}>
              <Icon name="success" />
              <strong>{t}</strong>
            </div>
          ))}
          <Notice>
            Production tenant isolation, authentication, access integrations,
            and SaaS billing are architecture requirements, not implemented
            security boundaries in this local demo.
          </Notice>
        </section>
        <section className="panel">
          <SectionTitle title="Platform activity" />
          {s.audit.slice(0, 7).map((a) => (
            <div className="list-row" key={a.id}>
              <span className="muted small">{a.time}</span>
              <strong>{a.label}</strong>
            </div>
          ))}
          {!s.audit.length && (
            <p className="muted">Activity will appear as the demo is used.</p>
          )}
        </section>
      </div>
    </>
  );
}
