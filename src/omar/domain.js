// Omar’s FORMA demo domain rules, retained from the public reference app.
const wu = "forma-gym-demo-v2",
  xe = "2026-10-22",
  Nu = 1085,
  be = "m1",
  Ka = "s1",
  Nf = "t2";
let Sf = 0;
const mt = (s = "id") =>
  `${s}-${Date.now().toString(36)}${(Sf++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;
function Ye(s, i) {
  const a = new Date(`${s}T00:00:00Z`);
  return (a.setUTCDate(a.getUTCDate() + i), a.toISOString().slice(0, 10));
}
function Ks(s, i) {
  return Math.round(
    (new Date(`${i}T00:00:00Z`) - new Date(`${s}T00:00:00Z`)) / 864e5,
  );
}
function Cl(s, i) {
  const a = new Date(`${s}T00:00:00Z`);
  return (a.setUTCMonth(a.getUTCMonth() + i), a.toISOString().slice(0, 10));
}
const Cf = (s) =>
    `${String(Math.floor(s / 60) % 24).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`,
  Ve = (s) => {
    const [i, a] = s.split(":").map(Number);
    return i * 60 + a;
  },
  ea = (s) => Ye(xe, s.day),
  Wt = [
    {
      id: "monthly",
      name: { en: "Monthly", ar: "شهري" },
      months: 1,
      price: 1200,
      guestPasses: 2,
    },
    {
      id: "quarterly",
      name: { en: "Quarterly", ar: "ربع سنوي" },
      months: 3,
      price: 3200,
      guestPasses: 6,
    },
    {
      id: "annual",
      name: { en: "Annual", ar: "سنوي" },
      months: 12,
      price: 10800,
      guestPasses: 24,
    },
  ],
  dt = [
    {
      id: "t1",
      name: { en: "Omar Fathy", ar: "عمر فتحي" },
      gender: "M",
      initials: "OF",
      specialty: { en: "Strength & conditioning", ar: "القوة واللياقة" },
    },
    {
      id: "t2",
      name: { en: "Laila Ahmed", ar: "ليلى أحمد" },
      gender: "F",
      initials: "LA",
      specialty: { en: "Pilates & mobility", ar: "البيلاتس والمرونة" },
    },
    {
      id: "t3",
      name: { en: "Nour Hassan", ar: "نور حسن" },
      gender: "F",
      initials: "NH",
      specialty: { en: "Yoga & recovery", ar: "اليوجا والاستشفاء" },
    },
  ],
  Jt = [
    { id: "pk8", sessions: 8, price: 3200, validityDays: 45 },
    { id: "pk12", sessions: 12, price: 4500, validityDays: 60 },
  ],
  as = [
    {
      id: "s1",
      name: { en: "Karim Nabil", ar: "كريم نبيل" },
      role: "reception",
    },
    { id: "s2", name: { en: "Hany Mansour", ar: "هاني منصور" }, role: "admin" },
  ],
  Fo = {
    6: 0.18,
    7: 0.32,
    8: 0.36,
    9: 0.28,
    10: 0.24,
    11: 0.2,
    12: 0.18,
    13: 0.17,
    14: 0.19,
    15: 0.24,
    16: 0.34,
    17: 0.48,
    18: 0.6,
    19: 0.68,
    20: 0.62,
    21: 0.48,
    22: 0.3,
    23: 0.12,
  },
  fn = [
    {
      id: "lib-treadmill",
      cat: "cardio",
      brand: "Technogym",
      name: { en: "Treadmill", ar: "جهاز المشي" },
      muscles: ["full"],
      icon: "treadmill",
      how: {
        en: "Clip the safety key to your clothing, start slowly, and use the stop button before stepping off.",
        ar: "ثبّت مفتاح الأمان في ملابسك، وابدأ ببطء، واستخدم زر الإيقاف قبل النزول.",
      },
    },
    {
      id: "lib-bike",
      cat: "cardio",
      brand: "Life Fitness",
      name: { en: "Upright bike", ar: "دراجة ثابتة" },
      muscles: ["legs"],
      icon: "bike",
      how: {
        en: "Set the saddle at hip height. Start with low resistance and keep a steady cadence.",
        ar: "اضبط المقعد على مستوى الحوض. ابدأ بمقاومة منخفضة وحافظ على إيقاع ثابت.",
      },
    },
    {
      id: "lib-rower",
      cat: "cardio",
      brand: "Concept2",
      name: { en: "Rowing machine", ar: "جهاز التجديف" },
      muscles: ["back", "legs"],
      icon: "rower",
      how: {
        en: "Push with the legs first, then lean back slightly and pull the handle to your lower ribs.",
        ar: "ادفع بالرجلين أولاً، ثم مِل للخلف قليلاً واسحب المقبض نحو أسفل الضلوع.",
      },
    },
    {
      id: "lib-legpress",
      cat: "strength",
      brand: "Matrix",
      name: { en: "Leg press", ar: "مكبس الأرجل" },
      muscles: ["legs"],
      icon: "machine",
      how: {
        en: "Keep your back flat on the pad and feet hip-width apart. Press without locking the knees.",
        ar: "حافظ على ظهرك ملاصقاً للمسند وقدميك بعرض الحوض. ادفع دون قفل الركبتين.",
      },
    },
    {
      id: "lib-legext",
      cat: "strength",
      brand: "Matrix",
      name: { en: "Leg extension", ar: "تمديد الأرجل" },
      muscles: ["legs"],
      icon: "machine",
      how: {
        en: "Line the pivot up with your knee. Extend smoothly and lower with control.",
        ar: "اجعل محور الجهاز على مستوى الركبة. مدّ ببطء وأنزل بتحكم.",
      },
    },
    {
      id: "lib-chest",
      cat: "strength",
      brand: "Technogym",
      name: { en: "Chest press", ar: "ضغط الصدر" },
      muscles: ["chest", "arms"],
      icon: "machine",
      how: {
        en: "Handles at mid-chest height, shoulders back on the pad. Press and return slowly.",
        ar: "المقابض في منتصف الصدر والكتفان على المسند. ادفع وارجع ببطء.",
      },
    },
    {
      id: "lib-pulldown",
      cat: "strength",
      brand: "Technogym",
      name: { en: "Lat pulldown", ar: "سحب علوي" },
      muscles: ["back", "arms"],
      icon: "machine",
      how: {
        en: "Secure the thigh pads and pull the bar to your upper chest without leaning far back.",
        ar: "ثبّت مساند الفخذ واسحب البار إلى أعلى الصدر دون الميل كثيراً للخلف.",
      },
    },
    {
      id: "lib-row",
      cat: "strength",
      brand: "Matrix",
      name: { en: "Seated row", ar: "تجديف جالس" },
      muscles: ["back"],
      icon: "machine",
      how: {
        en: "Chest against the pad, pull elbows back and squeeze the shoulder blades.",
        ar: "الصدر على المسند، اسحب المرفقين للخلف واضغط لوحي الكتف.",
      },
    },
    {
      id: "lib-shoulder",
      cat: "strength",
      brand: "Matrix",
      name: { en: "Shoulder press", ar: "ضغط الكتف" },
      muscles: ["shoulders"],
      icon: "machine",
      how: {
        en: "Seat so the handles start at shoulder height. Press up without arching your back.",
        ar: "اضبط المقعد لتبدأ المقابض عند الكتف. ادفع لأعلى دون تقويس الظهر.",
      },
    },
    {
      id: "lib-cable",
      cat: "strength",
      brand: "Life Fitness",
      name: { en: "Cable crossover", ar: "كابل كروس" },
      muscles: ["chest", "arms", "shoulders"],
      icon: "cable",
      how: {
        en: "Set both pulleys, step forward into a split stance and bring the handles together in an arc.",
        ar: "اضبط البكرتين، تقدّم بخطوة وقرّب المقبضين في شكل قوس.",
      },
    },
    {
      id: "lib-smith",
      cat: "free",
      brand: "Hammer Strength",
      name: { en: "Smith machine", ar: "جهاز سميث" },
      muscles: ["legs", "chest"],
      icon: "rack",
      how: {
        en: "Set the safety stops first. Rotate the bar to unhook and re-rack.",
        ar: "اضبط مصدات الأمان أولاً. أدر البار لفكّه وإعادته.",
      },
    },
    {
      id: "lib-dumbbells",
      cat: "free",
      brand: "—",
      name: { en: "Dumbbell rack", ar: "حامل الدمبل" },
      muscles: ["full"],
      icon: "dumbbell",
      how: {
        en: "Choose a load you control for every rep and return weights to the rack.",
        ar: "اختر وزناً تتحكم فيه في كل تكرار وأعد الأوزان إلى الحامل.",
      },
    },
    {
      id: "lib-bench",
      cat: "free",
      brand: "—",
      name: { en: "Adjustable bench", ar: "بنش متعدد الزوايا" },
      muscles: ["chest", "shoulders"],
      icon: "bench",
      how: {
        en: "Lock the backrest angle before loading. Keep feet flat on the floor.",
        ar: "ثبّت زاوية المسند قبل التحميل. حافظ على قدميك مسطحتين على الأرض.",
      },
    },
    {
      id: "lib-glute",
      cat: "strength",
      brand: "Panatta",
      name: { en: "Hip thrust machine", ar: "جهاز دفع الحوض" },
      muscles: ["legs"],
      icon: "machine",
      how: {
        en: "Pad across the hips, drive through the heels and pause at the top.",
        ar: "المسند على الحوض، ادفع بالكعبين وتوقف لحظة في الأعلى.",
      },
    },
  ],
  zf = [
    {
      id: "e1",
      libId: "lib-treadmill",
      x: 12,
      y: 22,
      status: "active",
      zone: "cardio",
      label: "T-01",
    },
    {
      id: "e2",
      libId: "lib-treadmill",
      x: 22,
      y: 22,
      status: "active",
      zone: "cardio",
      label: "T-02",
    },
    {
      id: "e3",
      libId: "lib-bike",
      x: 32,
      y: 22,
      status: "active",
      zone: "cardio",
      label: "B-01",
    },
    {
      id: "e4",
      libId: "lib-rower",
      x: 12,
      y: 42,
      status: "active",
      zone: "cardio",
      label: "R-01",
    },
    {
      id: "e5",
      libId: "lib-legpress",
      x: 58,
      y: 20,
      status: "active",
      zone: "strength",
      label: "S-01",
    },
    {
      id: "e6",
      libId: "lib-legext",
      x: 70,
      y: 20,
      status: "active",
      zone: "strength",
      label: "S-02",
    },
    {
      id: "e7",
      libId: "lib-chest",
      x: 82,
      y: 20,
      status: "active",
      zone: "strength",
      label: "S-03",
    },
    {
      id: "e8",
      libId: "lib-pulldown",
      x: 58,
      y: 44,
      status: "maintenance",
      zone: "strength",
      label: "S-04",
    },
    {
      id: "e9",
      libId: "lib-row",
      x: 70,
      y: 44,
      status: "active",
      zone: "strength",
      label: "S-05",
    },
    {
      id: "e10",
      libId: "lib-glute",
      x: 82,
      y: 44,
      status: "active",
      zone: "strength",
      label: "S-06",
    },
    {
      id: "e11",
      libId: "lib-dumbbells",
      x: 22,
      y: 74,
      status: "active",
      zone: "free",
      label: "F-01",
    },
    {
      id: "e12",
      libId: "lib-bench",
      x: 36,
      y: 74,
      status: "active",
      zone: "free",
      label: "F-02",
    },
  ],
  Tf = [
    {
      id: "c1",
      day: 0,
      time: "07:00",
      dur: 45,
      kind: "class",
      cat: "yoga",
      title: { en: "Morning flow", ar: "يوجا الصباح" },
      trainerId: "t3",
      cap: 16,
      taken: 9,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c2",
      day: 0,
      time: "10:00",
      dur: 45,
      kind: "class",
      cat: "strength",
      title: { en: "Ladies' strength circuit", ar: "دائرة قوة للسيدات" },
      trainerId: "t2",
      cap: 14,
      taken: 11,
      womenOnly: !0,
      price: 0,
    },
    {
      id: "c3",
      day: 0,
      time: "18:30",
      dur: 50,
      kind: "class",
      cat: "strength",
      title: { en: "Strength & conditioning", ar: "القوة واللياقة" },
      trainerId: "t1",
      cap: 20,
      taken: 14,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c4",
      day: 0,
      time: "19:30",
      dur: 45,
      kind: "class",
      cat: "pilates",
      title: { en: "Reformer pilates", ar: "بيلاتس ريفورمر" },
      trainerId: "t2",
      cap: 8,
      taken: 8,
      womenOnly: !1,
      price: 150,
    },
    {
      id: "c5",
      day: 0,
      time: "20:00",
      dur: 30,
      kind: "facility",
      cat: "sauna",
      title: { en: "Sauna", ar: "الساونا" },
      trainerId: null,
      cap: 4,
      taken: 1,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c6",
      day: 0,
      time: "21:00",
      dur: 40,
      kind: "class",
      cat: "hiit",
      title: { en: "HIIT express", ar: "هيت سريع" },
      trainerId: "t1",
      cap: 18,
      taken: 6,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c7",
      day: 1,
      time: "11:00",
      dur: 60,
      kind: "class",
      cat: "yoga",
      title: { en: "Ladies' yoga", ar: "يوجا للسيدات" },
      trainerId: "t3",
      cap: 16,
      taken: 4,
      womenOnly: !0,
      price: 0,
    },
    {
      id: "c8",
      day: 1,
      time: "17:00",
      dur: 45,
      kind: "class",
      cat: "cycle",
      title: { en: "Indoor cycling", ar: "دراجات داخلية" },
      trainerId: "t1",
      cap: 18,
      taken: 10,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c9",
      day: 1,
      time: "19:00",
      dur: 30,
      kind: "facility",
      cat: "sauna",
      title: { en: "Sauna", ar: "الساونا" },
      trainerId: null,
      cap: 4,
      taken: 0,
      womenOnly: !0,
      price: 0,
    },
    {
      id: "c10",
      day: 2,
      time: "10:00",
      dur: 40,
      kind: "class",
      cat: "hiit",
      title: { en: "Ladies' HIIT", ar: "هيت للسيدات" },
      trainerId: "t2",
      cap: 12,
      taken: 5,
      womenOnly: !0,
      price: 0,
    },
    {
      id: "c11",
      day: 2,
      time: "14:00",
      dur: 45,
      kind: "facility",
      cat: "spa",
      title: { en: "Sports massage", ar: "مساج رياضي" },
      trainerId: null,
      cap: 2,
      taken: 0,
      womenOnly: !1,
      price: 450,
    },
    {
      id: "c12",
      day: 2,
      time: "18:00",
      dur: 50,
      kind: "class",
      cat: "strength",
      title: { en: "Strength & conditioning", ar: "القوة واللياقة" },
      trainerId: "t1",
      cap: 20,
      taken: 7,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c13",
      day: 3,
      time: "08:00",
      dur: 45,
      kind: "class",
      cat: "pilates",
      title: { en: "Mat pilates", ar: "بيلاتس أرضي" },
      trainerId: "t2",
      cap: 14,
      taken: 3,
      womenOnly: !1,
      price: 0,
    },
    {
      id: "c14",
      day: 3,
      time: "19:00",
      dur: 45,
      kind: "class",
      cat: "yoga",
      title: { en: "Slow flow", ar: "يوجا هادئة" },
      trainerId: "t3",
      cap: 16,
      taken: 6,
      womenOnly: !1,
      price: 0,
    },
  ],
  Jn = [
    {
      id: "r-smoothie",
      pts: 500,
      partner: "Blend Lab",
      funded: "partner",
      icon: "cup",
      name: { en: "Post-workout smoothie", ar: "سموذي بعد التمرين" },
    },
    {
      id: "r-meal",
      pts: 750,
      partner: "Green Bowl",
      funded: "partner",
      icon: "salad",
      name: { en: "EGP 75 off a meal", ar: "خصم ٧٥ جنيه على وجبة" },
    },
    {
      id: "r-sauna",
      pts: 1e3,
      partner: null,
      funded: "gym",
      icon: "sparkles",
      name: { en: "Sauna session", ar: "جلسة ساونا" },
    },
    {
      id: "r-pt",
      pts: 2e3,
      partner: null,
      funded: "gym",
      icon: "dumbbell",
      name: { en: "Personal training session", ar: "جلسة تدريب شخصي" },
    },
  ],
  qo = [
    {
      id: "o1",
      partner: "Green Bowl",
      distance: 3,
      code: "PULSE15",
      title: { en: "15% off any bowl", ar: "خصم ١٥٪ على أي بول" },
      detail: {
        en: "Show the code at the counter. Members only.",
        ar: "اعرض الكود عند الكاشير. للأعضاء فقط.",
      },
    },
    {
      id: "o2",
      partner: "Blend Lab",
      distance: 1,
      code: "PULSESHOT",
      title: {
        en: "Free protein shot with any smoothie",
        ar: "شوت بروتين مجاني مع أي سموذي",
      },
      detail: {
        en: "Valid after 4pm, once per visit.",
        ar: "متاح بعد الرابعة عصراً، مرة لكل زيارة.",
      },
    },
    {
      id: "o3",
      partner: "Daily Grain",
      distance: 6,
      code: "PULSE10",
      title: { en: "10% off breakfast", ar: "خصم ١٠٪ على الفطار" },
      detail: { en: "Weekdays before noon.", ar: "أيام الأسبوع قبل الظهر." },
    },
  ],
  Qo = [
    { id: "visit", pts: 10 },
    { id: "class", pts: 15 },
    { id: "pt", pts: 20 },
    { id: "partner", pts: 15 },
    { id: "weekly", pts: 100 },
    { id: "monthly", pts: 300 },
    { id: "referral", pts: 200 },
    { id: "selflog", pts: 0 },
  ],
  Mf = [
    {
      id: "m1",
      code: "PAC-00428",
      name: { en: "Salma Adel", ar: "سلمى عادل" },
      gender: "F",
      age: 27,
      phone: "010 2214 8890",
      planId: "monthly",
      start: "2026-09-22",
      end: "2026-11-22",
      app: !0,
      trainerId: "t2",
      freezeUsed: 0,
      guestUsed: 1,
      noShows: 0,
      since: "2025-03",
    },
    {
      id: "m2",
      code: "PAC-00311",
      name: { en: "Youssef Kamal", ar: "يوسف كمال" },
      gender: "M",
      age: 31,
      phone: "011 4502 1173",
      planId: "quarterly",
      start: "2026-09-10",
      end: "2026-12-10",
      app: !0,
      trainerId: "t1",
      freezeUsed: 7,
      guestUsed: 0,
      noShows: 1,
      since: "2024-11",
    },
    {
      id: "m3",
      code: "PAC-00502",
      name: { en: "Mariam Tarek", ar: "مريم طارق" },
      gender: "F",
      age: 24,
      phone: "012 7781 0094",
      planId: "monthly",
      start: "2026-09-24",
      end: "2026-10-24",
      app: !0,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 2,
      noShows: 0,
      since: "2026-06",
    },
    {
      id: "m4",
      code: "PAC-00187",
      name: { en: "Ahmed Samir", ar: "أحمد سمير" },
      gender: "M",
      age: 35,
      phone: "010 9930 4412",
      planId: "monthly",
      start: "2026-09-15",
      end: "2026-10-15",
      app: !1,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 2,
      since: "2023-08",
    },
    {
      id: "m5",
      code: "PAC-00256",
      name: { en: "Hana Mostafa", ar: "هنا مصطفى" },
      gender: "F",
      age: 29,
      phone: "015 5521 8807",
      planId: "quarterly",
      start: "2026-08-20",
      end: "2026-12-04",
      app: !0,
      trainerId: "t3",
      freezeUsed: 14,
      guestUsed: 0,
      noShows: 0,
      since: "2025-01",
      freeze: { start: "2026-10-15", days: 14 },
    },
    {
      id: "m6",
      code: "PAC-00099",
      name: { en: "Karim Nasser", ar: "كريم ناصر" },
      gender: "M",
      age: 22,
      phone: "011 2290 6631",
      planId: "annual",
      start: "2026-02-01",
      end: "2027-02-01",
      app: !1,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 3,
      noShows: 0,
      since: "2026-02",
    },
    {
      id: "m7",
      code: "PAC-00377",
      name: { en: "Dina Farouk", ar: "دينا فاروق" },
      gender: "F",
      age: 41,
      phone: "010 0457 2216",
      planId: "quarterly",
      start: "2026-10-01",
      end: "2027-01-01",
      app: !0,
      trainerId: "t2",
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 0,
      since: "2024-05",
    },
    {
      id: "m8",
      code: "PAC-00460",
      name: { en: "Omar Hegazy", ar: "عمر حجازي" },
      gender: "M",
      age: 19,
      phone: "012 3388 5520",
      planId: "monthly",
      start: "2026-10-05",
      end: "2026-11-05",
      app: !0,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 3,
      since: "2026-10",
    },
    {
      id: "m9",
      code: "PAC-00218",
      name: { en: "Nadia Saleh", ar: "نادية صالح" },
      gender: "F",
      age: 33,
      phone: "011 6643 0018",
      planId: "monthly",
      start: "2026-10-10",
      end: "2026-11-10",
      app: !1,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 0,
      since: "2025-09",
    },
    {
      id: "m10",
      code: "PAC-00042",
      name: { en: "Tarek Ezz", ar: "طارق عز" },
      gender: "M",
      age: 45,
      phone: "010 1100 7745",
      planId: "annual",
      start: "2026-05-01",
      end: "2027-05-01",
      app: !0,
      trainerId: "t1",
      freezeUsed: 0,
      guestUsed: 5,
      noShows: 0,
      since: "2022-04",
    },
    {
      id: "m11",
      code: "PAC-00513",
      name: { en: "Ali Mahmoud", ar: "علي محمود" },
      gender: "M",
      age: 17,
      phone: "012 9011 2287",
      planId: "monthly",
      start: "2026-10-12",
      end: "2026-11-12",
      app: !0,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 0,
      since: "2026-10",
    },
    {
      id: "m12",
      code: "PAC-00488",
      name: { en: "Reem Abdallah", ar: "ريم عبدالله" },
      gender: "F",
      age: 26,
      phone: "015 7720 3349",
      planId: "monthly",
      start: "2026-10-03",
      end: "2026-11-03",
      app: !0,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 0,
      since: "2026-01",
    },
  ],
  Pf = [
    {
      id: "g1",
      name: "Pulse Athletic Club",
      area: { en: "New Cairo", ar: "القاهرة الجديدة" },
      stage: "pilot",
      tier: "core",
      branches: 1,
      members: 640,
    },
    {
      id: "g2",
      name: "Iron Yard",
      area: { en: "Heliopolis", ar: "مصر الجديدة" },
      stage: "interview",
      tier: "pro",
      branches: 1,
      members: 410,
    },
    {
      id: "g3",
      name: "Studio Nine",
      area: { en: "Zamalek", ar: "الزمالك" },
      stage: "interview",
      tier: "core",
      branches: 1,
      members: 220,
    },
    {
      id: "g4",
      name: "Lift District",
      area: { en: "Sheikh Zayed", ar: "الشيخ زايد" },
      stage: "demo",
      tier: "chain",
      branches: 3,
      members: 2100,
    },
    {
      id: "g5",
      name: "Coastline Fitness",
      area: { en: "Alexandria", ar: "الإسكندرية" },
      stage: "lead",
      tier: "pro",
      branches: 2,
      members: 900,
    },
  ];
function kl() {
  return {
    version: 2,
    lang: "en",
    arabicDigits: !1,
    clock: Nu,
    online: !0,
    gym: {
      name: { en: "Pulse Athletic Club", ar: "نادي بالس الرياضي" },
      branch: {
        en: "New Cairo · Fifth Settlement",
        ar: "القاهرة الجديدة · التجمع الخامس",
      },
      capacity: 120,
      ladiesCapacity: 24,
    },
    settings: {
      avgVisitMin: 90,
      minStayMin: 30,
      freezeDaysPerYear: 30,
      cancelWindowHrs: 2,
      noShowPenalty: !0,
      noShowLimit: 3,
      partnerMatching: !0,
      pointsExpiryMonths: 12,
      trainerSharePct: 60,
      ladiesHours: { from: "10:00", to: "13:00" },
      pointValueEgp: 0.1,
    },
    members: structuredClone(Mf),
    sessions: structuredClone(Tf),
    equipment: structuredClone(zf),
    bookings: [
      { id: "b-seed1", sessionId: "c1", memberId: "m1", status: "attended" },
      { id: "b-seed2", sessionId: "c7", memberId: "m1", status: "booked" },
    ],
    visits: [
      {
        id: "v-seed1",
        memberId: "m2",
        inAt: 1040,
        outAt: null,
        method: "qr",
        by: "turnstile",
        zone: "main",
        synced: !0,
      },
      {
        id: "v-seed2",
        memberId: "m10",
        inAt: 1065,
        outAt: null,
        method: "nfc",
        by: "reception",
        zone: "main",
        synced: !0,
      },
      {
        id: "v-seed3",
        memberId: "m7",
        inAt: 965,
        outAt: 1055,
        method: "qr",
        by: "reception",
        zone: "main",
        synced: !0,
        auto: !0,
      },
    ],
    payments: [
      {
        id: "p-seed1",
        memberId: "m1",
        amount: 1200,
        method: "instapay",
        label: "renewal",
        planId: "monthly",
        at: "2026-09-22",
        status: "paid",
        by: "app",
        receipt: "R-1031",
      },
      {
        id: "p-seed2",
        memberId: "m7",
        amount: 3200,
        method: "cash",
        label: "renewal",
        planId: "quarterly",
        at: "2026-10-01",
        status: "paid",
        by: "s1",
        receipt: "R-1038",
      },
      {
        id: "p-seed3",
        memberId: "m12",
        amount: 1200,
        method: "fawry",
        label: "renewal",
        planId: "monthly",
        at: "2026-10-03",
        status: "paid",
        by: "app",
        receipt: "R-1040",
      },
      {
        id: "p-seed4",
        memberId: "m9",
        amount: 1200,
        method: "cash",
        label: "renewal",
        planId: "monthly",
        at: "2026-10-10",
        status: "paid",
        by: "s1",
        receipt: "R-1042",
      },
      {
        id: "p-seed5",
        memberId: "m8",
        amount: 1200,
        method: "card",
        label: "renewal",
        planId: "monthly",
        at: "2026-10-05",
        status: "paid",
        by: "app",
        receipt: "R-1041",
      },
      {
        id: "p-seed6",
        memberId: "m2",
        amount: 3200,
        method: "cash",
        label: "renewal",
        planId: "quarterly",
        at: xe,
        clock: 615,
        status: "paid",
        by: "s1",
        receipt: "R-1043",
        note: "advance",
      },
      {
        id: "p-seed7",
        memberId: "m2",
        amount: 3200,
        method: "card",
        label: "package",
        packageId: "pk8",
        trainerId: "t1",
        at: xe,
        clock: 1e3,
        status: "paid",
        by: "s1",
        receipt: "R-1044",
      },
    ],
    nextReceipt: 1045,
    ledger: [
      {
        id: "l-seed0",
        memberId: "m1",
        key: "opening",
        kind: "opening",
        pts: 1145,
        at: "2026-10-18",
      },
      {
        id: "l-seed1",
        memberId: "m1",
        key: "class-b-seed1",
        kind: "class",
        pts: 15,
        at: xe,
      },
      {
        id: "l-seed2",
        memberId: "m1",
        key: "weekly-41",
        kind: "weekly",
        pts: 100,
        at: "2026-10-19",
      },
    ],
    redemptions: [],
    promoReveals: [],
    rewardStock: { "r-smoothie": 12, "r-meal": 8, "r-sauna": 5, "r-pt": 3 },
    packagePurchases: [
      {
        id: "pp-seed1",
        memberId: "m1",
        trainerId: "t2",
        packageId: "pk8",
        remaining: 5,
        at: "2026-10-01",
        method: "cash",
        expires: "2026-11-15",
      },
      {
        id: "pp-seed2",
        memberId: "m7",
        trainerId: "t2",
        packageId: "pk12",
        remaining: 9,
        at: "2026-10-04",
        method: "card",
        expires: "2026-12-03",
      },
      {
        id: "pp-seed4",
        memberId: "m2",
        trainerId: "t1",
        packageId: "pk8",
        remaining: 8,
        at: xe,
        method: "card",
        expires: "2026-12-06",
      },
      {
        id: "pp-seed3",
        memberId: "m10",
        trainerId: "t1",
        packageId: "pk12",
        remaining: 2,
        at: "2026-09-02",
        method: "cash",
        expires: "2026-11-01",
      },
    ],
    ptSessions: [
      {
        id: "pt1",
        memberId: "m7",
        trainerId: "t2",
        day: 0,
        time: "17:00",
        status: "completed",
      },
      {
        id: "pt2",
        memberId: "m1",
        trainerId: "t2",
        day: 0,
        time: "20:30",
        status: "scheduled",
      },
      {
        id: "pt3",
        memberId: "m7",
        trainerId: "t2",
        day: 2,
        time: "09:00",
        status: "scheduled",
      },
      {
        id: "pt4",
        memberId: "m10",
        trainerId: "t1",
        day: 0,
        time: "19:00",
        status: "scheduled",
      },
      {
        id: "pt5",
        memberId: "m1",
        trainerId: "t2",
        day: 3,
        time: "18:00",
        status: "scheduled",
      },
    ],
    trainerEarningsSeed: { t1: 6720, t2: 9360, t3: 2400 },
    payouts: [],
    programs: [
      {
        id: "pg1",
        memberId: "m1",
        trainerId: "t2",
        name: {
          en: "Lower body & posture · week 3",
          ar: "الجزء السفلي والقوام · الأسبوع ٣",
        },
        items: [
          { equipmentId: "e5", sets: 3, reps: 12 },
          { equipmentId: "e10", sets: 3, reps: 10 },
          { equipmentId: "e9", sets: 3, reps: 12 },
          { equipmentId: "e4", sets: 1, reps: 10, unit: "min" },
        ],
        note: {
          en: "Slow lowering on every rep. Stop if your lower back complains.",
          ar: "انزلي ببطء في كل تكرار. توقفي لو شعرتِ بألم في أسفل الظهر.",
        },
      },
    ],
    workoutLogs: [],
    messages: [
      {
        id: "msg1",
        thread: "m1",
        from: "t2",
        text: {
          en: "Hi Salma, week 3 is ready. I swapped the lat pulldown for seated rows while it's being repaired.",
          ar: "أهلاً سلمى، برنامج الأسبوع ٣ جاهز. بدّلت السحب العلوي بالتجديف الجالس لحين إصلاحه.",
        },
        at: "09:12",
      },
      {
        id: "msg2",
        thread: "m1",
        from: "m1",
        text: {
          en: "Perfect, see you tonight at 8:30.",
          ar: "تمام، أشوفك النهارده ٨:٣٠.",
        },
        at: "09:40",
      },
      {
        id: "msg3",
        thread: "m7",
        from: "m7",
        text: {
          en: "Can we move Saturday to 10?",
          ar: "ممكن نخلي السبت الساعة ١٠؟",
        },
        at: "12:03",
      },
    ],
    documents: [
      {
        id: "d1",
        memberId: "m1",
        trainerId: "t2",
        title: { en: "Everyday fuelling guide", ar: "دليل التغذية اليومي" },
        at: "2026-10-12",
      },
    ],
    challenge: { joined: !0, target: 4 },
    consent: {
      wearable: !1,
      wearableSource: null,
      shareWithTrainer: !1,
      matching: !1,
      sameGender: !0,
    },
    invites: {},
    blocked: [],
    guests: [],
    offlineQueue: [],
    gyms: structuredClone(Pf),
    onboarding: {
      plan: !0,
      floor: !0,
      library: !0,
      members: !0,
      staff: !0,
      payments: !1,
      pilotTargets: !1,
    },
    audit: [],
    tourDone: !1,
  };
}
const de = (s, i) => s.find((a) => a.id === i),
  ze = (s, i) => de(s.members, i),
  En = (s) => de(Wt, s.planId),
  Xt = (s) => de(fn, s.libId);
function lt(s, i) {
  if (i.freeze) {
    const a = Ye(i.freeze.start, i.freeze.days);
    if (xe >= i.freeze.start && xe < a) return "frozen";
  }
  return i.end < xe ? "expired" : Ks(xe, i.end) <= 3 ? "expiring" : "active";
}
const Mn = (s) => Ks(xe, s.end),
  ks = (s, i) => Math.max(0, s.settings.freezeDaysPerYear - i.freezeUsed),
  Za = (s) => Math.max(0, En(s).guestPasses - s.guestUsed),
  zl = (s) => s.visits.filter((i) => i.outAt == null),
  qt = (s, i) => s.visits.find((a) => a.memberId === i && a.outAt == null);
function Ef(s, i = s.clock) {
  const a = Math.floor(i / 60),
    l = Fo[a] ?? 0.05,
    c = Fo[a + 1] ?? l,
    m = l + ((c - l) * (i % 60)) / 60;
  return Math.round(m * s.gym.capacity);
}
function Tl(s) {
  const i = Ef(s) + zl(s).filter((c) => c.zone === "main").length,
    a = i / s.gym.capacity,
    l = a < 0.35 ? "quiet" : a < 0.7 ? "moderate" : "busy";
  return { count: i, pct: a, level: l, capacity: s.gym.capacity };
}
function Ml(s) {
  const i = [];
  for (let a = 6; a <= 23; a++) i.push({ h: a, pct: Fo[a] ?? 0.05 });
  return i;
}
function If(s) {
  const i = Math.floor(s.clock / 60),
    a = Ml().filter((l) => l.h > i && l.h <= 22);
  return a.length ? a.reduce((l, c) => (c.pct < l.pct ? c : l)) : null;
}
const Yo = (s, i = s.clock) =>
  i >= Ve(s.settings.ladiesHours.from) && i < Ve(s.settings.ladiesHours.to);
function Pl(s, i = be) {
  return s.ledger
    .filter((a) => a.memberId === i)
    .reduce((a, l) => a + l.pts, 0);
}
function Lf(s, i = be) {
  const a = qt(s, i);
  return !a || s.ledger.some((l) => l.key === `visit-${i}-${xe}`)
    ? null
    : { minutesLeft: Math.max(0, a.inAt + s.settings.minStayMin - s.clock) };
}
function bt(s) {
  return s.day * 1440 + Ve(s.time);
}
function gn(s, i) {
  const a = bt(i);
  return s.clock >= a + i.dur ? "ended" : s.clock >= a ? "live" : "upcoming";
}
function Pn(s, i) {
  const a = s.bookings.filter(
    (l) =>
      l.sessionId === i.id &&
      ["booked", "attended"].includes(l.status) &&
      !String(l.id).startsWith("b-seed"),
  ).length;
  return Math.max(0, i.cap - i.taken - a);
}
const Xa = (s, i, a = be) =>
  s.bookings.find(
    (l) => l.sessionId === i && l.memberId === a && l.status !== "cancelled",
  );
function en(s, i, a) {
  return s.packagePurchases.find(
    (l) => l.memberId === i && (!a || l.trainerId === a) && l.remaining > 0,
  );
}
const El = (s) => {
  const i = de(Jt, s.packageId);
  return Math.round(i.price / i.sessions);
};
function Ja(s, i) {
  const a = s.settings.trainerSharePct / 100,
    l = s.ledger
      .filter((h) => h.kind === "pt" && h.trainerId === i)
      .reduce((h, p) => h + Math.round(p.value * a), 0),
    c = s.trainerEarningsSeed[i] || 0,
    m = s.payouts
      .filter((h) => h.trainerId === i)
      .reduce((h, p) => h + p.amount, 0);
  return { month: c + l, owed: c + l - m, paid: m };
}
function Su(s) {
  const i = s.members.reduce((a, l) => a + Math.max(0, Pl(s, l.id)), 0) + 38400;
  return { outstanding: i, egp: Math.round(i * s.settings.pointValueEgp) };
}
function Ko(s) {
  const i = s.members.length,
    a = s.members.filter((f) => f.app).length,
    l = s.visits.length,
    c = s.bookings.filter((f) => ["attended", "noshow"].includes(f.status)),
    m = c.filter((f) => f.status === "noshow").length,
    h = s.payments.filter((f) => f.status === "paid").length,
    p = s.payments.filter((f) => f.status === "pending").length;
  return [
    {
      id: "activation",
      value: Math.round((a / i) * 100),
      target: 40,
      unit: "%",
      good: a / i >= 0.4,
    },
    { id: "engagement", value: 54, target: 50, unit: "%", good: !0 },
    { id: "digital", value: 93, target: 90, unit: "%", good: !0, note: l },
    { id: "accuracy", value: 11, target: 15, unit: "±%", good: !0 },
    {
      id: "noshow",
      value: c.length ? Math.round((m / c.length) * 100) : 9,
      target: 15,
      unit: "%",
      good: !0,
      lowerIsBetter: !0,
    },
    {
      id: "payments",
      value: p ? Math.round((h / (h + p)) * 100) : 100,
      target: 100,
      unit: "%",
      good: !p,
    },
  ];
}
function Re(s, i, a = {}) {
  return {
    ...s,
    audit: [{ id: mt("a"), type: i, params: a, at: s.clock }, ...s.audit].slice(
      0,
      80,
    ),
  };
}
function Wa(s, i, a, l, c, m = {}) {
  return s.ledger.some((h) => h.key === a)
    ? s
    : {
        ...s,
        ledger: [
          {
            id: mt("l"),
            memberId: i,
            key: a,
            kind: l,
            pts: c,
            at: xe,
            clock: s.clock,
            ...m,
          },
          ...s.ledger,
        ],
      };
}
const ta = (s, i, a) => ({
  ...s,
  members: s.members.map((l) => (l.id === i ? a(l) : l)),
});
function Il(s, i, a = s.clock) {
  const l = ze(s, i);
  if (!l) return { ok: !1, reason: "unknown" };
  const c = lt(s, l);
  return c === "expired"
    ? { ok: !1, reason: "expired" }
    : c === "frozen"
      ? { ok: !1, reason: "frozen" }
      : qt(s, i)
        ? { ok: !1, reason: "already" }
        : Yo(s, a) && l.gender === "M"
          ? { ok: !1, reason: "ladies" }
          : { ok: !0, status: c };
}
function Zs(s, i, { method: a = "qr", by: l = "reception" } = {}) {
  const c = Il(s, i);
  if (!c.ok) return Re(s, "entryDenied", { memberId: i, reason: c.reason });
  const m = {
    id: mt("v"),
    memberId: i,
    inAt: s.clock,
    outAt: null,
    method: a,
    by: l,
    zone: "main",
    synced: s.online,
  };
  let h = { ...s, visits: [...s.visits, m] };
  return (
    s.online || (h = { ...h, offlineQueue: [...h.offlineQueue, m.id] }),
    Re(h, s.online ? "checkIn" : "checkInOffline", { memberId: i, method: a })
  );
}
function Zo(s, i) {
  const a = qt(s, i);
  if (!a) return s;
  const l = {
    ...s,
    visits: s.visits.map((c) => (c.id === a.id ? { ...c, outAt: s.clock } : c)),
  };
  return Cu(Re(l, "checkOut", { memberId: i }));
}
function bl(s, i) {
  if (i === s.online) return s;
  if (!i) return Re({ ...s, online: i }, "wentOffline");
  const a = s.offlineQueue.length;
  return Re(
    {
      ...s,
      online: i,
      offlineQueue: [],
      visits: s.visits.map((l) => ({ ...l, synced: !0 })),
    },
    "synced",
    { n: a },
  );
}
function Cu(s) {
  let i = s;
  i = {
    ...i,
    visits: i.visits.map((l) =>
      l.outAt == null && i.clock - l.inAt >= i.settings.avgVisitMin
        ? { ...l, outAt: l.inAt + i.settings.avgVisitMin, auto: !0 }
        : l,
    ),
  };
  for (const l of i.visits)
    (l.outAt ?? i.clock) - l.inAt >= i.settings.minStayMin &&
      l.inAt >= Nu - 600 &&
      (i = Wa(i, l.memberId, `visit-${l.memberId}-${xe}`, "visit", 10, {
        visitId: l.id,
      }));
  for (const l of i.bookings) {
    if (l.status !== "booked") continue;
    const c = de(i.sessions, l.sessionId);
    if (!c || gn(i, c) !== "ended") continue;
    const m = bt(c),
      h = m + c.dur,
      p = i.visits.some(
        (f) =>
          f.memberId === l.memberId &&
          f.inAt <= h &&
          (f.outAt ?? i.clock) >= m + 10,
      );
    ((i = {
      ...i,
      bookings: i.bookings.map((f) =>
        f.id === l.id ? { ...f, status: p ? "attended" : "noshow" } : f,
      ),
    }),
      p
        ? (i = Wa(i, l.memberId, `class-${l.id}`, "class", 15, {
            sessionId: c.id,
          }))
        : i.settings.noShowPenalty &&
          (i = ta(i, l.memberId, (f) => ({ ...f, noShows: f.noShows + 1 }))),
      (i = Re(i, p ? "attended" : "noshow", {
        memberId: l.memberId,
        sessionId: c.id,
      })));
  }
  const a = 3 + (i.ledger.some((l) => l.key === `visit-${be}-${xe}`) ? 1 : 0);
  return (
    i.challenge.joined &&
      a >= i.challenge.target &&
      (i = Wa(i, be, "weekly-43", "weekly", 100)),
    i
  );
}
function ts(s, i) {
  const a = Math.min(1425, s.clock + i);
  return a === s.clock
    ? s
    : Cu(Re({ ...s, clock: a }, "clock", { minutes: a - s.clock }));
}
function Xo(s) {
  return 3 + (s.ledger.some((i) => i.key === `visit-${be}-${xe}`) ? 1 : 0);
}
function Jo(s, i, a = be) {
  const l = ze(s, a);
  if (gn(s, i) !== "upcoming") return { ok: !1, reason: "started" };
  if (i.womenOnly && l.gender !== "F") return { ok: !1, reason: "ladies" };
  const c = lt(s, l);
  return c === "expired" || c === "frozen"
    ? { ok: !1, reason: c }
    : s.settings.noShowPenalty && l.noShows >= s.settings.noShowLimit
      ? { ok: !1, reason: "noshows" }
      : Xa(s, i.id, a)
        ? { ok: !1, reason: "already" }
        : { ok: !0, waitlist: Pn(s, i) === 0 };
}
function Ll(s, i, a = be) {
  const l = de(s.sessions, i),
    c = l && Jo(s, l, a);
  if (!(c != null && c.ok)) return s;
  const m = c.waitlist ? "waitlisted" : "booked";
  return Re(
    {
      ...s,
      bookings: [
        ...s.bookings,
        { id: mt("b"), sessionId: i, memberId: a, status: m },
      ],
    },
    m === "booked" ? "booked" : "waitlisted",
    { memberId: a, sessionId: i },
  );
}
function zu(s, i) {
  return bt(i) - s.clock < s.settings.cancelWindowHrs * 60;
}
function Af(s, i) {
  const a = de(s.bookings, i);
  if (!a || !["booked", "waitlisted"].includes(a.status)) return s;
  const l = de(s.sessions, a.sessionId),
    c = a.status === "booked" && zu(s, l) && s.settings.noShowPenalty;
  let m = {
    ...s,
    bookings: s.bookings.map((h) =>
      h.id === a.id ? { ...h, status: "cancelled", late: c } : h,
    ),
  };
  if (
    (c && (m = ta(m, a.memberId, (h) => ({ ...h, noShows: h.noShows + 1 }))),
    a.status === "booked")
  ) {
    const h = m.bookings.find(
      (p) => p.sessionId === a.sessionId && p.status === "waitlisted",
    );
    h &&
      (m = Re(
        {
          ...m,
          bookings: m.bookings.map((p) =>
            p.id === h.id ? { ...p, status: "booked" } : p,
          ),
        },
        "promoted",
        { memberId: h.memberId, sessionId: a.sessionId },
      ));
  }
  return Re(m, c ? "lateCancel" : "cancelled", {
    memberId: a.memberId,
    sessionId: a.sessionId,
  });
}
function er(s, i, a, l, c = "reception") {
  const m = ze(s, i),
    h = de(Wt, a);
  if (!m || !h) return s;
  const p = l === "fawry" || l === "instapay",
    f = `R-${s.nextReceipt}`,
    y = {
      id: mt("p"),
      memberId: i,
      amount: h.price,
      method: l,
      label: "renewal",
      planId: a,
      at: xe,
      clock: s.clock,
      status: p ? "pending" : "paid",
      by: c,
      receipt: f,
      ref:
        l === "fawry"
          ? `${7700 + s.nextReceipt}${Math.floor(1e3 + Math.random() * 8999)}`
          : void 0,
    };
  let j = {
    ...s,
    payments: [y, ...s.payments],
    nextReceipt: s.nextReceipt + 1,
  };
  return (
    p || (j = Tu(j, i, a)),
    Re(j, p ? "paymentPending" : "paid", {
      memberId: i,
      amount: h.price,
      method: l,
    })
  );
}
function Tu(s, i, a) {
  const l = de(Wt, a);
  return ta(s, i, (c) => {
    const m = c.end > xe ? c.end : xe;
    return {
      ...c,
      planId: a,
      start: c.end > xe ? c.start : xe,
      end: Cl(m, l.months),
      guestUsed: 0,
    };
  });
}
function Mu(s, i) {
  const a = de(s.payments, i);
  if (!a || a.status !== "pending") return s;
  const l = {
    ...s,
    payments: s.payments.map((c) =>
      c.id === a.id ? { ...c, status: "paid", confirmedAt: s.clock } : c,
    ),
  };
  return Re(
    a.label === "renewal" ? Tu(l, a.memberId, a.planId) : l,
    "paymentConfirmed",
    { memberId: a.memberId, amount: a.amount, method: a.method },
  );
}
function Pu(s, i, a, l) {
  const c = ze(s, i);
  if (!c || c.freeze || l < 1 || l > ks(s, c)) return s;
  const m = Ye(xe, a),
    h = ta(s, i, (y) => ({
      ...y,
      freeze: { start: m, days: l },
      freezeUsed: y.freezeUsed + l,
      end: Ye(y.end, l),
    })),
    p = a === 0 && qt(h, i),
    f = p
      ? {
          ...h,
          visits: h.visits.map((y) =>
            y.id === p.id ? { ...y, outAt: s.clock } : y,
          ),
        }
      : h;
  return Re(f, "frozen", { memberId: i, days: l, start: m });
}
function ec(s, i) {
  const a = ze(s, i);
  if (!(a != null && a.freeze)) return s;
  const l = Ye(a.freeze.start, a.freeze.days),
    c = xe < a.freeze.start ? a.freeze.days : Math.max(0, Ks(xe, l));
  return Re(
    ta(s, i, (m) => ({
      ...m,
      freeze: null,
      freezeUsed: m.freezeUsed - c,
      end: Ye(m.end, -c),
    })),
    "unfrozen",
    { memberId: i, days: c },
  );
}
function $f(s, i, a) {
  const l = ze(s, i);
  if (!l || !a.trim() || Za(l) < 1) return s;
  const c = ta(s, i, (m) => ({ ...m, guestUsed: m.guestUsed + 1 }));
  return Re(
    {
      ...c,
      guests: [
        { id: mt("g"), hostId: i, name: a.trim(), at: s.clock },
        ...c.guests,
      ],
    },
    "guest",
    { memberId: i, guest: a.trim() },
  );
}
function Of(s, { name: i, gender: a, age: l, phone: c, planId: m, method: h }) {
  const p = mt("m"),
    f = { en: i, ar: i },
    y = `PAC-00${600 + s.members.length}`,
    j = {
      id: p,
      code: y,
      name: f,
      gender: a,
      age: Number(l) || 25,
      phone: c,
      planId: m,
      start: xe,
      end: xe,
      app: !1,
      trainerId: null,
      freezeUsed: 0,
      guestUsed: 0,
      noShows: 0,
      since: "2026-10",
      isNew: !0,
    },
    C = Re({ ...s, members: [j, ...s.members] }, "newMember", { memberId: p });
  return er(C, p, m, h);
}
function Rf(s, i, a = be) {
  const l = de(Jn, i);
  if (!l || Pl(s, a) < l.pts || (s.rewardStock[i] ?? 0) < 1) return s;
  const c = mt("rd"),
    m = `FRM-${c.slice(-5).toUpperCase()}`;
  let h = Wa(s, a, `redeem-${c}`, "redeem", -l.pts, { rewardId: i });
  return (
    (h = {
      ...h,
      rewardStock: { ...h.rewardStock, [i]: h.rewardStock[i] - 1 },
      redemptions: [
        {
          id: c,
          rewardId: i,
          memberId: a,
          code: m,
          at: s.clock,
          status: "ready",
        },
        ...h.redemptions,
      ],
    }),
    Re(h, "redeemed", { memberId: a, rewardId: i })
  );
}
function Ff(s, i, a = be) {
  return s.promoReveals.some((l) => l.offerId === i && l.memberId === a)
    ? s
    : Re(
        {
          ...s,
          promoReveals: [
            {
              id: mt("pr"),
              offerId: i,
              memberId: a,
              at: s.clock,
              redeemed: !1,
            },
            ...s.promoReveals,
          ],
        },
        "promo",
        { memberId: a, offerId: i },
      );
}
function qf(s, i) {
  return Re(
    {
      ...s,
      promoReveals: s.promoReveals.map((a) =>
        a.id === i ? { ...a, redeemed: !0 } : a,
      ),
    },
    "promoRedeemed",
    {},
  );
}
function _f(s, i) {
  const a = de(s.programs, i);
  return Re(
    {
      ...s,
      workoutLogs: [
        {
          id: mt("w"),
          programId: i,
          at: s.clock,
          memberId: (a == null ? void 0 : a.memberId) ?? be,
        },
        ...s.workoutLogs,
      ],
    },
    "selfLog",
    { memberId: (a == null ? void 0 : a.memberId) ?? be },
  );
}
function wl(s, i) {
  const a = de(s.ptSessions, i);
  if (!a || a.status !== "scheduled") return s;
  const l = en(s, a.memberId, a.trainerId);
  if (!l) return s;
  let c = {
    ...s,
    ptSessions: s.ptSessions.map((m) =>
      m.id === i ? { ...m, status: "completed", confirmedAt: s.clock } : m,
    ),
    packagePurchases: s.packagePurchases.map((m) =>
      m.id === l.id ? { ...m, remaining: m.remaining - 1 } : m,
    ),
  };
  return (
    (c = Wa(c, a.memberId, `pt-${i}`, "pt", 20, {
      trainerId: a.trainerId,
      value: El(l),
    })),
    Re(c, "ptConfirmed", { memberId: a.memberId, trainerId: a.trainerId })
  );
}
function Df(s, i) {
  return Re(
    {
      ...s,
      ptSessions: s.ptSessions.map((a) =>
        a.id === i && a.status === "scheduled"
          ? { ...a, status: "cancelled" }
          : a,
      ),
    },
    "ptCancelled",
    {},
  );
}
function Hf(s, i, a, l, c) {
  return en(s, i, a)
    ? Re(
        {
          ...s,
          ptSessions: [
            ...s.ptSessions,
            {
              id: mt("pt"),
              memberId: i,
              trainerId: a,
              day: l,
              time: c,
              status: "scheduled",
            },
          ],
        },
        "ptScheduled",
        { memberId: i, trainerId: a },
      )
    : s;
}
function Eu(s, i, a, l, c, m = "app") {
  const h = de(Jt, l);
  if (!h) return s;
  const p = c === "fawry" || c === "instapay",
    f = `R-${s.nextReceipt}`,
    y = {
      id: mt("pp"),
      memberId: i,
      trainerId: a,
      packageId: l,
      remaining: h.sessions,
      at: xe,
      method: c,
      expires: Ye(xe, h.validityDays),
    };
  return Re(
    {
      ...s,
      nextReceipt: s.nextReceipt + 1,
      packagePurchases: [y, ...s.packagePurchases],
      payments: [
        {
          id: mt("p"),
          memberId: i,
          amount: h.price,
          method: c,
          label: "package",
          packageId: l,
          trainerId: a,
          at: xe,
          clock: s.clock,
          status: p ? "pending" : "paid",
          by: m,
          receipt: f,
        },
        ...s.payments,
      ],
    },
    "packageSold",
    { memberId: i, trainerId: a, amount: h.price },
  );
}
function Bf(s, i) {
  const l = de(s.programs, i.id)
    ? s.programs.map((c) => (c.id === i.id ? i : c))
    : [{ ...i, id: mt("pg") }, ...s.programs];
  return Re({ ...s, programs: l }, "programSaved", { memberId: i.memberId });
}
function tc(s, i, a, l) {
  return l.trim()
    ? {
        ...s,
        messages: [
          ...s.messages,
          {
            id: mt("msg"),
            thread: i,
            from: a,
            text: { en: l, ar: l },
            at: Cf(s.clock),
          },
        ],
      }
    : s;
}
function Wf(s, i, a, l) {
  return Re(
    {
      ...s,
      documents: [
        {
          id: mt("d"),
          memberId: i,
          trainerId: a,
          title: { en: l, ar: l },
          at: xe,
        },
        ...s.documents,
      ],
    },
    "docShared",
    { memberId: i },
  );
}
function Iu(s, i) {
  const { owed: a } = Ja(s, i);
  return a <= 0
    ? s
    : Re(
        {
          ...s,
          payouts: [
            ...s.payouts,
            { id: mt("po"), trainerId: i, amount: a, at: s.clock },
          ],
        },
        "payout",
        { trainerId: i, amount: a },
      );
}
function Uf(s, i, a = 46, l = 74) {
  const c = { cardio: "cardio", strength: "strength", free: "free" },
    m = de(fn, i),
    h = s.equipment.length + 1;
  return Re(
    {
      ...s,
      equipment: [
        ...s.equipment,
        {
          id: mt("e"),
          libId: i,
          x: a,
          y: l,
          status: "active",
          zone: c[m.cat],
          label: `N-${String(h).padStart(2, "0")}`,
          isNew: !0,
        },
      ],
    },
    "equipmentAdded",
    { libId: i },
  );
}
function Vf(s, i, a, l) {
  return {
    ...s,
    equipment: s.equipment.map((c) => (c.id === i ? { ...c, x: a, y: l } : c)),
  };
}
function _o(s, i, a) {
  return Re(
    {
      ...s,
      equipment: s.equipment.map((l) => (l.id === i ? { ...l, status: a } : l)),
    },
    "equipmentStatus",
    { id: i, status: a },
  );
}
function Gf(s, i) {
  return { ...s, equipment: s.equipment.filter((a) => a.id !== i) };
}
function js(s, i) {
  const a = { ...s.consent, ...i };
  return (
    i.wearable === !1 && ((a.shareWithTrainer = !1), (a.wearableSource = null)),
    Re({ ...s, consent: a }, "consent", { patch: Object.keys(i).join(",") })
  );
}
function Qf(s, i = be) {
  const a = ze(s, i);
  return s.members.filter(
    (l) =>
      l.id !== i &&
      l.age >= 18 &&
      a.age >= 18 &&
      !s.blocked.includes(l.id) &&
      (!s.consent.sameGender || l.gender === a.gender) &&
      l.app,
  );
}
function Yf(s, i) {
  return Re({ ...s, invites: { ...s.invites, [i]: "pending" } }, "invite", {
    memberId: i,
  });
}
function Kf(s, i) {
  return { ...s, invites: { ...s.invites, [i]: "accepted" } };
}
function Zf(s, i) {
  return Re(
    {
      ...s,
      blocked: [...s.blocked, i],
      invites: { ...s.invites, [i]: void 0 },
    },
    "blocked",
    {},
  );
}
function Lu(s, i, a) {
  return Re({ ...s, settings: { ...s.settings, [i]: a } }, "setting", {
    key: i,
  });
}
function Xf(s) {
  try {
    const i = JSON.parse(s.getItem(wu));
    if (
      (i == null ? void 0 : i.version) === 2 &&
      Array.isArray(i.members) &&
      Array.isArray(i.visits)
    )
      return { ...kl(), ...i };
  } catch {}
  return kl();
}

export { wu, xe, Nu, be, Ka, Nf, Sf, mt, Ye, Ks, Cl, Cf, Ve, ea, Wt, dt, Jt, as, Fo, fn, zf, Tf, Jn, qo, Qo, Mf, Pf, kl, de, ze, En, Xt, lt, Mn, ks, Za, zl, qt, Ef, Tl, Ml, If, Yo, Pl, Lf, bt, gn, Pn, Xa, en, El, Ja, Su, Ko, Re, Wa, ta, Il, Zs, Zo, bl, Cu, ts, Xo, Jo, Ll, zu, Af, er, Tu, Mu, Pu, ec, $f, Of, Rf, Ff, qf, _f, wl, Df, Hf, Eu, Bf, tc, Wf, Iu, Uf, Vf, _o, Gf, js, Qf, Yf, Kf, Zf, Lu, Xf };
