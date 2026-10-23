import React, { useEffect, useRef, useState } from "react";
import { me, M } from "./engine.jsx";

const routes = {
  member: [
    ["home", "home", "Home", "الرئيسية"],
    ["book", "calendar", "Book", "الحجز"],
    ["pass", "qr", "Pass", "الدخول"],
    ["training", "dumbbell", "Train", "التمرين"],
    ["explore", "map", "Explore", "الخريطة"],
    ["rewards", "gift", "Rewards", "المكافآت"],
    ["community", "users", "Crew", "المجتمع"],
    ["coach", "chat", "Coach", "المدرب"],
    ["health", "watch", "Health", "الصحة"],
    ["me", "settings", "Profile", "حسابي"],
  ],
  reception: [
    ["desk", "scan", "Entry", "الدخول"],
    ["payments", "cash", "Payments", "المدفوعات"],
    ["members", "users", "Members", "الأعضاء"],
  ],
  trainer: [
    ["today", "home", "Today", "اليوم"],
    ["clients", "users", "Clients", "الأعضاء"],
    ["programs", "dumbbell", "Programs", "البرامج"],
    ["earnings", "wallet", "Earnings", "الأرباح"],
    ["messages", "chat", "Messages", "الرسائل"],
  ],
  admin: [
    ["overview", "grid", "Overview", "الرئيسية"],
    ["members", "users", "Members", "الأعضاء"],
    ["schedule", "calendar", "Schedule", "الجدول"],
    ["staff", "dumbbell", "Team", "الفريق"],
    ["equipment", "map", "Equipment", "الأجهزة"],
    ["engagement", "gift", "Rewards", "المكافآت"],
    ["settings", "sliders", "Settings", "الإعدادات"],
    ["activity", "history", "Activity", "النشاط"],
  ],
  platform: [
    ["overview", "grid", "Overview", "الرئيسية"],
    ["onboarding", "list", "Onboard", "التفعيل"],
    ["pricing", "tag", "Pricing", "التسعير"],
    ["library", "library", "Library", "المكتبة"],
    ["roadmap", "route", "Roadmap", "الخطة"],
  ],
};
export function OrbitChrome() {
  const { s, route, go, t } = me(),
    ar = s.lang === "ar";
  const [open, setOpen] = useState(false),
    [query, setQuery] = useState(""),
    [paused, setPaused] = useState(false);
  const modal = useRef(null),
    trigger = useRef(null);
  const items = Object.entries(routes)
    .flatMap(([role, pages]) =>
      pages.map((p) => ({
        role,
        id: p[0],
        icon: p[1],
        label: ar ? p[3] : p[2],
      })),
    )
    .filter((p) =>
      `${p.label} ${t("role." + p.role)}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  useEffect(() => {
    const shortcut = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);
  useEffect(() => {
    if (open) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
      setQuery("");
    }
  }, [open]);
  const pause = () => {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "playing";
    window.dispatchEvent(new Event("orbit-motion"));
  };
  return (
    <>
      <div className="orbit-ambient" aria-hidden="true">
        <i />
        <i />
        <div className="ambient-grid" />
      </div>
      <nav
        className="orbit-nav"
        aria-label={ar ? "مساحات التطبيق" : "App spaces"}
      >
        <button
          className="orbit-nav-launch"
          ref={trigger}
          onClick={() => setOpen(true)}
          aria-label={ar ? "كل المزايا" : "All features"}
          title="All features · ⌘K"
        >
          <M name="grid" size={22} />
        </button>
        <div className="orbit-nav-pages">
          {routes[route.role].map(([id, icon, en, arabic], i) => (
            <button
              key={id}
              onClick={() => go(route.role, id)}
              className={route.page === id ? "on" : ""}
              aria-current={route.page === id ? "page" : undefined}
              title={ar ? arabic : en}
            >
              <M name={icon} size={20} />
              <span>{ar ? arabic : en}</span>
              <i className="nav-signal" />
            </button>
          ))}
        </div>
        <button
          className="orbit-motion-control"
          onClick={pause}
          aria-pressed={paused}
          aria-label={
            paused
              ? ar
                ? "تشغيل الحركة"
                : "Resume animation"
              : ar
                ? "إيقاف الحركة"
                : "Pause animation"
          }
          title={paused ? "Resume animation" : "Pause animation"}
        >
          <M name={paused ? "play" : "sparkles"} size={18} />
        </button>
      </nav>
      <dialog
        ref={modal}
        className="orbit-launcher"
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === modal.current) setOpen(false);
        }}
      >
        <header>
          <span className="micro">
            FORMA / {ar ? "كل المزايا" : "COMMAND CENTER"}
          </span>
          <button
            className="icon-btn"
            aria-label={t("close")}
            onClick={() => setOpen(false)}
          >
            <M name="x" />
          </button>
        </header>
        <label className="orbit-command-search">
          <M name="search" />
          <input
            autoFocus
            placeholder={ar ? "أين تريدين الذهاب؟" : "Where to next?"}
            aria-label={ar ? "البحث عن ميزة" : "Search all features"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd>ESC</kbd>
        </label>
        <div className="orbit-command-results">
          {items.map((item) => (
            <button
              key={item.role + item.id}
              onClick={() => {
                go(item.role, item.id);
                setOpen(false);
              }}
            >
              <M name={item.icon} />
              <span>
                {item.label}
                <small>{t("role." + item.role)}</small>
              </span>
              <M name="out" size={16} />
            </button>
          ))}
          {!items.length && (
            <p>{ar ? "لا توجد نتائج" : "No matching features."}</p>
          )}
        </div>
      </dialog>
    </>
  );
}

export function useOrbitMotion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      scrollFrame = 0,
      point = null,
      observer;
    const animations = new Set(),
      moved = new Set(),
      seen = new WeakSet();
    const enabled = () =>
      !reduced.matches && document.documentElement.dataset.motion !== "paused";
    const reset = () => {
      moved.forEach((el) => {
        el.style.translate = "";
      });
      moved.clear();
    };
    const selector =
      ".orbit-hero, .orbit-pulse, .orbit-next, .orbit-points, .orbit-class, .orbit-feature, .mcard, .slot, .reward, .offer, .tr-hero, .tr-client, .rc-panel, .rc-card, .ad-panel, .ad-kpi, .pl-panel, .pl-kpi, .sheet";
    const reveal = (entries) =>
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (!enabled()) return;
        const a = target.animate(
          [
            {
              opacity: 0,
              transform: "translateY(22px)",
              clipPath: "inset(0 0 6% 0)",
            },
            { opacity: 1, transform: "translateY(0)", clipPath: "inset(0)" },
          ],
          { duration: 820, easing: "cubic-bezier(0.16,1,0.3,1)" },
        );
        animations.add(a);
        a.finished.then(() => animations.delete(a)).catch(() => {});
      });
    observer = new IntersectionObserver(reveal, { threshold: 0.08 });
    const scan = () =>
      document.querySelectorAll(selector).forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          observer.observe(el);
        }
      });
    const mutation = new MutationObserver(scan);
    mutation.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    scan();
    const pointer = (ev) => {
      if (ev.pointerType === "touch" || !enabled()) return;
      point = { x: ev.clientX, y: ev.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        reset();
        document
          .querySelectorAll(
            ".btn:not(:disabled), .rolebar button, .orbit-circle-btn, .orbit-nav-launch, .chips button, .segmented button",
          )
          .forEach((el) => {
            const b = el.getBoundingClientRect(),
              x = point.x - b.left - b.width / 2,
              y = point.y - b.top - b.height / 2;
            const d = Math.hypot(
              Math.max(0, Math.abs(x) - b.width / 2),
              Math.max(0, Math.abs(y) - b.height / 2),
            );
            if (d < 40) {
              const f = (1 - d / 40) * 0.1;
              el.style.translate = `${Math.max(-7, Math.min(7, x * f))}px ${Math.max(-5, Math.min(5, y * f))}px`;
              moved.add(el);
            }
          });
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${(point.x / innerWidth - 0.5) * 18}px`,
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${(point.y / innerHeight - 0.5) * 12}px`,
        );
      });
    };
    const scroll = () => {
      if (scrollFrame || !enabled()) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const hero = document.querySelector(".orbit-hero");
        if (hero) {
          const p = Math.max(
            0,
            Math.min(1, -hero.getBoundingClientRect().top / 600),
          );
          hero.style.setProperty("--scroll", p);
        }
      });
    };
    const preference = () => {
      if (!enabled()) {
        reset();
        animations.forEach((a) => a.cancel());
        document.documentElement.style.removeProperty("--pointer-x");
        document.documentElement.style.removeProperty("--pointer-y");
      }
    };
    document.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", scroll, { passive: true });
    reduced.addEventListener("change", preference);
    window.addEventListener("orbit-motion", preference);
    return () => {
      mutation.disconnect();
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
      animations.forEach((a) => a.cancel());
      reset();
      document.removeEventListener("pointermove", pointer);
      document.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", scroll);
      reduced.removeEventListener("change", preference);
      window.removeEventListener("orbit-motion", preference);
    };
  }, []);
}
