import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Bars,
  Button,
  EmptyState,
  Icon,
  IconButton,
  Metric,
  Notice,
  PageHeading,
  Ring,
  SectionTitle,
  Toggle,
} from "./components.jsx";
import {
  availablePlaces,
  bookSession,
  cancelBooking,
  checkIn,
  claimChallenge,
  facilities,
  meals,
  money,
  partners,
  rewards,
  uid,
  workouts,
} from "./domain.js";

export function WorkoutCard({ workout, open, compact = false }) {
  return (
    <button
      className={`workout-card ${workout.color} ${compact ? "compact" : ""}`}
      onClick={() => open("workout", workout)}
    >
      <span className="workout-card-top">
        <Badge>{workout.category}</Badge>
        <span className="card-arrow">
          <Icon name="up" size={18} />
        </span>
      </span>
      <div className="workout-art">
        <Icon
          name={workout.category === "Cardio" ? "activity" : "dumbbell"}
          size={72}
        />
        <span className="art-orbit" />
      </div>
      <div className="workout-card-bottom">
        <h3>{workout.name}</h3>
        <div>
          <span>
            <Icon name="clock" size={13} />
            {workout.duration} min
          </span>
          <span>{workout.level}</span>
        </div>
      </div>
    </button>
  );
}
export function HomePage({ s, update, open, go, notify }) {
  const latest = s.bookings.find((b) => b.status === "Booked");
  const next =
    facilities.find((f) => f.id === latest?.sessionId) || facilities[1];
  return (
    <>
      <PageHeading
        eyebrow="YOUR EVERYDAY, A LITTLE BETTER"
        title={`Good morning, ${s.memberName.split(" ")[0]} 👋`}
        description="A fresh day. A little movement. A stronger you."
      >
        <span className="date-pill">
          <Icon name="calendar" size={16} />
          Thursday, 22 October
        </span>
      </PageHeading>
      <div className="home-layout">
        <div className="home-main">
          <section className="hero-card">
            <div className="hero-copy">
              <span className="hero-kicker">
                <span />
                YOUR NEXT CHAPTER STARTS HERE
              </span>
              <h2>
                Feel good.
                <br />
                Move better.
                <br />
                <em>Go further.</em>
              </h2>
              <p>
                Your space to train, connect, and become a little stronger every
                day.
              </p>
              <Button
                variant="lime"
                onClick={() => open("workout", workouts[0])}
              >
                Let’s get moving
                <Icon name="arrow" size={18} />
              </Button>
              <div className="hero-proof">
                <span className="mini-avatars">
                  <Avatar initials="SM" color="cream" />
                  <Avatar initials="YA" color="sage" />
                  <Avatar initials="MT" color="peach" />
                </span>
                <span>
                  Find your people.
                  <br />
                  <strong>Build your rhythm.</strong>
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src={`${import.meta.env.BASE_URL}images/training.jpg`}
                alt="Athlete training with dumbbells in a bright gym"
              />
              <span className="hero-circle circle-one" />
              <span className="hero-circle circle-two" />
              <div className="hero-float">
                <span className="float-icon">
                  <Icon name="flame" />
                </span>
                <span>
                  Small steps. Real progress.
                  <strong>You showed up. That counts.</strong>
                </span>
              </div>
            </div>
          </section>
          <div className="quick-actions">
            {[
              ["map", "Explore your gym", "Find your next move", "map"],
              [
                "calendar",
                "Make time for you",
                "Book a class or recovery",
                "bookings",
              ],
              [
                "gift",
                "Good habits, rewarded",
                `${s.points.toLocaleString()} points to enjoy`,
                "rewards",
              ],
            ].map(([icon, title, sub, page]) => (
              <button key={page} onClick={() => go(page)}>
                <span className={`quick-icon ${page}`}>
                  <Icon name={icon} size={23} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{sub}</small>
                </span>
                <Icon name="up" size={17} />
              </button>
            ))}
          </div>
          <SectionTitle
            title="Made for your momentum"
            eyebrow="YOUR TRAINING"
            action="Explore workouts"
            onAction={() => go("train")}
          />
          <div className="workout-grid">
            {workouts.map((w) => (
              <WorkoutCard key={w.id} workout={w} open={open} />
            ))}
          </div>
          <div className="two-col home-bottom">
            <section className="panel">
              <SectionTitle
                title="Your week in motion"
                action="Your activity"
                onAction={() => go("health")}
              />
              <div className="weekly-summary">
                <strong>
                  {4 + s.workoutLogs.length}
                  <small>sessions this week</small>
                </strong>
                <Badge color="sage">
                  <Icon name="trend" size={13} /> A rhythm worth keeping
                </Badge>
              </div>
              <Bars
                values={[
                  35,
                  65,
                  48,
                  80,
                  s.workoutLogs.length ? 94 : 52,
                  18,
                  12,
                ]}
                active={4}
              />
            </section>
            <section className="challenge-card">
              <span className="eyebrow">
                A LITTLE CONSISTENCY GOES A LONG WAY
              </span>
              <div className="challenge-heading">
                <h2>Five for you.</h2>
                <span className="challenge-sticker">
                  <Icon name="trophy" size={35} />
                </span>
              </div>
              <p>
                Five sessions. One week.
                <br />A stronger habit, together.
              </p>
              <div className="progress-track">
                <span
                  style={{
                    width: `${Math.min(100, (4 + s.workoutLogs.length) * 20)}%`,
                  }}
                />
              </div>
              <div className="spread">
                <small>
                  {Math.min(5, 4 + s.workoutLogs.length)} of 5 sessions
                </small>
                <strong>+100 points</strong>
              </div>
              <button className="text-link" onClick={() => go("community")}>
                Meet your next challenge
                <Icon name="arrow" size={16} />
              </button>
            </section>
          </div>
        </div>
        <aside className="right-rail">
          <section className="club-card">
            <div className="spread">
              <span className="eyebrow">YOUR CLUB, RIGHT NOW</span>
              <span className="live-label">
                <i />
                Live demo
              </span>
            </div>
            <h3>{s.gymName}</h3>
            <p>
              <Icon name="pin" size={14} />
              {s.branch}
            </p>
            <div className="occupancy-number">
              {s.occupancy}
              <span>/ {s.capacity} members</span>
            </div>
            <div className="occupancy-meter">
              <span style={{ width: `${(s.occupancy / s.capacity) * 100}%` }} />
            </div>
            <div className="spread">
              <Badge color="sage">
                {s.occupancy < 60
                  ? "Room to move"
                  : s.occupancy < 85
                    ? "Getting lively"
                    : "Busy right now"}
              </Badge>
              <small>
                {Math.round((s.occupancy / s.capacity) * 100)}% full
              </small>
            </div>
            <Button variant="secondary" onClick={() => open("occupancy")}>
              Find your perfect time
              <Icon name="arrow" size={15} />
            </Button>
          </section>
          <section className="panel next-session">
            <SectionTitle
              title="Up next"
              action="View all"
              onAction={() => go("bookings")}
            />
            <div className={`session-visual ${next.color}`}>
              <Icon
                name={next.category === "Yoga" ? "leaf" : "dumbbell"}
                size={40}
              />
              <span>
                {latest ? "YOU’RE ON THE LIST" : "SAVE A SPOT FOR YOURSELF"}
              </span>
            </div>
            <h3>{next.name}</h3>
            <p>
              <Icon name="calendar" size={14} />
              {next.day === 0
                ? "Today"
                : next.day === 1
                  ? "Tomorrow"
                  : "Saturday"}{" "}
              · {next.time} – {next.duration} min
            </p>
            <div className="trainer-line">
              <Avatar initials="OA" size="small" />
              <span>
                {next.trainer}
                <small>
                  {latest
                    ? "Your booking is confirmed"
                    : "Your coach for the session"}
                </small>
              </span>
              <IconButton
                icon="arrow"
                label="View session"
                onClick={() => open("booking", next)}
              />
            </div>
            <Button variant="secondary" onClick={() => open("booking", next)}>
              {latest ? "Booking details" : "Explore this class"}
            </Button>
          </section>
          <section className="coach-note">
            <div className="spread">
              <span className="eyebrow">IN YOUR CORNER</span>
              <Icon name="chat" size={18} />
            </div>
            <div className="trainer-line">
              <Avatar initials="OA" color="peach" />
              <span>
                <strong>{s.assignedTrainer}</strong>
                <small>Your personal trainer</small>
              </span>
            </div>
            <p>
              “Progress starts with showing up. Your next session is ready when
              you are.”
            </p>
            <button
              className="text-link"
              onClick={() =>
                open("chat", { channel: "trainer", name: s.assignedTrainer })
              }
            >
              Say hello to your coach
              <Icon name="arrow" size={16} />
            </button>
          </section>
        </aside>
      </div>
    </>
  );
}

