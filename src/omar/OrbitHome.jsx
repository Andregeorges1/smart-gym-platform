import React from "react";
import {
  me,
  M,
  Z,
  Ge,
  Ke,
  Zy,
  _u,
  ze,
  lt,
  Tl,
  qt,
  Lf,
  If,
  Ml,
  Pl,
  Xo,
  en,
  de,
  dt,
  be,
  gn,
  Pn,
  Xa,
  bt,
  ea,
} from "./engine.jsx";
import OrbitScene from "./OrbitScene.jsx";

export default function OrbitHome() {
  const { s, go, t, f, L } = me();
  const ar = s.lang === "ar",
    tx = (en, arText) => (ar ? arText : en);
  const member = ze(s, be),
    status = lt(s, member),
    crowd = Tl(s),
    visit = qt(s, be),
    award = Lf(s),
    quiet = If(s);
  const program = s.programs.find((p) => p.memberId === be),
    points = Pl(s),
    visits = Xo(s),
    pkg = en(s, be);
  const pt = s.ptSessions.find(
    (p) => p.memberId === be && p.status === "scheduled" && p.day === 0,
  );
  const bookings = s.bookings
    .filter(
      (b) => b.memberId === be && ["booked", "waitlisted"].includes(b.status),
    )
    .map((b) => ({ b, sess: de(s.sessions, b.sessionId) }))
    .sort((a, b) => bt(a.sess) - bt(b.sess))
    .slice(0, 2);
  const tonight = s.sessions
    .filter((sess) => sess.day === 0 && gn(s, sess) === "upcoming")
    .slice(0, 4);
  return (
    <div className="orbit-home">
      <header className="orbit-greeting">
        <div>
          <span className="micro">
            {tx("YOUR SPACE / YOUR PACE", "مساحتك / إيقاعك")}
          </span>
          <h1>
            {tx("Ready, ", "جاهزة يا ")}
            {L(member.name).split(" ")[0]}
            <i>?</i>
          </h1>
        </div>
        <div className="orbit-location">
          <span className="status-dot" />
          {L(s.gym.name)}
          <small>{L(s.gym.branch).split(" · ")[0]}</small>
        </div>
        <button
          className="orbit-profile"
          aria-label={t("m.nav.me")}
          onClick={() => go("member", "me")}
        >
          <Ke name={L(member.name)} tone="lime" />
        </button>
      </header>
      <div className="orbit-dashboard">
        <section className="orbit-hero">
          <div className="orbital-grid" aria-hidden="true" />
          <div className="orbit-hero-top">
            <span className="micro">
              <i className="status-dot" /> FORMA / HUMAN POTENTIAL
            </span>
            <span className="micro">01 — ∞</span>
          </div>
          <div className="orbit-hero-title">
            <span>{tx("BEYOND", "تجاوزي")}</span>
            <span>{tx("LIMITS.", "الحدود.")}</span>
          </div>
          <div className="orbit-art">
            <OrbitScene />
            <div className="orbit-axis axis-x" />
            <div className="orbit-axis axis-y" />
            <span className="orbit-art-label micro">MOTION / ENERGY / YOU</span>
          </div>
          <div className="orbit-hero-bottom">
            <div>
              <p>
                {tx(
                  "Your next version starts here.",
                  "نسختك القادمة تبدأ هنا.",
                )}
              </p>
              <div className="orbit-hero-actions">
                <Z
                  variant="accent"
                  iconEnd="out"
                  onClick={() => go("member", "pass")}
                >
                  {tx("Enter the club", "دخول النادي")}
                </Z>
                <button
                  className="orbit-circle-btn"
                  aria-label={t("m.nav.training")}
                  onClick={() => go("member", "training")}
                >
                  <M name="dumbbell" />
                </button>
              </div>
            </div>
            <span className="orbit-scroll-hint micro">
              {tx("SCROLL TO EXPLORE", "اكتشفي المزيد")}
              <M name="arrow" size={15} />
            </span>
          </div>
        </section>
        <section className="orbit-pulse">
          <div className="orbit-card-head">
            <span className="micro">{tx("CLUB FREQUENCY", "نبض النادي")}</span>
            <span className="orbit-estimate">{t("estimated")}</span>
          </div>
          <div className="orbit-pulse-value">
            <strong>{f.num(crowd.count)}</strong>
            <span>
              / {f.num(crowd.capacity)}
              <small>{t(`crowd.${crowd.level}`)}</small>
            </span>
          </div>
          <_u
            data={Ml()}
            nowHour={Math.floor(s.clock / 60)}
            highlight={quiet?.h}
            f={f}
            height={76}
          />
          <div className="orbit-chart-axis micro">
            <span>{f.time(360)}</span>
            <span>{f.time(720)}</span>
            <span>{f.time(1380)}</span>
          </div>
          <div className="orbit-pulse-foot">
            <span className="status-dot" />
            <span>
              {quiet
                ? t("m.home.best", { time: f.time(quiet.h * 60) })
                : t(`crowd.${crowd.level}`)}
            </span>
          </div>
          {visit ? (
            <div className="orbit-visit">
              <M name="ok" />
              <span>
                {t("m.home.inSince", { time: f.time(visit.inAt) })}
                <small>
                  {award && award.minutesLeft > 0
                    ? t("m.home.ptsIn", { n: award.minutesLeft })
                    : t("m.home.ptsEarned")}{" "}
                  ·{" "}
                  {t("m.home.autoOut", {
                    time: f.time(visit.inAt + s.settings.avgVisitMin),
                  })}
                </small>
              </span>
            </div>
          ) : (
            <Z
              variant="secondary"
              block
              icon="qr"
              disabled={status === "expired" || status === "frozen"}
              onClick={() => go("member", "pass")}
            >
              {t("m.home.showPass")}
            </Z>
          )}
        </section>
        <div className="orbit-membership">
          <Zy />
        </div>
        <section className="orbit-next">
          <div className="orbit-card-head">
            <h2>{tx("Your next move.", "خطوتك القادمة.")}</h2>
            <button
              className="orbit-mini-link"
              onClick={() => go("member", "book")}
            >
              {tx("All bookings", "الحجوزات")} <M name="out" size={15} />
            </button>
          </div>
          <div className="orbit-next-list">
            {pt && (
              <button
                className="orbit-session"
                onClick={() => go("member", "coach")}
              >
                <span className="orbit-session-time">
                  {f.clock(pt.time)}
                  <small>PT / 01</small>
                </span>
                <span>
                  <strong>{L(de(dt, pt.trainerId).name)}</strong>
                  <small>
                    {t("m.home.ptWith", { name: L(de(dt, pt.trainerId).name) })}
                    {pkg
                      ? " · " + t("m.home.pkgLeft", { n: pkg.remaining })
                      : ""}
                  </small>
                </span>
                <Ge phase="2" />
                <M name="out" size={18} />
              </button>
            )}
            {bookings.map(({ b, sess }) => (
              <button
                className="orbit-session"
                key={b.id}
                onClick={() => go("member", "book")}
              >
                <span className="orbit-session-time">
                  {f.clock(sess.time)}
                  <small>
                    {sess.day === 0 ? t("today") : f.weekday(ea(sess))}
                  </small>
                </span>
                <span>
                  <strong>{L(sess.title)}</strong>
                  <small>
                    {sess.womenOnly ? `${t("ladiesOnly")} · ` : ""}
                    {sess.trainerId
                      ? L(de(dt, sess.trainerId).name)
                      : t(`cat.${sess.cat}`)}
                  </small>
                </span>
                <span className="tag tag-ok">{t(`status.${b.status}`)}</span>
                <M name="out" size={18} />
              </button>
            ))}
            {!pt && !bookings.length && (
              <button
                className="orbit-session"
                onClick={() => go("member", "book")}
              >
                <M name="calendar" />
                <span>
                  <strong>
                    {tx("Make space for movement.", "خصصي وقتاً للحركة.")}
                  </strong>
                  <small>{tx("Find a session", "اختاري حصة")}</small>
                </span>
                <M name="out" />
              </button>
            )}
          </div>
        </section>
        <button
          className="orbit-points"
          onClick={() => go("member", "rewards")}
        >
          <div className="orbit-card-head">
            <span className="micro">
              {tx("CONSISTENCY PAYS", "الاستمرارية تكسب")}
            </span>
            <M name="out" size={20} />
          </div>
          <div className="orbit-points-number">
            {f.num(points)}
            <span>PTS</span>
          </div>
          <div className="orbit-card-head">
            <span>{tx("Unlock your rewards", "افتحي مكافآتك")}</span>
            <Ge phase="3" />
          </div>
          <div className="points-orbit" aria-hidden="true" />
        </button>
        <section className="orbit-tonight">
          <div className="orbit-card-head">
            <div>
              <span className="micro">
                {tx("MAKE TIME. MAKE PROGRESS.", "وقتك. تقدمك.")}
              </span>
              <h2>{tx("Still on tonight.", "لسه في وقت.")}</h2>
            </div>
            <button
              className="orbit-mini-link"
              onClick={() => go("member", "book")}
            >
              {tx("Explore", "استكشفي")} <M name="out" size={15} />
            </button>
          </div>
          <div className="orbit-class-grid">
            {tonight.map((sess, index) => {
              const spots = Pn(s, sess),
                booking = Xa(s, sess.id);
              return (
                <button
                  key={sess.id}
                  className={`orbit-class class-${index}`}
                  onClick={() => go("member", "book")}
                >
                  <div className="orbit-card-head">
                    <span className="micro">
                      0{index + 1} / {t(`cat.${sess.cat}`)}
                    </span>
                    <M name="out" size={17} />
                  </div>
                  <strong>{f.clock(sess.time)}</strong>
                  <h3>{L(sess.title)}</h3>
                  <span className="orbit-class-meta">
                    {booking
                      ? t(`status.${booking.status}`)
                      : spots
                        ? t("m.book.spots", { n: spots })
                        : t("m.book.full")}
                  </span>
                </button>
              );
            })}
            {!tonight.length && <p>{t("m.home.noneTonight")}</p>}
          </div>
        </section>
        <section className="orbit-universe">
          <div className="orbit-card-head">
            <div>
              <span className="micro">
                {tx("YOUR FITNESS UNIVERSE", "عالم لياقتك")}
              </span>
              <h2>{tx("Everything. Connected.", "كل حاجة. متصلة.")}</h2>
            </div>
            <span className="micro">02 — 05</span>
          </div>
          <div className="orbit-feature-grid">
            <button
              onClick={() => go("member", "training")}
              className="orbit-feature"
            >
              <span className="feature-symbol">
                <M name="dumbbell" size={34} />
              </span>
              <div>
                <Ge phase="2" />
                <h3>{tx("Train", "تمرّني")}</h3>
                <p>{program ? L(program.name) : t("m.nav.training")}</p>
              </div>
              <M name="out" />
            </button>
            <button
              onClick={() => go("member", "explore")}
              className="orbit-feature"
            >
              <span className="feature-symbol">
                <M name="map" size={34} />
              </span>
              <div>
                <Ge phase="2" />
                <h3>{tx("Explore", "اكتشفي")}</h3>
                <p>
                  {t("m.home.floorMeta", {
                    n: s.equipment.filter((e) => e.status === "active").length,
                  })}
                </p>
              </div>
              <M name="out" />
            </button>
            <button
              onClick={() => go("member", "community")}
              className="orbit-feature"
            >
              <span className="feature-symbol">
                <M name="trophy" size={34} />
              </span>
              <div>
                <Ge phase="3" />
                <h3>{tx("Together", "سوا")}</h3>
                <p>
                  {f.num(Math.min(visits, s.challenge.target))} /{" "}
                  {f.num(s.challenge.target)}{" "}
                  {tx("weekly visits", "زيارات أسبوعية")}
                </p>
              </div>
              <M name="out" />
            </button>
            <button
              onClick={() => go("member", "health")}
              className="orbit-feature"
            >
              <span className="feature-symbol">
                <M name="activity" size={34} />
              </span>
              <div>
                <Ge phase="3" />
                <h3>{tx("In sync", "بانسجام")}</h3>
                <p>{tx("Health, on your terms", "صحتك، بشروطك")}</p>
              </div>
              <M name="out" />
            </button>
          </div>
        </section>
      </div>
      <footer className="orbit-home-footer">
        <span>FORMA / ORBIT</span>
        <span>{tx("THE ONLY WAY IS FORWARD.", "دائماً للأمام.")}</span>
        <span>{tx("DEMO · SAMPLE DATA", "تجربة · بيانات توضيحية")}</span>
      </footer>
    </div>
  );
}
