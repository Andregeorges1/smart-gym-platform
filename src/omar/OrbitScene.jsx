import React, { useEffect, useRef } from "react";

// A real-time projected torus knot. No video, remote assets, or WebGL dependency.
export default function OrbitScene() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      raf = 0,
      visible = true,
      last = 0,
      phase = 0;
    let pointer = { x: 0, y: 0 },
      smooth = { x: 0, y: 0 };
    const rings = [];
    const count = 160,
      facets = 22;
    const center = (t) => {
      const r = 1.6 + 0.62 * Math.cos(3 * t);
      return [r * Math.cos(2 * t), r * Math.sin(2 * t), 0.75 * Math.sin(3 * t)];
    };
    const norm = (v) => {
      const n = Math.hypot(...v);
      return v.map((x) => x / n);
    };
    const cross = (a, b) => [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2,
        c = center(t),
        next = center(t + 0.001);
      const tangent = norm(next.map((v, j) => v - c[j]));
      const normal = norm(cross(tangent, [0, 0, 1])),
        binormal = cross(tangent, normal);
      rings.push(
        Array.from({ length: facets }, (_, j) => {
          const a = (j / facets) * Math.PI * 2;
          return c.map(
            (v, k) =>
              v + 0.47 * (Math.cos(a) * normal[k] + Math.sin(a) * binormal[k]),
          );
        }),
      );
    }
    const draw = () => {
      const lightMode = document.documentElement.dataset.theme === "light";
      ctx.clearRect(0, 0, width, height);
      smooth.x += (pointer.x - smooth.x) * 0.055;
      smooth.y += (pointer.y - smooth.y) * 0.055;
      const ay = phase * 0.22 + smooth.x * 0.25,
        ax = -0.5 + smooth.y * 0.2,
        az = -0.38;
      const project = ([x, y, z]) => {
        let xx = x * Math.cos(ay) + z * Math.sin(ay),
          zz = -x * Math.sin(ay) + z * Math.cos(ay);
        let yy = y * Math.cos(ax) - zz * Math.sin(ax);
        zz = y * Math.sin(ax) + zz * Math.cos(ax);
        const rx = xx * Math.cos(az) - yy * Math.sin(az),
          ry = xx * Math.sin(az) + yy * Math.cos(az);
        const scale = (Math.min(width, height) * 0.2 * 7) / (7 + zz);
        return [width * 0.5 + rx * scale, height * 0.5 + ry * scale, zz];
      };
      const mesh = rings.map((r) => r.map(project));
      const sorted = mesh
        .map((r, i) => ({ r, i, z: r.reduce((a, p) => a + p[2], 0) / facets }))
        .sort((a, b) => b.z - a.z);
      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        0,
        width * 0.5,
        height * 0.5,
        width * 0.48,
      );
      glow.addColorStop(0, "rgba(144,87,255,.12)");
      glow.addColorStop(1, "rgba(80,30,180,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      for (const { r, i, z } of sorted) {
        const light = Math.max(0.12, Math.min(0.98, (3 - z) / 5));
        ctx.beginPath();
        r.forEach((p, j) =>
          j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]),
        );
        ctx.closePath();
        ctx.fillStyle = lightMode
          ? `rgba(243,235,252,${0.5 + light * 0.25})`
          : `rgba(20,15,34,${0.36 + light * 0.2})`;
        ctx.fill();
        ctx.strokeStyle = lightMode
          ? `rgba(110,62,166,${0.2 + light * 0.55})`
          : `rgba(${Math.round(130 + light * 100)},${Math.round(80 + light * 125)},255,${0.2 + light * 0.6})`;
        ctx.lineWidth = light > 0.65 ? 1.2 : 0.6;
        ctx.stroke();
        if (i % 4 === 0) {
          ctx.beginPath();
          r.forEach((p, j) => {
            const q = mesh[(i + 1) % count][j];
            ctx.moveTo(p[0], p[1]);
            ctx.lineTo(q[0], q[1]);
          });
          ctx.strokeStyle = lightMode
            ? `rgba(110,62,166,${light * 0.2})`
            : `rgba(205,190,255,${light * 0.24})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      // Traveling nodes trace the geometry at different depths.
      for (let n = 0; n < 5; n++) {
        const i = Math.floor(((phase * 0.07 + n / 5) % 1) * count),
          p = mesh[i][4];
        ctx.beginPath();
        ctx.arc(p[0], p[1], n === 0 ? 3 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = lightMode
          ? n === 0
            ? "#648322"
            : "#8d55bc"
          : n === 0
            ? "#d5ff70"
            : "#e7d8ff";
        ctx.shadowBlur = 15;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };
    const tick = (now) => {
      if (
        !visible ||
        document.hidden ||
        reduced.matches ||
        document.documentElement.dataset.motion === "paused"
      ) {
        raf = 0;
        return;
      }
      if (now - last > 33) {
        phase += 0.016;
        draw();
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      draw();
      if (
        visible &&
        !document.hidden &&
        !reduced.matches &&
        document.documentElement.dataset.motion !== "paused"
      )
        raf = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const ratio = Math.min(devicePixelRatio || 1, 1.75);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      start();
    });
    resize.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    visibility.observe(canvas);
    const move = (ev) => {
      const r = canvas.getBoundingClientRect();
      pointer = {
        x: Math.max(-1, Math.min(1, ((ev.clientX - r.left) / r.width) * 2 - 1)),
        y: Math.max(-1, Math.min(1, ((ev.clientY - r.top) / r.height) * 2 - 1)),
      };
    };
    canvas.parentElement.addEventListener("pointermove", move, {
      passive: true,
    });
    reduced.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);
    window.addEventListener("orbit-motion", start);
    window.addEventListener("orbit-theme", start);
    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      visibility.disconnect();
      canvas.parentElement?.removeEventListener("pointermove", move);
      reduced.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
      window.removeEventListener("orbit-motion", start);
      window.removeEventListener("orbit-theme", start);
    };
  }, []);
  return <canvas className="orbit-sculpture" ref={ref} aria-hidden="true" />;
}