export function TrainingPage({ s, open, go }) {
  const [category, setCategory] = useState("All workouts");
  const [search, setSearch] = useState("");
  const shown = workouts.filter(
    (w) =>
      (category === "All workouts" || w.category === category) &&
      `${w.name} ${w.muscles}`.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="MOVE WITH PURPOSE"
        title="Your next good session."
        description="Expert guidance. Your club’s equipment. A pace that feels like you."
      >
        <Button
          variant="secondary"
          icon="chat"
          onClick={() =>
            open("chat", { channel: "trainer", name: s.assignedTrainer })
          }
        >
          Talk to your trainer
        </Button>
      </PageHeading>
      <section className="program-banner">
        <div>
          <Badge color="sage">
            <Icon name="shield" size={13} /> FROM YOUR COACH
          </Badge>
          <h2>{s.customProgram?.name || s.program}</h2>
          <p>Your personal plan, built around the equipment in your branch.</p>
          <Button
            onClick={() =>
              open(
                "workout",
                s.customProgram ||
                  workouts.find((w) => w.name === s.program) ||
                  workouts[0],
              )
            }
          >
            View my program
            <Icon name="arrow" size={17} />
          </Button>
        </div>
        <Ring value={Math.min(100, (4 + s.workoutLogs.length) * 20)} size={150}>
          <strong>
            {Math.min(5, 4 + s.workoutLogs.length)}
            <small>/ 5</small>
          </strong>
          <small>weekly sessions</small>
        </Ring>
      </section>
      <div className="filter-bar">
        <div className="tabs">
          {["All workouts", "Strength", "Cardio"].map((c) => (
            <button
              key={c}
              className={c === category ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Icon name="search" size={17} />
          <input
            aria-label="Search workouts"
            placeholder="Find your workout"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div className="workout-grid large">
        {shown.map((w) => (
          <WorkoutCard key={w.id} workout={w} open={open} />
        ))}
      </div>
      {!shown.length && (
        <EmptyState
          title="No workouts found"
          description="Try a different name or category."
        />
      )}
      <div className="two-col space-top">
        <section className="panel">
          <SectionTitle
            title="Your exercise library"
            action="Explore equipment"
            onAction={() => go("map")}
          />
          {s.equipment.slice(0, 4).map((eq) => (
            <button
              className="list-row clickable"
              key={eq.id}
              onClick={() => open("equipment", eq)}
            >
              <span
                className={`square-icon ${eq.status === "Maintenance" ? "cream" : "sage"}`}
              >
                <Icon name={eq.icon} />
              </span>
              <span className="grow">
                <strong>{eq.name}</strong>
                <small>
                  {eq.muscle} · {eq.zone}
                </small>
              </span>
              <Icon name="right" size={16} />
            </button>
          ))}
        </section>
        <section className="panel">
          <SectionTitle title="Your recent sessions" />
          {s.workoutLogs.length ? (
            s.workoutLogs
              .slice()
              .reverse()
              .map((log) => (
                <div className="list-row" key={log.id}>
                  <span className="square-icon sage">
                    <Icon name="success" />
                  </span>
                  <span className="grow">
                    <strong>{log.name}</strong>
                    <small>{log.duration} min · Today</small>
                  </span>
                  <Badge color="sage">Complete</Badge>
                </div>
              ))
          ) : (
            <EmptyState
              icon="dumbbell"
              title="Your next chapter starts here"
              description="Finish a guided session to begin your workout history."
            />
          )}
        </section>
      </div>
    </>
  );
}

export function GymMapPage({ s, open, role }) {
  const [muscle, setMuscle] = useState("All muscles");
  const [query, setQuery] = useState("");
  const shown = s.equipment.filter(
    (e) =>
      (muscle === "All muscles" || e.muscle === muscle) &&
      e.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="KNOW YOUR SPACE"
        title="Find your next move."
        description={`${s.gymName} · ${s.branch} · Ground floor`}
      >
        {role === "admin" ? (
          <Button icon="plus" onClick={() => open("editEquipment", null)}>
            Add equipment
          </Button>
        ) : (
          <Badge color="sage">
            <Icon name="map" size={14} />
            Your branch, mapped
          </Badge>
        )}
      </PageHeading>
      <div className="filter-bar">
        <div className="tabs">
          {["All muscles", "Legs", "Chest", "Back", "Full body"].map((m) => (
            <button
              key={m}
              className={m === muscle ? "active" : ""}
              onClick={() => setMuscle(m)}
            >
              {m}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Icon name="search" size={17} />
          <input
            aria-label="Search equipment"
            placeholder="Find equipment"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="map-layout">
        <section className="panel floor-panel">
          <div className="spread">
            <h3>Your club floor</h3>
            <span className="muted small">Tap a machine to explore</span>
          </div>
          <div className="floor-plan">
            <span className="floor-zone cardio">CARDIO STUDIO</span>
            <span className="floor-zone strength">STRENGTH ZONE</span>
            <span className="floor-zone weights">FREE WEIGHTS</span>
            <div className="floor-wall wall-vertical" />
            <div className="floor-wall wall-horizontal" />
            <span className="floor-entrance">
              <Icon name="up" size={16} />
              ENTRANCE
            </span>
            <span className="floor-compass">N ↑</span>
            {s.equipment.map((eq) => (
              <button
                key={eq.id}
                className={`equipment-pin ${eq.status === "Maintenance" ? "maintenance" : ""} ${shown.some((e) => e.id === eq.id) ? "" : "dimmed"}`}
                style={{ left: `${eq.x}%`, top: `${eq.y}%` }}
                onClick={() => open("equipment", eq)}
                aria-label={`${eq.name}, ${eq.status}`}
              >
                <Icon name={eq.icon} size={24} />
                <span>{eq.name}</span>
                {eq.status === "Maintenance" && <i />}
              </button>
            ))}
          </div>
          <div className="map-legend">
            <span>
              <i className="legend-dot" />
              Equipment
            </span>
            <span>
              <i className="legend-dot amber" />
              Under maintenance
            </span>
            <span>Illustrative floor plan · manually placed equipment</span>
          </div>
        </section>
        <section className="panel equipment-list">
          <SectionTitle title="Explore equipment" />
          {shown.length ? (
            shown.map((eq) => (
              <button
                className="list-row clickable"
                key={eq.id}
                onClick={() => open("equipment", eq)}
              >
                <span className="square-icon sage">
                  <Icon name={eq.icon} />
                </span>
                <span className="grow">
                  <strong>{eq.name}</strong>
                  <small>
                    {eq.muscle} ·{" "}
                    {eq.status === "Active" ? "In service" : "Maintenance"}
                  </small>
                </span>
                <Icon name="right" size={16} />
              </button>
            ))
          ) : (
            <EmptyState
              title="No equipment found"
              description="Try another muscle group or search."
            />
          )}
        </section>
      </div>
      <Notice>
        The map shows equipment locations and maintenance status. It does not
        show whether a machine is occupied.
      </Notice>
    </>
  );
}

export function BookingsPage({ s, update, open, notify }) {
  const [filter, setFilter] = useState("All");
  const [tab, setTab] = useState("Discover");
  const mine = s.bookings.filter((b) => !["Cancelled"].includes(b.status));
  const filtered = facilities.filter(
    (f) => filter === "All" || f.category === filter,
  );
  return (
    <>
      <PageHeading
        eyebrow="MAKE TIME FOR YOURSELF"
        title="A spot for your next step."
        description="Find a class, slow down in the sauna, or give yourself time to recover."
      />
      <div className="filter-bar">
        <div className="tabs large-tabs">
          {["Discover", "My bookings"].map((t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
            >
              {t}
              {t === "My bookings" && (
                <span className="count">{mine.length}</span>
              )}
            </button>
          ))}
        </div>
        <span className="date-pill">
          <Icon name="calendar" size={16} />
          22–24 October
        </span>
      </div>
      {tab === "Discover" ? (
        <>
          <div className="category-filters">
            {[
              "All",
              "Strength",
              "Yoga",
              "Pilates",
              "HIIT",
              "Recovery",
              "Spa",
            ].map((c) => (
              <button
                className={c === filter ? "active" : ""}
                key={c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="booking-grid">
            {filtered.map((f) => {
              const places = availablePlaces(s, f);
              const existing = s.bookings.find(
                (b) =>
                  b.sessionId === f.id &&
                  ["Booked", "Waitlisted", "Attended"].includes(b.status),
              );
              return (
                <section className="class-card" key={f.id}>
                  <button
                    className={`class-art ${f.color}`}
                    onClick={() => open("booking", f)}
                    aria-label={`View ${f.name}`}
                  >
                    <Icon
                      name={
                        ["Recovery", "Spa", "Yoga"].includes(f.category)
                          ? "leaf"
                          : f.category === "HIIT"
                            ? "zap"
                            : "dumbbell"
                      }
                      size={54}
                    />
                    <span className="class-art-orbit" />
                    <Badge>{f.category}</Badge>
                    <span className="class-time">
                      {f.duration}
                      <small>MIN</small>
                    </span>
                  </button>
                  <div className="class-body">
                    <div className="spread">
                      <span className="muted small">
                        {f.day === 0
                          ? "Today"
                          : f.day === 1
                            ? "Tomorrow"
                            : "Saturday"}{" "}
                        · {f.time}
                      </span>
                      <span className="small">
                        {f.price ? money(f.price) : "Included"}
                      </span>
                    </div>
                    <h3>{f.name}</h3>
                    <p>{f.trainer}</p>
                    <div className="spread">
                      <span className={`spots ${!places ? "full" : ""}`}>
                        <i />
                        {places
                          ? `${places} spots left`
                          : "Full · waitlist open"}
                      </span>
                      <Button
                        variant={existing ? "secondary" : "primary"}
                        onClick={() => open("booking", f)}
                      >
                        {existing
                          ? existing.status
                          : places
                            ? "Book a spot"
                            : "Join waitlist"}
                        <Icon name="arrow" size={15} />
                      </Button>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </>
      ) : mine.length ? (
        <div className="panel">
          {mine.map((b) => {
            const f = facilities.find((f) => f.id === b.sessionId);
            return (
              <div className="booking-row" key={b.id}>
                <span className={`square-icon ${f.color}`}>
                  <Icon name="calendar" />
                </span>
                <span className="grow">
                  <strong>{f.name}</strong>
                  <small>
                    {f.day === 0
                      ? "Today"
                      : f.day === 1
                        ? "Tomorrow"
                        : "Saturday"}{" "}
                    · {f.time} · {f.trainer}
                  </small>
                </span>
                <Badge color={b.status === "Waitlisted" ? "cream" : "sage"}>
                  {b.status}
                </Badge>
                {["Booked", "Waitlisted"].includes(b.status) && (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => open("reschedule", b)}
                    >
                      Reschedule
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => open("cancelBooking", b)}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon="calendar"
          title="Your calendar has room for you"
          description="Choose a class or recovery session and we’ll save your spot."
          action="Explore sessions"
          onAction={() => setTab("Discover")}
        />
      )}
      <Notice icon="calendar">
        Demo policy: cancel or reschedule before the session starts. Paid
        sessions show their price before confirmation; no real payment is taken.
      </Notice>
    </>
  );
}

export function CommunityPage({ s, update, open, notify }) {
  const [tab, setTab] = useState("Your people");
  const visible = partners
    .filter((p) => !s.blocked.includes(p.id))
    .sort((a, b) => {
      const score = (p) =>
        (p.goal === s.partnerPreferences.goal ? 2 : 0) +
        (p.schedule === s.partnerPreferences.schedule ? 2 : 0) +
        (p.level === s.partnerPreferences.level ? 1 : 0);
      return score(b) - score(a);
    });
  return (
    <>
      <PageHeading
        eyebrow="BETTER, TOGETHER"
        title="Find your kind of energy."
        description="A familiar face. A little encouragement. A reason to show up."
      >
        <Button
          variant="secondary"
          icon="settings"
          onClick={() => open("preferences")}
        >
          Your preferences
        </Button>
      </PageHeading>
      <div className="tabs space-bottom">
        {["Your people", "Challenges"].map((t) => (
          <button
            key={t}
            className={t === tab ? "active" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "Your people" ? (
        <>
          <section className="panel space-bottom">
            <Toggle
              checked={s.discoverable}
              onChange={(v) => {
                update((st) => ({ ...st, discoverable: v }));
                notify(
                  v
                    ? "Your demo profile is now discoverable."
                    : "Your profile is hidden from partner matching.",
                );
              }}
              label="A workout partner, on your terms"
              description="Opt in to appear in your branch’s matching pool. Your health data stays private."
            />
          </section>
          {s.discoverable ? (
            <div className="partner-grid">
              {visible.map((p) => (
                <section className="panel partner-card" key={p.id}>
                  <div className="spread">
                    <Avatar
                      initials={p.initials}
                      color={p.color}
                      size="large"
                    />
                    <button
                      className="text-link muted"
                      onClick={() => open("safety", p)}
                      aria-label={`Privacy and reporting options for ${p.name}`}
                    >
                      <Icon name="more" />
                    </button>
                  </div>
                  <Badge color="sage">
                    {p.goal === s.partnerPreferences.goal
                      ? "Shared training goal"
                      : "Explore a new connection"}
                  </Badge>
                  <h3>{p.name}</h3>
                  <p>{p.bio}</p>
                  <div className="partner-details">
                    <span>
                      <Icon name="target" size={15} />
                      {p.goal}
                    </span>
                    <span>
                      <Icon name="calendar" size={15} />
                      {p.schedule}
                    </span>
                    <span>
                      <Icon name="dumbbell" size={15} />
                      {p.level}
                    </span>
                  </div>
                  {s.invitations[p.id] === "Accepted" ? (
                    <Button
                      variant="secondary"
                      icon="chat"
                      onClick={() =>
                        open("chat", { channel: p.id, name: p.name })
                      }
                    >
                      Send a message
                    </Button>
                  ) : s.invitations[p.id] === "Pending" ? (
                    <>
                      <Badge color="cream">Invitation pending</Badge>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          update((st) => ({
                            ...st,
                            invitations: {
                              ...st.invitations,
                              [p.id]: "Accepted",
                            },
                          }));
                          notify(
                            "Demo invitation accepted. Messaging is available.",
                          );
                        }}
                      >
                        Simulate acceptance
                      </Button>
                    </>
                  ) : (
                    <Button
                      icon="plus"
                      onClick={() => {
                        update((st) => ({
                          ...st,
                          invitations: { ...st.invitations, [p.id]: "Pending" },
                        }));
                        notify(`Invitation sent to ${p.name} in this demo.`);
                      }}
                    >
                      Invite to train
                    </Button>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <EmptyState
              icon="users"
              title="Your community is here when you’re ready"
              description="Enable partner matching above to explore sample profiles from your branch."
            />
          )}
        </>
      ) : (
        <>
          <section className="challenge-hero">
            <div>
              <Badge color="sage">
                <Icon name="trophy" size={14} />
                THIS WEEK’S CLUB CHALLENGE
              </Badge>
              <h2>
                Five for you.
                <br />
                <em>One habit that stays.</em>
              </h2>
              <p>
                Complete five sessions this week. We’ve started your demo week
                at four—your next workout brings you across the line.
              </p>
              <div className="inline-actions">
                {!s.joinedChallenge ? (
                  <Button
                    onClick={() => {
                      update((st) => ({ ...st, joinedChallenge: true }));
                      notify(
                        "You’re in! Complete a workout to finish your demo challenge.",
                      );
                    }}
                  >
                    Count me in
                    <Icon name="arrow" size={17} />
                  </Button>
                ) : s.claimedChallenge ? (
                  <Badge color="sage">
                    <Icon name="success" size={15} />
                    100 points earned
                  </Badge>
                ) : (
                  <Button
                    disabled={!s.workoutLogs.length}
                    onClick={() => {
                      update(claimChallenge);
                      notify(
                        "Challenge complete. 100 points added to your wallet.",
                      );
                    }}
                  >
                    {s.workoutLogs.length
                      ? "Claim 100 points"
                      : "Complete your next workout"}
                  </Button>
                )}
                <span className="muted small">28 members taking part</span>
              </div>
            </div>
            <Ring
              value={Math.min(100, (4 + s.workoutLogs.length) * 20)}
              size={180}
            >
              <strong>
                {Math.min(5, 4 + s.workoutLogs.length)}
                <small>/ 5</small>
              </strong>
              <small>sessions completed</small>
            </Ring>
          </section>
          <section className="panel space-top">
            <SectionTitle
              title="A little friendly motivation"
              eyebrow="CLUB LEADERBOARD"
            />
            {[
              ["Sara Mostafa", "SM", "5 sessions", 620],
              ["Mariam Tarek", "MT", "5 sessions", 580],
              [
                s.memberName,
                "AM",
                `${Math.min(5, 4 + s.workoutLogs.length)} sessions`,
                460 +
                  s.workoutLogs.length * 20 +
                  (s.claimedChallenge ? 100 : 0),
              ],
              ["Youssef Ali", "YA", "3 sessions", 390],
            ]
              .sort((a, b) => b[3] - a[3])
              .map(([name, initials, sessions, points], i) => (
                <div className="list-row" key={name}>
                  <span className="rank">{i + 1}</span>
                  <Avatar initials={initials} />
                  <span className="grow">
                    <strong>
                      {name}
                      {name === s.memberName ? " · you" : ""}
                    </strong>
                    <small>{sessions}</small>
                  </span>
                  <strong>
                    {points} <small className="muted">pts</small>
                  </strong>
                </div>
              ))}
          </section>
          <Notice>
            Points reward consistency, not training intensity. Respect rest days
            and your own pace.
          </Notice>
        </>
      )}
    </>
  );
}

export function RewardsPage({ s, open }) {
  return (
    <>
      <PageHeading
        eyebrow="GOOD HABITS, GOOD THINGS"
        title="You’ve earned a little more."
        description="Every visit, every session, every small step. It all adds up."
      />
      <div className="wallet-banner">
        <div>
          <span className="eyebrow">YOUR REWARDS WALLET</span>
          <h2>
            {s.points.toLocaleString()}
            <span>points</span>
          </h2>
          <p>Turn your everyday effort into something to enjoy.</p>
        </div>
        <span className="wallet-illustration">
          <Icon name="gift" size={70} />
          <i>✦</i>
        </span>
      </div>
      <SectionTitle
        title="A little something for you"
        action="How to earn points"
        onAction={() => open("earnPoints")}
      />
      <div className="reward-grid">
        {rewards.map((r) => (
          <section className="reward-card" key={r.id}>
            <div className={`reward-art ${r.color}`}>
              <Icon name={r.icon} size={49} />
              <span className="reward-spark">✧</span>
              <Badge>{r.partner}</Badge>
            </div>
            <div className="reward-body">
              <h3>{r.name}</h3>
              <p>{r.description}</p>
              <div className="spread">
                <strong>
                  {r.points.toLocaleString()}{" "}
                  <small className="muted">points</small>
                </strong>
                <Button
                  variant={s.points >= r.points ? "primary" : "secondary"}
                  disabled={s.points < r.points || s.rewardInventory[r.id] < 1}
                  onClick={() => open("redeem", r)}
                >
                  {s.rewardInventory[r.id] < 1
                    ? "Sold out"
                    : s.points >= r.points
                      ? "Enjoy this"
                      : `${r.points - s.points} to go`}
                </Button>
              </div>
              <small className="muted">
                {s.rewardInventory[r.id]} rewards available
              </small>
            </div>
          </section>
        ))}
      </div>
      <div className="two-col space-top">
        <section className="panel">
          <SectionTitle title="Your good things" />
          {s.redemptions.length ? (
            s.redemptions.map((r) => (
              <div className="list-row" key={r.id}>
                <span className="square-icon sage">
                  <Icon name="gift" />
                </span>
                <span className="grow">
                  <strong>{r.name}</strong>
                  <small>{r.code} · Demo redemption</small>
                </span>
                <Badge color="sage">{r.status}</Badge>
              </div>
            ))
          ) : (
            <EmptyState
              icon="gift"
              title="Something to look forward to"
              description="Your redeemed rewards will appear here, ready to enjoy."
            />
          )}
        </section>
        <section className="panel">
          <SectionTitle title="Every step, accounted for" />
          {s.ledger.slice(0, 8).map((e) => (
            <div className="list-row" key={e.id}>
              <span
                className={`square-icon ${e.points > 0 ? "sage" : "cream"}`}
              >
                <Icon name={e.points > 0 ? "plus" : "gift"} size={17} />
              </span>
              <span className="grow">
                <strong>{e.label}</strong>
                <small>{e.date}</small>
              </span>
              <strong className={e.points > 0 ? "positive" : ""}>
                {e.points > 0 ? "+" : ""}
                {e.points}
              </strong>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export function FoodPage({ s, update, open }) {
  const [category, setCategory] = useState("All");
  const cart = s.cart || {};
  const setCart = (next) =>
    update((state) => ({
      ...state,
      cart: typeof next === "function" ? next(state.cart || {}) : next,
    }));
  const count = Object.values(cart).reduce((a, b) => a + b, 0),
    total = Object.entries(cart).reduce(
      (a, [id, q]) => a + meals.find((m) => m.id === id).price * q,
      0,
    );
  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  return (
    <>
      <PageHeading
        eyebrow="FUEL YOUR FEEL-GOOD"
        title="Good food. Close to your club."
        description={`Local favorites, handpicked for ${s.branch}. Your next good meal is around the corner.`}
      >
        <Button
          variant="secondary"
          icon="salad"
          onClick={() => open("checkout", { cart, setCart })}
        >
          Your bag{count > 0 && <span className="count">{count}</span>}
        </Button>
      </PageHeading>
      <section className="food-banner">
        <div>
          <Badge color="sage">
            <Icon name="pin" size={13} />
            YOUR BRANCH’S FOOD PARTNERS
          </Badge>
          <h2>
            Train well.
            <br />
            <em>Eat happy.</em>
          </h2>
          <p>
            Fresh bowls, protein smoothies, and a little
            <br className="desktop-only" /> something to keep you going.
          </p>
          <span className="text-link">
            2 local partners · Pickup & demo delivery
          </span>
        </div>
        <div className="food-illustration">
          <span>🥑</span>
          <span>🥗</span>
          <span>🍋</span>
        </div>
      </section>
      <div className="filter-bar">
        <div className="tabs">
          {["All", "Meals", "Drinks"].map((c) => (
            <button
              className={c === category ? "active" : ""}
              key={c}
              onClick={() => setCategory(c)}
            >
              {c === "All" ? "All good things" : c}
            </button>
          ))}
        </div>
        <span className="muted small">Nutrition values are illustrative</span>
      </div>
      <div className="meal-grid">
        {meals
          .filter((m) => category === "All" || m.category === category)
          .map((m) => (
            <section className="meal-card" key={m.id}>
              <button
                className={`meal-art ${m.color}`}
                onClick={() => open("meal", { meal: m, add })}
                aria-label={`View ${m.name}`}
              >
                <span>{m.emoji}</span>
                <Badge>{m.protein}g protein</Badge>
              </button>
              <div className="meal-body">
                <div className="spread">
                  <small>{m.restaurant}</small>
                  <small className="muted">{m.distance}</small>
                </div>
                <h3>{m.name}</h3>
                <p>{m.description}</p>
                <div className="spread">
                  <strong>{money(m.price)}</strong>
                  <Button
                    variant="secondary"
                    icon="plus"
                    onClick={() => add(m.id)}
                  >
                    {cart[m.id]
                      ? `Add another · ${cart[m.id]} in bag`
                      : "Add to bag"}
                  </Button>
                </div>
              </div>
            </section>
          ))}
      </div>
      {count > 0 && (
        <div className="cart-bar">
          <span>
            <strong>
              {count} {count === 1 ? "good thing" : "good things"}
            </strong>
            <small>Your post-workout fuel, sorted.</small>
          </span>
          <Button
            variant="lime"
            onClick={() => open("checkout", { cart, setCart })}
          >
            View bag · {money(total)}
            <Icon name="arrow" size={17} />
          </Button>
        </div>
      )}
      <section className="panel space-top">
        <SectionTitle title="Your recent orders" />
        {s.orders.length ? (
          s.orders.map((o) => (
            <div className="booking-row" key={o.id}>
              <span className="square-icon sage">
                <Icon name="salad" />
              </span>
              <span className="grow">
                <strong>
                  {o.items.map((i) => `${i.qty} × ${i.name}`).join(", ")}
                </strong>
                <small>
                  {o.fulfillment} · {o.id.slice(0, 8).toUpperCase()} ·{" "}
                  {money(o.total)}
                </small>
              </span>
              <Badge color={o.status === "Refunded" ? "cream" : "sage"}>
                {o.status}
              </Badge>
              {o.status === "Confirmed" && (
                <Button variant="ghost" onClick={() => open("refund", o)}>
                  Cancel & refund
                </Button>
              )}
            </div>
          ))
        ) : (
          <p className="muted">
            A fresh start. Your demo orders will appear here.
          </p>
        )}
      </section>
    </>
  );
}

export function MembershipPage({ s, update, open, notify }) {
  return (
    <>
      <PageHeading
        eyebrow="YOUR CLUB. YOUR BELONGING."
        title="You’re part of something good."
        description="Your membership, benefits, and next steps—all in one place."
      />
      <div className="membership-layout">
        <section className="membership-card">
          <div className="spread">
            <span className="brand-word">
              FORMA<span>✦</span>
            </span>
            <Badge>{s.plan.toUpperCase()}</Badge>
          </div>
          <div className="membership-card-center">
            <span className="eyebrow">{s.gymName}</span>
            <h2>{s.memberName}</h2>
            <p>{s.branch} · Member since September 2026</p>
          </div>
          <div className="spread">
            <span className="member-id">
              MEMBER ID<strong>FM · 00428</strong>
            </span>
            <span className="membership-pattern">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="membership-card-footer">
            <span>
              <i />
              {s.membershipStatus}
            </span>
            <span>
              {s.plan} · Renews {s.renewal}
            </span>
          </div>
        </section>
        <section className="panel">
          <SectionTitle title="Your next visit" />
          <p className="muted">
            Check in with your digital membership. This demo updates the club
            count and rewards wallet.
          </p>
          <div className="checkin-status">
            <Icon name={s.checkedIn ? "success" : "building"} size={40} />
            <h3>
              {s.checkedIn
                ? "You’re in. Make it a good one."
                : "A little time for yourself."}
            </h3>
            <p>
              {s.checkedIn
                ? "You are checked in at your branch."
                : "Your club is ready when you are."}
            </p>
          </div>
          <Button
            className="full"
            disabled={!s.checkedIn && s.occupancy >= s.capacity}
            onClick={() => {
              update(checkIn);
              notify(
                s.checkedIn
                  ? "Checked out. See you next time!"
                  : "Demo check-in complete. Your visit is recorded.",
              );
            }}
            icon={s.checkedIn ? "logout" : "check"}
          >
            {s.checkedIn ? "Check out" : "Check in to your club"}
          </Button>
          <small className="muted block space-top-small">
            10 points for your first verified check-in of the demo day.
          </small>
        </section>
      </div>
      <div className="two-col space-top">
        <section className="panel">
          <SectionTitle title="A plan that moves with you" />
          <div className="plan-details">
            <span>
              Current membership<strong>{s.plan}</strong>
            </span>
            <span>
              Monthly subscription
              <strong>{money(s.plan === "Club Plus" ? 1500 : 2200)}</strong>
            </span>
            <span>
              Next renewal<strong>{s.renewal}</strong>
            </span>
            <span>
              Guest visits
              <strong>{s.plan === "Club Plus" ? "2" : "4"} per month</strong>
            </span>
          </div>
          <div className="inline-actions">
            <Button onClick={() => open("plans")}>
              Explore plans
              <Icon name="arrow" size={16} />
            </Button>
            <Button variant="secondary" onClick={() => open("renew")}>
              Renew membership
            </Button>
          </div>
        </section>
        <section className="panel">
          <SectionTitle title="Your payment history" />
          {s.payments.map((p) => (
            <div className="list-row" key={p.id}>
              <span className="square-icon sage">
                <Icon name="card" />
              </span>
              <span className="grow">
                <strong>{p.label}</strong>
                <small>{p.date}</small>
              </span>
              <span className="align-right">
                <strong>{money(p.amount)}</strong>
                <small className="positive">{p.status}</small>
              </span>
            </div>
          ))}
        </section>
      </div>
      <Notice>
        Membership credentials and payments are demonstration-only. No card
        details are collected and no charges are made.
      </Notice>
    </>
  );
}

export function HealthPage({ s, update, open, notify }) {
  return (
    <>
      <PageHeading
        eyebrow="LISTEN TO YOUR BODY"
        title="Your movement, in perspective."
        description="A little insight to support your routine. Always shared on your terms."
      />
      <section className="wearable-banner">
        <span className="wearable-art">
          <Icon name="watch" size={84} />
        </span>
        <div className="grow">
          <Badge color={s.wearable ? "sage" : "cream"}>
            {s.wearable
              ? "Demo wearable connected"
              : "A MORE CONNECTED ROUTINE"}
          </Badge>
          <h2>
            {s.wearable
              ? "Your everyday movement, together."
              : "Bring your activity along."}
          </h2>
          <p>
            {s.wearable
              ? "Sample data from your demo watch. No real health account is connected."
              : "Explore how a wearable connection could bring activity and workout summaries into your gym experience."}
          </p>
        </div>
        <Button
          variant={s.wearable ? "secondary" : "primary"}
          onClick={() => open("wearable")}
        >
          {s.wearable ? "Manage connection" : "Connect a wearable"}
          <Icon name="arrow" size={17} />
        </Button>
      </section>
      {s.wearable ? (
        <>
          <div className="metrics-grid space-top">
            <Metric
              icon="steps"
              label="Steps today"
              value="8,420"
              suffix="steps"
              change="Your everyday movement"
            />
            <Metric
              icon="flame"
              label="Active energy"
              value="420"
              suffix="kcal"
              color="peach"
              change="Illustrative watch data"
            />
            <Metric
              icon="heart"
              label="Resting heart rate"
              value="64"
              suffix="bpm"
              color="lilac"
              change="Sample data · not a medical reading"
            />
            <Metric
              icon="clock"
              label="Active minutes"
              value={48 + s.workoutLogs.reduce((a, b) => a + b.duration, 0)}
              suffix="min"
              color="cream"
              change="Watch sample + demo workouts"
            />
          </div>
          <div className="two-col space-top">
            <section className="panel">
              <SectionTitle title="Your movement this week" />
              <Bars values={[45, 70, 58, 88, 75, 32, 24]} active={4} />
            </section>
            <section className="panel">
              <SectionTitle title="You decide what to share" />
              <Toggle
                checked={s.shareHealth}
                onChange={(v) => {
                  update((st) => ({ ...st, shareHealth: v }));
                  notify(
                    v
                      ? "Sample activity summaries are visible to your assigned trainer."
                      : "Trainer access to sample health summaries removed.",
                  );
                }}
                label="Share with my trainer"
                description={`Allow ${s.assignedTrainer} to see sample activity and heart-rate summaries. You can turn this off at any time.`}
              />
              <Notice icon="shield">
                Only your assigned trainer sees the summaries you choose to
                share.
              </Notice>
            </section>
          </div>
        </>
      ) : (
        <EmptyState
          icon="watch"
          title="Your data belongs to you"
          description="Preview the connection and consent flow to explore sample health insights."
          action="Explore wearable connection"
          onAction={() => open("wearable")}
        />
      )}
    </>
  );
}
