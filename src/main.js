const questions = [
  {
    question: "در برابر فشار و تحریم‌های خارجی چه واکنشی نشان می‌دهید؟",
    options: [
      { text: "مقاومت و استقامت در برابر تحریم‌ها", traits: { nationalist: 3, authoritarian: 2, resistant: 3 } },
      { text: "گفتگو و مذاکره برای رفع تحریم‌ها", traits: { diplomatic: 3, pragmatic: 2, moderate: 2 } },
      { text: "خودکفایی و تکیه بر منابع داخلی", traits: { autarkic: 3, nationalist: 2, pragmatic: 1 } },
      { text: "تسلیم و پذیرش خواسته‌های طرف مقابل", traits: { submissive: 3, pragmatic: 1, peaceful: 2 } }
    ]
  },
  {
    question: "استقلال سیاسی مهم‌تر است یا اتحادهای بین‌المللی؟",
    options: [
      { text: "استقلال کامل و عدم وابستگی", traits: { nationalist: 3, independent: 3, isolationist: 2 } },
      { text: "اتحادهای استراتژیک با حفظ استقلال", traits: { strategic: 3, pragmatic: 2, diplomatic: 2 } },
      { text: "عضویت فعال در سازمان‌های بین‌المللی", traits: { internationalist: 3, liberal: 2, cooperative: 2 } },
      { text: "پیروی از قدرت‌های بزرگ", traits: { dependent: 3, pragmatic: 1, submissive: 2 } }
    ]
  },
  {
    question: "سیاست شما درباره رسانه‌ها و آزادی بیان چیست؟",
    options: [
      { text: "آزادی کامل رسانه‌ها", traits: { liberal: 3, democratic: 3, tolerant: 2 } },
      { text: "آزادی نسبی با نظارت محدود", traits: { moderate: 3, pragmatic: 2, balanced: 2 } },
      { text: "کنترل رسانه‌ها برای امنیت ملی", traits: { authoritarian: 3, nationalist: 2, controlled: 3 } },
      { text: "رسانه‌ها باید ابزار تبلیغات دولت باشند", traits: { propagandist: 3, authoritarian: 3, controlled: 2 } }
    ]
  },
  {
    question: "برای توسعه کشور، بر صنعت تکیه می‌کنید یا کشاورزی یا دانش نوین؟",
    options: [
      { text: "توسعه صنعتی و تولید", traits: { industrialist: 3, modernist: 2, pragmatic: 2 } },
      { text: "کشاورزی و خودکفایی غذایی", traits: { traditionalist: 3, nationalist: 2, sustainable: 2 } },
      { text: "اقتصاد دانش‌محور و فناوری", traits: { technocratic: 3, modernist: 3, innovative: 3 } },
      { text: "ترکیب متعادل از همه بخش‌ها", traits: { balanced: 3, pragmatic: 3, moderate: 2 } }
    ]
  },
  {
    question: "در زمان بحران‌های انتخاباتی یا مردمی چه راهبردی دارید؟",
    options: [
      { text: "گفتگو و پاسخگویی به مردم", traits: { democratic: 3, transparent: 3, responsive: 2 } },
      { text: "سرکوب قاطع اغتشاشات", traits: { authoritarian: 3, militarist: 2, tough: 3 } },
      { text: "اصلاحات فوری برای آرام کردن اوضاع", traits: { reformist: 3, pragmatic: 2, adaptive: 2 } },
      { text: "صبر و انتظار تا خود به خود آرام شود", traits: { passive: 3, conservative: 2, patient: 2 } }
    ]
  },
  {
    question: "نقش دین در سیاست باید چقدر پررنگ باشد؟",
    options: [
      { text: "سیاست باید کاملاً سکولار باشد", traits: { secular: 3, liberal: 2, modernist: 2 } },
      { text: "دین راهنمای ارزش‌های اخلاقی سیاست", traits: { spiritual: 3, traditional: 2, principled: 2 } },
      { text: "دولت اسلامی و حاکمیت شریعت", traits: { theocratic: 3, traditional: 3, spiritual: 2 } },
      { text: "استفاده ابزاری از دین برای مشروعیت", traits: { pragmatic: 3, manipulative: 2, strategic: 2 } }
    ]
  },
  {
    question: "سیاست شما درباره ارتش و قدرت نظامی چیست؟",
    options: [
      { text: "ارتش قوی برای دفاع از کشور", traits: { militarist: 3, nationalist: 2, defensive: 2 } },
      { text: "قدرت نظامی برای نفوذ منطقه‌ای", traits: { expansionist: 3, militarist: 3, aggressive: 2 } },
      { text: "کاهش بودجه نظامی و تمرکز بر رفاه", traits: { peaceful: 3, liberal: 2, welfare: 3 } },
      { text: "متناسب با تهدیدات امنیتی", traits: { pragmatic: 3, strategic: 2, balanced: 2 } }
    ]
  },
  {
    question: "در سیاست اقتصادی، طرفدار دولت‌گرایی هستید یا بازار آزاد؟",
    options: [
      { text: "اقتصاد کاملاً دولتی و برنامه‌ریزی متمرکز", traits: { socialist: 3, centralized: 3, controlled: 2 } },
      { text: "بازار آزاد و حداقل دخالت دولت", traits: { capitalist: 3, liberal: 3, free_market: 2 } },
      { text: "اقتصاد مختلط با نقش قوی دولت", traits: { mixed_economy: 3, pragmatic: 2, moderate: 2 } },
      { text: "اقتصاد عدالت‌محور و توزیع ثروت", traits: { egalitarian: 3, socialist: 2, redistributive: 3 } }
    ]
  },
  {
    question: "در سیاست خارجی، به دیپلماسی نرم باور دارید یا قدرت سخت؟",
    options: [
      { text: "دیپلماسی، گفتگو و صلح", traits: { diplomatic: 3, peaceful: 3, soft_power: 2 } },
      { text: "قدرت نظامی و اقتصادی", traits: { militarist: 3, hard_power: 3, aggressive: 2 } },
      { text: "ترکیب دیپلماسی و قدرت", traits: { strategic: 3, balanced: 2, pragmatic: 2 } },
      { text: "انزوا و عدم مداخله", traits: { isolationist: 3, defensive: 2, neutral: 2 } }
    ]
  },
  {
    question: "درباره حقوق اقلیت‌ها و آزادی‌های مدنی چه نظری دارید؟",
    options: [
      { text: "حقوق کامل و برابری همه شهروندان", traits: { egalitarian: 3, liberal: 3, tolerant: 3 } },
      { text: "حقوق محدود در چارچوب فرهنگ غالب", traits: { nationalist: 3, traditionalist: 2, restrictive: 2 } },
      { text: "احترام به تنوع در چارچوب وحدت ملی", traits: { pluralist: 3, moderate: 2, inclusive: 2 } },
      { text: "اولویت با امنیت و نظم عمومی", traits: { authoritarian: 3, security_first: 3, restrictive: 2 } }
    ]
  },
  {
    question: "برای مقابله با فساد، چه اولویتی قائلید؟",
    options: [
      { text: "نهادسازی و شفافیت کامل", traits: { transparent: 3, institutional: 3, systematic: 2 } },
      { text: "برخورد قاطع و مجازات سنگین", traits: { tough: 3, authoritarian: 2, punitive: 3 } },
      { text: "اصلاح تدریجی ساختارها", traits: { reformist: 3, gradual: 2, pragmatic: 2 } },
      { text: "تقویت اخلاق و فرهنگ‌سازی", traits: { cultural: 3, educational: 2, moral: 3 } }
    ]
  },
  {
    question: "در بحران‌های جهانی (مثل جنگ یا کرونا) چه تصمیمی می‌گیرید؟",
    options: [
      { text: "همکاری بین‌المللی و کمک متقابل", traits: { cooperative: 3, internationalist: 3, humanitarian: 2 } },
      { text: "اول منافع ملی، بعد کمک به دیگران", traits: { nationalist: 3, pragmatic: 2, self_interest: 3 } },
      { text: "رهبری جهانی در مقابله با بحران", traits: { leadership: 3, ambitious: 2, responsible: 2 } },
      { text: "انزوا و محافظت از کشور", traits: { isolationist: 3, defensive: 3, protective: 2 } }
    ]
  },
  {
    question: "رابطه شما با قدرت‌های بزرگ (آمریکا، روسیه، چین) چگونه خواهد بود؟",
    options: [
      { text: "تعامل سازنده و دوستانه با همه", traits: { diplomatic: 3, balanced: 3, cooperative: 2 } },
      { text: "مقابله و عدم تسلیم در برابر فشارها", traits: { resistant: 3, nationalist: 3, confrontational: 2 } },
      { text: "اتحاد استراتژیک با یکی از آنها", traits: { aligned: 3, strategic: 2, dependent: 1 } },
      { text: "مستقل از همه و غیرمتعهد", traits: { independent: 3, neutral: 3, nonaligned: 2 } }
    ]
  },
  {
    question: "توسعه علمی و فناوری چه جایگاهی در سیاست شما دارد؟",
    options: [
      { text: "اولویت اول و سرمایه‌گذاری گسترده", traits: { technocratic: 3, modernist: 3, innovative: 3 } },
      { text: "مهم اما در چارچوب ارزش‌های سنتی", traits: { balanced: 3, traditionalist: 2, cautious: 2 } },
      { text: "ابزاری برای قدرت و امنیت ملی", traits: { strategic: 3, militarist: 2, nationalist: 2 } },
      { text: "کمتر مهم از مسائل اجتماعی و اقتصادی", traits: { populist: 3, practical: 2, basic_needs: 2 } }
    ]
  },
  {
    question: "آیا پوپولیسم و بسیج مردمی را ترجیح می‌دهید یا تکنوکراسی و مدیریت نخبگان؟",
    options: [
      { text: "حکومت مردمی و بسیج توده‌ها", traits: { populist: 3, democratic: 2, grassroots: 3 } },
      { text: "مدیریت علمی و تکنوکراتیک", traits: { technocratic: 3, elitist: 2, scientific: 3 } },
      { text: "ترکیب مشارکت مردم و کارشناسی", traits: { balanced: 3, democratic: 2, pragmatic: 2 } },
      { text: "رهبری نخبگان با حمایت مردم", traits: { elitist: 3, paternalistic: 2, guided: 2 } }
    ]
  }
];

const leaders = [
  // ===== رهبران ایرانی =====
  {
    name: "کوروش بزرگ",
    title: "بنیان‌گذار امپراتوری هخامنشی",
    era: "۵۵۹-۵۳۰ ق.م",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Cyrus_the_Great_bas_relief_in_Pasargadae%2C_Iran.JPG",
    traits: { humane: 4, strategist: 4, tolerant: 4, expansionist: 3 },
    description: "شما مانند کوروش، به تسامح، انسانیت و بنیان‌گذاری یک تمدن بزرگ باور دارید.",
    politicalParty: "—",
    suitableCountries: ["ایران باستان", "امپراتوری‌های چندفرهنگی"],
    governingStyle: "پادشاهی عادل و گسترش‌طلب",
    successRate: "95%",
    keyDecisions: ["منشور حقوق بشر کوروش", "فتح بابل", "ایجاد امپراتوری هخامنشی"]
  },
  {
    name: "داریوش بزرگ",
    title: "شاهنشاه هخامنشی",
    era: "۵۲۲-۴۸۶ ق.م",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Darius_the_Great.jpg",
    traits: { organizer: 4, strategist: 4, authoritarian: 3, tolerant: 3 },
    description: "شما مانند داریوش، نظم، قانون و توسعه اداری را سرلوحه دارید.",
    politicalParty: "—",
    suitableCountries: ["ایران باستان", "امپراتوری‌های بزرگ"],
    governingStyle: "پادشاهی متمرکز",
    successRate: "90%",
    keyDecisions: ["ایجاد داریوش‌نامه", "تقسیم کشور به ساتراپی‌ها", "ساخت تخت جمشید"]
  },
  {
    name: "نادرشاه افشار",
    title: "پادشاه ایران",
    era: "۱۷۳۶-۱۷۴۷",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Nader_Shah_Art.jpg",
    traits: { militarist: 4, nationalist: 3, authoritarian: 3, strategist: 3 },
    description: "شما مانند نادرشاه، رهبر جنگجو و فتح‌طلب هستید.",
    politicalParty: "—",
    suitableCountries: ["ایران", "امپراتوری‌های جنگی"],
    governingStyle: "نظامی‌گرای مقتدر",
    successRate: "70%",
    keyDecisions: ["فتح دهلی", "اتحاد ارتش‌های قبیله‌ای", "احیای اقتدار ایران"]
  },
  {
    name: "امیرکبیر",
    title: "صدر اعظم ایران",
    era: "۱۸۴۸-۱۸۵۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Amir_Kabir.jpg",
    traits: { reformist: 4, nationalist: 3, modernist: 3, pragmatic: 3 },
    description: "شما مانند امیرکبیر، اصلاحات، آموزش و پیشرفت ملی را دنبال می‌کنید.",
    politicalParty: "—",
    suitableCountries: ["ایران", "کشورهای در حال توسعه"],
    governingStyle: "اصلاح‌گر ملی",
    successRate: "80%",
    keyDecisions: ["تأسیس دارالفنون", "اصلاحات اداری", "کاهش نفوذ خارجی"]
  },
  {
    name: "میرزا کوچک‌خان جنگلی",
    title: "رهبر جنبش جنگل",
    era: "۱۹۱۴-۱۹۲۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mirza_Koochak_Khan.jpg",
    traits: { revolutionary: 4, nationalist: 3, spiritual: 2, socialist: 2 },
    description: "شما مانند میرزا کوچک‌خان، رهبر انقلابی و ملی‌گرای عدالت‌خواه هستید.",
    politicalParty: "جنبش جنگل",
    suitableCountries: ["ایران", "جنبش‌های استقلال‌طلب"],
    governingStyle: "انقلابی ملی‌گرا",
    successRate: "65%",
    keyDecisions: ["تشکیل جمهوری گیلان", "مبارزه با استعمار روس و انگلیس", "جنگ چریکی"]
  },
  {
    name: "محمد مصدق",
    title: "نخست‌وزیر ایران",
    era: "۱۹۵۱-۱۹۵۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Mohammad_Mosaddegh2.jpg",
    traits: { democratic: 4, nationalist: 3, antiImperialist: 4, liberal: 3 },
    description: "شما مانند مصدق، استقلال سیاسی و اقتصادی را با تکیه بر مردم‌سالاری دنبال می‌کنید.",
    politicalParty: "جبهه ملی",
    suitableCountries: ["ایران", "کشورهای ضد استعمار"],
    governingStyle: "ملی‌گرای دموکراتیک",
    successRate: "70%",
    keyDecisions: ["ملی کردن نفت", "مبارزه با استعمار", "اصلاحات سیاسی"]
  },
  {
    name: "رضا شاه پهلوی",
    title: "شاه ایران",
    era: "۱۹۲۵-۱۹۴۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Reza_Shah_Pahlavi.jpg",
    traits: { authoritarian: 4, nationalist: 4, modernist: 3, militarist: 2 },
    description: "شما مانند رضا شاه، به تمرکز قدرت، نوسازی و اقتدار ملی اهمیت می‌دهید.",
    politicalParty: "پهلوی",
    suitableCountries: ["ایران", "ترکیه آتاتورک"],
    governingStyle: "اقتدارگرای مدرن‌ساز",
    successRate: "65%",
    keyDecisions: ["راه‌آهن سراسری", "لغو کاپیتولاسیون", "مدرن‌سازی ارتش"]
  },
  {
    name: "محمدرضا شاه پهلوی",
    title: "آخرین شاه ایران",
    era: "۱۹۴۱-۱۹۷۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mohammad_Reza_Shah_Pahlavi_1967.jpg",
    traits: { modernist: 3, authoritarian: 3, nationalist: 3, capitalist: 2 },
    description: "شما مانند محمدرضا شاه، به مدرنیزاسیون و اتحاد با غرب باور دارید.",
    politicalParty: "پهلوی",
    suitableCountries: ["ایران", "کشورهای متحد غرب"],
    governingStyle: "سلطنتی مدرن",
    successRate: "60%",
    keyDecisions: ["انقلاب سفید", "رابطه نزدیک با آمریکا", "توسعه اقتصادی"]
  },
  {
    name: "روح‌الله خمینی",
    title: "رهبر انقلاب ایران",
    era: "۱۹۷۹-۱۹۸۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Khomeini_in_1965.jpg",
    traits: { ideological: 4, spiritual: 4, revolutionary: 4, authoritarian: 3 },
    description: "شما مانند خمینی، سیاست را با ایدئولوژی و دین پیوند می‌زنید.",
    politicalParty: "جمهوری اسلامی",
    suitableCountries: ["ایران", "کشورهای اسلامی"],
    governingStyle: "اسلام‌گرای انقلابی",
    successRate: "80%",
    keyDecisions: ["انقلاب ۵۷", "تأسیس جمهوری اسلامی", "رهبری در جنگ ایران و عراق"]
  },
  {
    name: "علی خامنه‌ای",
    title: "رهبر جمهوری اسلامی ایران",
    era: "۱۹۸۹-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ali_Khamenei_in_2018.jpg",
    traits: { ideological: 3, nationalist: 3, authoritarian: 3, strategic: 3 },
    description: "شما مانند خامنه‌ای، بر ثبات سیاسی، استقلال و ایدئولوژی تاکید دارید.",
    politicalParty: "جمهوری اسلامی",
    suitableCountries: ["ایران", "کشورهای اسلامی"],
    governingStyle: "ایدئولوژیک-اقتدارگرا",
    successRate: "75%",
    keyDecisions: ["توسعه برنامه هسته‌ای", "سیاست مقاومت در برابر غرب", "حفظ انسجام داخلی"]
  },
  {
    name: "اکبر هاشمی رفسنجانی",
    title: "رئیس‌جمهور ایران",
    era: "۱۹۸۹-۱۹۹۷",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Akbar_Hashemi_Rafsanjani%2C_2016.jpg",
    traits: { pragmatic: 4, moderate: 3, capitalist: 2, nationalist: 2 },
    description: "شما مانند رفسنجانی، عملگرایی و توسعه اقتصادی را در سیاست در اولویت دارید.",
    politicalParty: "کارگزاران سازندگی",
    suitableCountries: ["ایران", "کشورهای در حال توسعه"],
    governingStyle: "عملگرای توسعه‌گرا",
    successRate: "70%",
    keyDecisions: ["بازسازی بعد از جنگ", "گسترش اقتصاد بازار", "سیاست خارجی متعادل"]
  },
  {
    name: "سید محمد خاتمی",
    title: "رئیس‌جمهور ایران",
    era: "۱۹۹۷-۲۰۰۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Mohammad_Khatami_in_September_2009_%28cropped%29.jpg",
    traits: { reformist: 4, liberal: 3, democratic: 3, moderate: 3 },
    description: "شما مانند خاتمی، به اصلاحات، گفت‌وگوی تمدن‌ها و آزادی‌های مدنی باور دارید.",
    politicalParty: "اصلاح‌طلبان",
    suitableCountries: ["ایران", "دموکراسی‌های در حال گذار"],
    governingStyle: "اصلاح‌طلب دموکرات",
    successRate: "65%",
    keyDecisions: ["گفت‌وگوی تمدن‌ها", "اصلاحات سیاسی", "افزایش آزادی مطبوعات"]
  },
  {
    name: "محمود احمدی‌نژاد",
    title: "رئیس‌جمهور ایران",
    era: "۲۰۰۵-۲۰۱۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Mahmoud_Ahmadinejad_-_2009.jpg",
    traits: { populist: 4, nationalist: 3, radical: 3, authoritarian: 2 },
    description: "شما مانند احمدی‌نژاد، با گفتمان پوپولیستی و تقابل با غرب پیش می‌روید.",
    politicalParty: "اصولگرایان",
    suitableCountries: ["ایران", "ونزوئلا چاوز"],
    governingStyle: "پوپولیستی-ملی‌گرایانه",
    successRate: "55%",
    keyDecisions: ["برنامه هسته‌ای", "یارانه نقدی", "سیاست خارجی تهاجمی"]
  },
  {
    name: "مسعود پزشکیان",
    title: "رئیس‌جمهور ایران",
    era: "۲۰۲۴-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Masoud_Pezeshkian_in_2021.jpg",
    traits: { reformist: 3, moderate: 3, democratic: 2, humane: 3 },
    description: "شما مانند پزشکیان، به اعتدال، اصلاحات اجتماعی و گفت‌وگو باور دارید.",
    politicalParty: "اصلاح‌طلبان",
    suitableCountries: ["ایران", "دموکراسی‌های نوپا"],
    governingStyle: "اصلاح‌طلب معتدل",
    successRate: "60%",
    keyDecisions: ["تقویت شفافیت", "اصلاحات اجتماعی", "بهبود روابط خارجی"]
  },

  // ===== رهبران آمریکایی =====
  {
    name: "جورج واشنگتن",
    title: "اولین رئیس‌جمهور آمریکا",
    era: "۱۷۸۹-۱۷۹۷",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    traits: { democratic: 4, principled: 4, moderate: 3, nationalist: 3 },
    description: "شما مانند واشنگتن، بنیان‌گذار دموکراسی و رهبر اصولی هستید.",
    politicalParty: "بی‌طرف",
    suitableCountries: ["آمریکا", "جمهوری‌های نوپا"],
    governingStyle: "دموکراتیک بنیان‌گذار",
    successRate: "90%",
    keyDecisions: ["استقلال آمریکا", "تأسیس دموکراسی", "جدایی قوا"]
  },
  {
    name: "آبراهام لینکلن",
    title: "شانزدهمین رئیس‌جمهور آمریکا",
    era: "۱۸۶۱-۱۸۶۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
    traits: { egalitarian: 4, principled: 4, unifying: 4, humanitarian: 3 },
    description: "شما مانند لینکلن، برای برابری، وحدت ملی و عدالت می‌جنگید.",
    politicalParty: "جمهوری‌خواه",
    suitableCountries: ["آمریکا", "کشورهای تقسیم‌شده"],
    governingStyle: "وحدت‌بخش انسان‌دوست",
    successRate: "85%",
    keyDecisions: ["لغو برده‌داری", "حفظ وحدت آمریکا", "جنگ داخلی"]
  },
  {
    name: "فرانکلین روزولت",
    title: "سی و دومین رئیس‌جمهور آمریکا",
    era: "۱۹۳۳-۱۹۴۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/FDR_1944_Color_Portrait.jpg",
    traits: { progressive: 4, charismatic: 4, pragmatic: 3, welfare: 4 },
    description: "شما مانند روزولت، رهبر بحران‌ها و حامی رفاه اجتماعی هستید.",
    politicalParty: "دموکرات",
    suitableCountries: ["آمریکا", "کشورهای در بحران اقتصادی"],
    governingStyle: "پیشرو رفاه‌گرا",
    successRate: "90%",
    keyDecisions: ["نیو دیل", "رهبری در جنگ جهانی دوم", "اصلاحات اجتماعی"]
  },
  {
    name: "جان اف کندی",
    title: "سی و پنجمین رئیس‌جمهور آمریکا",
    era: "۱۹۶۱-۱۹۶۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
    traits: { charismatic: 4, modernist: 3, diplomatic: 3, progressive: 3 },
    description: "شما مانند کندی، جوان، کاریزماتیک و طرفدار پیشرفت هستید.",
    politicalParty: "دموکرات",
    suitableCountries: ["آمریکا", "دموکراسی‌های مدرن"],
    governingStyle: "کاریزماتیک مدرن",
    successRate: "75%",
    keyDecisions: ["برنامه فضایی", "حقوق مدنی", "بحران موشکی کوبا"]
  },
  {
    name: "رونالد ریگان",
    title: "چهلمین رئیس‌جمهور آمریکا",
    era: "۱۹۸۱-۱۹۸۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg",
    traits: { conservative: 4, capitalist: 4, charismatic: 3, militarist: 2 },
    description: "شما مانند ریگان، محافظه‌کار، طرفدار بازار آزاد و قدرت نظامی هستید.",
    politicalParty: "جمهوری‌خواه",
    suitableCountries: ["آمریکا", "کشورهای سرمایه‌داری"],
    governingStyle: "محافظه‌کار بازارگرا",
    successRate: "80%",
    keyDecisions: ["اقتصاد عرضه", "جنگ سرد", "کاهش مالیات"]
  },
  {
    name: "دونالد ترامپ",
    title: "چهل و پنجمین رئیس‌جمهور آمریکا",
    era: "۲۰۱۷-۲۰۲۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
    traits: { populist: 4, nationalist: 4, controversial: 3, businessman: 3 },
    description: "شما مانند ترامپ، پوپولیست، ملی‌گرا و تاجر هستید.",
    politicalParty: "جمهوری‌خواه",
    suitableCountries: ["آمریکا", "کشورهای پوپولیست"],
    governingStyle: "پوپولیستی تجاری",
    successRate: "60%",
    keyDecisions: ["آمریکا اول", "جنگ تجاری", "خروج از برجام"]
  },
  {
    name: "جو بایدن",
    title: "چهل و ششمین رئیس‌جمهور آمریکا",
    era: "۲۰۲۱-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
    traits: { moderate: 4, experienced: 4, diplomatic: 3, traditional: 3 },
    description: "شما مانند بایدن، با تجربه، معتدل و طرفدار دیپلماسی سنتی هستید.",
    politicalParty: "دموکرات",
    suitableCountries: ["آمریکا", "اتحادهای غربی"],
    governingStyle: "معتدل دیپلماتیک",
    successRate: "70%",
    keyDecisions: ["مقابله با کووید", "خروج از افغانستان", "تقویت ناتو"]
  },

  // ===== رهبران اروپایی =====
  {
    name: "ویل‌هلم دوم آلمان",
    title: "آخرین قیصر آلمان",
    era: "۱۸۸۸-۱۹۱۸",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg",
    traits: { militarist: 4, nationalist: 4, imperial: 4, authoritarian: 3 },
    description: "شما مانند قیصر ویلهلم، امپراتور جاه‌طلب و نظامی‌گرا هستید.",
    politicalParty: "امپراتوری آلمان",
    suitableCountries: ["آلمان امپراتوری", "قدرت‌های بزرگ"],
    governingStyle: "امپراتوری نظامی‌گرا",
    successRate: "50%",
    keyDecisions: ["جنگ جهانی اول", "دریاسالاری", "سیاست جهانی"]
  },
  {
    name: "آدولف هیتلر",
    title: "فوهرر آلمان نازی",
    era: "۱۹۳۳-۱۹۴۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hitler_portrait_crop.jpg",
    traits: { totalitarian: 4, nationalist: 4, militarist: 4, genocidal: 4 },
    description: "شما مانند هیتلر، رهبر توتالیتر و افراطی هستید. (تحلیل تاریخی)",
    politicalParty: "حزب نازی",
    suitableCountries: ["آلمان نازی", "رژیم‌های توتالیتر"],
    governingStyle: "توتالیتر فاشیستی",
    successRate: "10%",
    keyDecisions: ["جنگ جهانی دوم", "هولوکاست", "نابودی دموکراسی"]
  },
  {
    name: "وینستون چرچیل",
    title: "نخست‌وزیر بریتانیا",
    era: "۱۹۴۰-۱۹۴۵، ۱۹۵۱-۱۹۵۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Winston_Churchill_1941_photo_by_Yousuf_Karsh.jpg",
    traits: { leadership: 4, determined: 4, conservative: 3, imperial: 3 },
    description: "شما مانند چرچیل، رهبر قاطع و سخنور بزرگ در زمان بحران هستید.",
    politicalParty: "محافظه‌کار",
    suitableCountries: ["بریتانیا", "دموکراسی‌های غربی"],
    governingStyle: "رهبری بحران",
    successRate: "85%",
    keyDecisions: ["مقاومت در برابر نازی‌ها", "اتحاد با آمریکا", "دفاع از دموکراسی"]
  },
  {
    name: "شارل دوگل",
    title: "رئیس‌جمهور فرانسه",
    era: "۱۹۵۹-۱۹۶۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/De_Gaulle-OWI.jpg",
    traits: { nationalist: 4, independent: 4, charismatic: 3, conservative: 3 },
    description: "شما مانند دوگل، ملی‌گرای مستقل و رهبر کاریزماتیک هستید.",
    politicalParty: "گولیست",
    suitableCountries: ["فرانسه", "کشورهای مستقل اروپایی"],
    governingStyle: "ملی‌گرای مستقل",
    successRate: "80%",
    keyDecisions: ["مقاومت فرانسه", "خروج از ناتو", "استقلال هسته‌ای"]
  },
  {
    name: "مارگارت تاچر",
    title: "نخست‌وزیر بریتانیا",
    era: "۱۹۷۹-۱۹۹۰",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Margaret_Thatcher.png",
    traits: { conservative: 4, capitalist: 4, tough: 4, reformist: 3 },
    description: "شما مانند تاچر، محافظه‌کار سرسخت و اصلاح‌گر اقتصادی هستید.",
    politicalParty: "محافظه‌کار",
    suitableCountries: ["بریتانیا", "کشورهای سرمایه‌داری"],
    governingStyle: "محافظه‌کار اقتصادی",
    successRate: "75%",
    keyDecisions: ["خصوصی‌سازی", "مقابله با اتحادیه‌ها", "جنگ فالکلند"]
  },
  {
    name: "آنگلا مرکل",
    title: "صدراعظم آلمان",
    era: "۲۰۰۵-۲۰۲۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Angela_Merkel_2019_cropped.jpg",
    traits: { pragmatic: 4, moderate: 4, diplomatic: 3, stable: 4 },
    description: "شما مانند مرکل، رهبر عملگرا، معتدل و باثبات هستید.",
    politicalParty: "دموکرات مسیحی",
    suitableCountries: ["آلمان", "اتحادیه اروپا"],
    governingStyle: "عملگرای باثبات",
    successRate: "85%",
    keyDecisions: ["بحران یورو", "بحران پناهندگان", "رهبری اروپا"]
  },
  {
    name: "امانوئل مکرون",
    title: "رئیس‌جمهور فرانسه",
    era: "۲۰۱۷-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Emmanuel_Macron_in_July_2017.jpg",
    traits: { centrist: 4, modernist: 3, technocratic: 3, european: 4 },
    description: "شما مانند مکرون، سیاست‌مدار میانه‌رو و اروپایی هستید.",
    politicalParty: "جمهوری به پیش",
    suitableCountries: ["فرانسه", "اتحادیه اروپا"],
    governingStyle: "میانه‌رو اروپایی",
    successRate: "70%",
    keyDecisions: ["اصلاحات اقتصادی", "رهبری اروپایی", "مقابله با پوپولیسم"]
  },

  // ===== رهبران آسیایی =====
  {
    name: "مائو تسه‌دونگ",
    title: "رهبر جمهوری خلق چین",
    era: "۱۹۴۹-۱۹۷۶",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Mao_Zedong_portrait.jpg",
    traits: { revolutionary: 4, communist: 4, authoritarian: 4, transformative: 3 },
    description: "شما مانند مائو، انقلابی کمونیست و رهبر تحول‌گر هستید.",
    politicalParty: "حزب کمونیست چین",
    suitableCountries: ["چین", "کشورهای کمونیستی"],
    governingStyle: "انقلابی کمونیستی",
    successRate: "60%",
    keyDecisions: ["انقلاب چین", "جهش بزرگ", "انقلاب فرهنگی"]
  },
  {
    name: "دنگ شیائوپینگ",
    title: "رهبر چین",
    era: "۱۹۷۸-۱۹۹۲",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Deng_Xiaoping.jpg",
    traits: { pragmatic: 4, reformist: 4, economic: 4, strategic: 3 },
    description: "شما مانند دنگ، اصلاح‌گر عملگرا و توسعه‌دهنده اقتصادی هستید.",
    politicalParty: "حزب کمونیست چین",
    suitableCountries: ["چین", "کشورهای در حال توسعه"],
    governingStyle: "اصلاح‌گر اقتصادی",
    successRate: "90%",
    keyDecisions: ["اصلاحات اقتصادی", "باز کردن چین", "مدرن‌سازی"]
  },
  {
    name: "شی جین‌پینگ",
    title: "رئیس‌جمهور چین",
    era: "۲۰۱۳-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Xi_Jinping_2019.jpg",
    traits: { authoritarian: 4, nationalist: 4, ambitious: 4, centralized: 3 },
    description: "شما مانند شی جین‌پینگ، رهبر متمرکز و جاه‌طلب قدرت جهانی هستید.",
    politicalParty: "حزب کمونیست چین",
    suitableCountries: ["چین", "قدرت‌های بزرگ"],
    governingStyle: "اقتدارگرای متمرکز",
    successRate: "75%",
    keyDecisions: ["یک کمربند یک راه", "رقابت با آمریکا", "تمرکز قدرت"]
  },
  {
    name: "مهاتما گاندی",
    title: "رهبر استقلال هند",
    era: "۱۹۱۵-۱۹۴۸",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg",
    traits: { peaceful: 4, spiritual: 4, democratic: 4, principled: 4 },
    description: "شما مانند گاندی، رهبر صلح‌طلب و معنوی هستید.",
    politicalParty: "کنگره هند",
    suitableCountries: ["هند", "جنبش‌های صلح‌آمیز"],
    governingStyle: "رهبری صلح‌آمیز",
    successRate: "85%",
    keyDecisions: ["استقلال هند", "عدم خشونت", "عدالت اجتماعی"]
  },
  {
    name: "نهرو",
    title: "نخست‌وزیر هند",
    era: "۱۹۴۷-۱۹۶۴",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Nehru_photo.jpg",
    traits: { secular: 4, socialist: 3, democratic: 4, internationalist: 3 },
    description: "شما مانند نهرو، دموکرات سکولار و بین‌المللی‌گرا هستید.",
    politicalParty: "کنگره هند",
    suitableCountries: ["هند", "کشورهای غیرمتعهد"],
    governingStyle: "دموکراتیک سکولار",
    successRate: "80%",
    keyDecisions: ["دموکراسی هند", "عدم تعهد", "توسعه صنعتی"]
  },
  {
    name: "لی کوان یو",
    title: "نخست‌وزیر سنگاپور",
    era: "۱۹۵۹-۱۹۹۰",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Lee_Kuan_Yew_-_World_Economic_Forum_Annual_Meeting_2012.jpg",
    traits: { technocratic: 4, authoritarian: 3, pragmatic: 4, developmental: 4 },
    description: "شما مانند لی کوان یو، توسعه‌گر تکنوکرات و عملگرا هستید.",
    politicalParty: "حزب عمل خلق",
    suitableCountries: ["سنگاپور", "شهردولت‌های توسعه‌یافته"],
    governingStyle: "تکنوکراتیک توسعه‌ای",
    successRate: "95%",
    keyDecisions: ["معجزه اقتصادی سنگاپور", "حکمرانی کارآمد", "چندفرهنگی"]
  },
  {
    name: "پارک چونگ‌هی",
    title: "رئیس‌جمهور کره جنوبی",
    era: "۱۹۶۳-۱۹۷۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Park_Chung-hee_1963's.png",
    traits: { authoritarian: 4, developmental: 4, nationalist: 3, militarist: 3 },
    description: "شما مانند پارک چونگ‌هی، رهبر توسعه‌گر اقتدارگرا هستید.",
    politicalParty: "حزب جمهوری دموکراتیک",
    suitableCountries: ["کره جنوبی", "کشورهای در حال توسعه"],
    governingStyle: "اقتدارگرای توسعه‌ای",
    successRate: "75%",
    keyDecisions: ["معجزه رود هان", "صنعتی‌سازی", "اقتدار نظامی"]
  },
  {
    name: "نارندرا مودی",
    title: "نخست‌وزیر هند",
    era: "۲۰۱۴-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Narendra_Modi_2021.jpg",
    traits: { nationalist: 4, populist: 3, developmental: 3, hindu: 3 },
    description: "شما مانند مودی، ملی‌گرای توسعه‌طلب و پوپولیست هستید.",
    politicalParty: "بهاراتیا جاناتا",
    suitableCountries: ["هند", "کشورهای پوپولیست"],
    governingStyle: "ملی‌گرای توسعه‌ای",
    successRate: "70%",
    keyDecisions: ["هند دیجیتال", "مودی‌نومیکس", "سیاست هندوتوا"]
  },

  // ===== رهبران آفریقایی =====
  {
    name: "نلسون ماندلا",
    title: "رئیس‌جمهور آفریقای جنوبی",
    era: "۱۹۹۴-۱۹۹۹",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
    traits: { egalitarian: 4, peaceful: 4, forgiving: 4, democratic: 4 },
    description: "شما مانند ماندلا، رهبر صلح، عدالت و آشتی هستید.",
    politicalParty: "کنگره ملی آفریقا",
    suitableCountries: ["آفریقای جنوبی", "کشورهای پسا تفکیک"],
    governingStyle: "صلح‌آمیز آشتی‌جو",
    successRate: "90%",
    keyDecisions: ["پایان آپارتاید", "آشتی ملی", "گذار دموکراتیک"]
  },
  {
    name: "کوامه نکروما",
    title: "اولین رئیس‌جمهور غنا",
    era: "۱۹۵۷-۱۹۶۶",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Kwame_Nkrumah_%28JFKWHP-AR6409-A%29.jpg",
    traits: { panAfricanist: 4, socialist: 3, antiColonial: 4, visionary: 3 },
    description: "شما مانند نکروما، رهبر ضد استعمار و پان‌آفریقانیست هستید.",
    politicalParty: "حزب کنوانسیون خلق",
    suitableCountries: ["غنا", "کشورهای آفریقایی"],
    governingStyle: "پان‌آفریقانیست",
    successRate: "70%",
    keyDecisions: ["استقلال غنا", "اتحاد آفریقا", "مبارزه با استعمار"]
  },

  // ===== رهبران روسی و شوروی =====
  {
    name: "ولادیمیر لنین",
    title: "رهبر انقلاب اکتبر",
    era: "۱۹۱۷-۱۹۲۴",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Lenin_CL.jpg",
    traits: { revolutionary: 4, communist: 4, ideological: 4, authoritarian: 3 },
    description: "شما مانند لنین، انقلابی کمونیست و ایدئولوگ هستید.",
    politicalParty: "بلشویک",
    suitableCountries: ["شوروی", "کشورهای انقلابی"],
    governingStyle: "انقلابی کمونیستی",
    successRate: "75%",
    keyDecisions: ["انقلاب اکتبر", "تأسیس شوروی", "کمونیسم جنگی"]
  },
  {
    name: "یوسف استالین",
    title: "رهبر اتحاد شوروی",
    era: "۱۹۲۴-۱۹۵۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Stalin_lg_zlx1.jpg",
    traits: { totalitarian: 4, industrialist: 4, paranoid: 4, militarist: 3 },
    description: "شما مانند استالین، رهبر توتالیتر و صنعتی‌ساز هستید.",
    politicalParty: "حزب کمونیست شوروی",
    suitableCountries: ["شوروی", "رژیم‌های توتالیتر"],
    governingStyle: "توتالیتر صنعتی",
    successRate: "50%",
    keyDecisions: ["صنعتی‌سازی شوروی", "جنگ جهانی دوم", "پاک‌سازی‌ها"]
  },
  {
    name: "میخائیل گورباچف",
    title: "آخرین رهبر شوروی",
    era: "۱۹۸۵-۱۹۹۱",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RIAN_archive_850809_General_Secretary_of_the_CPSU_CC_M._Gorbachev_%28crop%29.jpg",
    traits: { reformist: 4, peaceful: 4, democratic: 3, pragmatic: 3 },
    description: "شما مانند گورباچف، اصلاح‌گر صلح‌دوست و دموکراتیزه‌کننده هستید.",
    politicalParty: "حزب کمونیست شوروی",
    suitableCountries: ["شوروی", "کشورهای در حال گذار"],
    governingStyle: "اصلاح‌گر دموکراتیک",
    successRate: "70%",
    keyDecisions: ["گلاسنوست و پرسترویکا", "پایان جنگ سرد", "انحلال شوروی"]
  },
  {
    name: "ولادیمیر پوتین",
    title: "رئیس‌جمهور روسیه",
    era: "۲۰۰۰-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Vladimir_Putin_%282020-02-20%29.jpg",
    traits: { authoritarian: 4, nationalist: 4, strategic: 4, militarist: 3 },
    description: "شما مانند پوتین، رهبر اقتدارگرا و استراتژیست قدرت‌طلب هستید.",
    politicalParty: "روسیه متحد",
    suitableCountries: ["روسیه", "قدرت‌های اقتدارگرا"],
    governingStyle: "اقتدارگرای استراتژیک",
    successRate: "75%",
    keyDecisions: ["احیای قدرت روسیه", "ضمیمه کریمه", "مداخله در سوریه"]
  },

  // ===== رهبران آمریکای لاتین =====
  {
    name: "سیمون بولیوار",
    title: "رهبر استقلال آمریکای لاتین",
    era: "۱۸۱۳-۱۸۳۰",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Sim%C3%B3n_Bol%C3%ADvar_by_Antonio_Salas%2C_c._1825.jpg",
    traits: { liberator: 4, nationalist: 4, visionary: 4, democratic: 3 },
    description: "شما مانند بولیوار، رهایی‌بخش و وحدت‌گرای بزرگ هستید.",
    politicalParty: "—",
    suitableCountries: ["آمریکای لاتین", "جنبش‌های استقلال"],
    governingStyle: "آزادی‌بخش ملی",
    successRate: "85%",
    keyDecisions: ["استقلال کشورهای آمریکای لاتین", "گران کلمبیا", "آزادی‌بخشی قاره"]
  },
  {
    name: "فیدل کاسترو",
    title: "رهبر انقلاب کوبا",
    era: "۱۹۵۹-۲۰۰۸",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Fidel_Castro_1950s.jpg",
    traits: { revolutionary: 4, communist: 4, charismatic: 4, resistant: 4 },
    description: "شما مانند کاسترو، انقلابی کاریزماتیک و مقاوم هستید.",
    politicalParty: "حزب کمونیست کوبا",
    suitableCountries: ["کوبا", "کشورهای انقلابی"],
    governingStyle: "انقلابی کمونیستی",
    successRate: "70%",
    keyDecisions: ["انقلاب کوبا", "مقاومت در برابر آمریکا", "صادرات انقلاب"]
  },
  {
    name: "هوگو چاوز",
    title: "رئیس‌جمهور ونزوئلا",
    era: "۱۹۹۹-۲۰۱۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Hugo_Ch%C3%A1vez_%282008%29.jpg",
    traits: { populist: 4, socialist: 4, charismatic: 4, antiImperialist: 3 },
    description: "شما مانند چاوز، پوپولیست سوسیالیست و ضد امپریالیست هستید.",
    politicalParty: "حزب سوسیالیست متحد",
    suitableCountries: ["ونزوئلا", "کشورهای پوپولیست"],
    governingStyle: "پوپولیستی سوسیالیستی",
    successRate: "60%",
    keyDecisions: ["انقلاب بولیواری", "ملی‌کردن نفت", "مقابله با آمریکا"]
  },
  {
    name: "اوا پرون",
    title: "بانوی اول آرژانتین",
    era: "۱۹۴۶-۱۹۵۲",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Evita_color.jpg",
    traits: { populist: 4, feminist: 4, charismatic: 4, socialist: 3 },
    description: "شما مانند اویتا، رهبر پوپولیست و مدافع حقوق زنان هستید.",
    politicalParty: "پرونیست",
    suitableCountries: ["آرژانتین", "کشورهای پوپولیست"],
    governingStyle: "پوپولیستی فمینیستی",
    successRate: "80%",
    keyDecisions: ["حقوق زنان", "عدالت اجتماعی", "حمایت از کارگران"]
  },

  // ===== رهبران خاورمیانه =====
  {
    name: "مصطفی کمال آتاتورک",
    title: "بنیان‌گذار ترکیه مدرن",
    era: "۱۹۲۳-۱۹۳۸",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ataturk1930s.jpg",
    traits: { secular: 4, modernist: 4, nationalist: 4, reformist: 4 },
    description: "شما مانند آتاتورک، مدرن‌ساز سکولار و ملی‌گرا هستید.",
    politicalParty: "حزب خلق جمهوری",
    suitableCountries: ["ترکیه", "کشورهای مدرن‌ساز"],
    governingStyle: "سکولار مدرن‌ساز",
    successRate: "90%",
    keyDecisions: ["تأسیس جمهوری ترکیه", "سکولاریزاسیون", "مدرن‌سازی"]
  },
  {
    name: "رجب طیب اردوغان",
    title: "رئیس‌جمهور ترکیه",
    era: "۲۰۰۳-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Recep_Tayyip_Erdogan_2017.jpg",
    traits: { authoritarian: 4, islamic: 3, populist: 3, nationalist: 3 },
    description: "شما مانند اردوغان، رهبر محافظه‌کار مسلمان و پوپولیست هستید.",
    politicalParty: "عدالت و توسعه",
    suitableCountries: ["ترکیه", "کشورهای اسلامی"],
    governingStyle: "اسلام‌گرای پوپولیست",
    successRate: "70%",
    keyDecisions: ["تحول ترکیه", "سیاست خارجی فعال", "تمرکز قدرت"]
  },
  {
    name: "جمال عبدالناصر",
    title: "رئیس‌جمهور مصر",
    era: "۱۹۵۶-۱۹۷۰",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bundesarchiv_Bild_183-61849-0001%2C_Gamal_Abd_el_Nasser.jpg",
    traits: { panArab: 4, nationalist: 4, socialist: 3, charismatic: 4 },
    description: "شما مانند ناصر، رهبر پان‌عرب و ملی‌گرای کاریزماتیک هستید.",
    politicalParty: "اتحاد سوسیالیست عرب",
    suitableCountries: ["مصر", "جهان عرب"],
    governingStyle: "پان‌عربیستی",
    successRate: "75%",
    keyDecisions: ["ملی‌کردن کانال سوئز", "اتحاد عرب", "جنگ شش روزه"]
  },
  {
    name: "صدام حسین",
    title: "رئیس‌جمهور عراق",
    era: "۱۹۷۹-۲۰۰۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Saddam_Hussein_at_trial%2C_July_2004-edit1.JPEG",
    traits: { totalitarian: 4, militarist: 4, nationalist: 3, aggressive: 4 },
    description: "شما مانند صدام، رهبر اقتدارگرا و جنگ‌طلب هستید.",
    politicalParty: "حزب بعث",
    suitableCountries: ["عراق", "رژیم‌های اقتدارگرا"],
    governingStyle: "اقتدارگرای نظامی",
    successRate: "30%",
    keyDecisions: ["جنگ ایران و عراق", "حمله به کویت", "سرکوب مخالفان"]
  },
  {
    name: "بنیامین نتانیاهو",
    title: "نخست‌وزیر اسرائیل",
    era: "۱۹۹۶-۱۹۹۹، ۲۰۰۹-۲۰۲۱، ۲۰۲۲-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Benjamin_Netanyahu_2018.jpg",
    traits: { conservative: 4, nationalist: 4, security_focused: 4, pragmatic: 3 },
    description: "شما مانند نتانیاهو، محافظه‌کار امنیت‌محور و ملی‌گرا هستید.",
    politicalParty: "لیکود",
    suitableCountries: ["اسرائیل", "دموکراسی‌های امنیت‌محور"],
    governingStyle: "محافظه‌کار امنیت‌گرا",
    successRate: "70%",
    keyDecisions: ["امنیت اسرائیل", "مقابله با ایران", "توافق‌های ابراهام"]
  },

  // ===== رهبران معاصر =====
  {
    name: "ولودیمیر زلنسکی",
    title: "رئیس‌جمهور اوکراین",
    era: "۲۰۱۹-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Володимир_Зеленський_%282019-05-20%29.jpg",
    traits: { democratic: 4, courageous: 4, communicator: 4, resistant: 4 },
    description: "شما مانند زلنسکی، رهبر مقاوم و ارتباط‌گر ماهر در بحران هستید.",
    politicalParty: "خدمتگزار مردم",
    suitableCountries: ["اوکراین", "دموکراسی‌های در حال دفاع"],
    governingStyle: "رهبری بحران دموکراتیک",
    successRate: "80%",
    keyDecisions: ["دفاع از اوکراین", "بسیج بین‌المللی", "مقاومت در برابر روسیه"]
  },
  {
    name: "جاسیندا آردرن",
    title: "نخست‌وزیر نیوزیلند",
    era: "۲۰۱۷-۲۰۲۳",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Jacinda_Ardern_in_2018.jpg",
    traits: { progressive: 4, empathetic: 4, leader: 4, humanitarian: 4 },
    description: "شما مانند آردرن، رهبر همدل و پیشرو در عدالت اجتماعی هستید.",
    politicalParty: "کارگر",
    suitableCountries: ["نیوزیلند", "دموکراسی‌های پیشرو"],
    governingStyle: "پیشرو همدل",
    successRate: "85%",
    keyDecisions: ["مدیریت کووید", "حمایت از حقوق انسان", "رهبری همدلانه"]
  },
  {
    name: "مودی (هند)",
    title: "نخست‌وزیر هند",
    era: "۲۰۱۴-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Narendra_Modi_2021.jpg",
    traits: { populist: 4, nationalist: 4, developmental: 4, hindu: 3 },
    description: "شما مانند مودی، رهبر پوپولیست توسعه‌گرا و ملی‌گرا هستید.",
    politicalParty: "بهاراتیا جاناتا",
    suitableCountries: ["هند", "کشورهای پوپولیست توسعه‌یافته"],
    governingStyle: "پوپولیستی توسعه‌گرا",
    successRate: "75%",
    keyDecisions: ["هند دیجیتال", "اقتصاد ۵ تریلیون دلاری", "سیاست هندوتوا"]
  },
  {
    name: "لولا داسیلوا",
    title: "رئیس‌جمهور برزیل",
    era: "۲۰۰۳-۲۰۱۱، ۲۰۲۳-اکنون",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Lula_-_foto_oficial05012007.jpg",
    traits: { populist: 4, leftist: 4, charismatic: 4, egalitarian: 4 },
    description: "شما مانند لولا، رهبر چپ پوپولیست و مدافع برابری هستید.",
    politicalParty: "حزب کارگران",
    suitableCountries: ["برزیل", "کشورهای چپ لاتین"],
    governingStyle: "چپ پوپولیست",
    successRate: "75%",
    keyDecisions: ["کاهش فقر", "برنامه‌های اجتماعی", "تقویت اقتصاد"]
  },

  // ===== رهبران تاریخی جهان =====
  {
    name: "ناپلئون بناپارت",
    title: "امپراتور فرانسه",
    era: "۱۸۰۴-۱۸۱۴",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    traits: { militarist: 4, ambitious: 4, strategic: 4, reformist: 3 },
    description: "شما مانند ناپلئون، فرمانده نظامی نابغه و اصلاح‌گر جاه‌طلب هستید.",
    politicalParty: "امپراتوری فرانسه",
    suitableCountries: ["فرانسه", "امپراتوری‌های نظامی"],
    governingStyle: "امپراتوری نظامی",
    successRate: "70%",
    keyDecisions: ["قانون ناپلئون", "فتوحات اروپا", "اصلاحات اجتماعی"]
  },
  {
    name: "آلکساندر مقدونی",
    title: "پادشاه مقدونیه",
    era: "۳۳۶-۳۲۳ ق.م",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Alexander_the_Great_mosaic.jpg",
    traits: { conqueror: 4, visionary: 4, ambitious: 4, cultural: 3 },
    description: "شما مانند اسکندر، فاتح بزرگ و آمیزه‌دهنده فرهنگ‌ها هستید.",
    politicalParty: "—",
    suitableCountries: ["مقدونیه باستان", "امپراتوری‌های باستانی"],
    governingStyle: "فتح‌گرای فرهنگی",
    successRate: "85%",
    keyDecisions: ["فتح امپراتوری فارس", "گسترش فرهنگ یونانی", "آمیختگی فرهنگی"]
  },
  {
    name: "یولیوس سزار",
    title: "دیکتاتور روم",
    era: "۴۹-۴۴ ق.م",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/EO_1997_217_Caesar.jpg",
    traits: { ambitious: 4, strategic: 4, charismatic: 4, reformist: 3 },
    description: "شما مانند سزار، سیاست‌مدار جاه‌طلب و فرمانده کاریزماتیک هستید.",
    politicalParty: "پوپولار",
    suitableCountries: ["روم باستان", "جمهوری‌های قدرتمند"],
    governingStyle: "دیکتاتوری کاریزماتیک",
    successRate: "75%",
    keyDecisions: ["فتح گال", "عبور از رود رویکون", "اصلاحات رومی"]
  },
  {
    name: "اکبر شاه",
    title: "پادشاه مغولی هند",
    era: "۱۵۵۶-۱۶۰۵",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Akbar_Shah.jpg",
    traits: { tolerant: 4, administrative: 4, cultural: 4, strategic: 3 },
    description: "شما مانند اکبر، پادشاه متسامح و مدیر ماهر امپراتوری هستید.",
    politicalParty: "—",
    suitableCountries: ["هند مغولی", "امپراتوری‌های چندفرهنگی"],
    governingStyle: "پادشاهی متسامح",
    successRate: "90%",
    keyDecisions: ["دین الهی", "سیاست تسامح", "اتحاد هند"]
  },
  {
    name: "سوکارنو",
    title: "اولین رئیس‌جمهور اندونزی",
    era: "۱۹۴۵-۱۹۶۷",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/President_Sukarno.jpg",
    traits: { antiColonial: 4, charismatic: 4, nationalist: 4, nonAligned: 3 },
    description: "شما مانند سوکارنو، رهبر ضد استعمار و بنیان‌گذار غیرمتعهدی هستید.",
    politicalParty: "ملی اندونزی",
    suitableCountries: ["اندونزی", "کشورهای غیرمتعهد"],
    governingStyle: "ملی‌گرای ضد استعمار",
    successRate: "70%",
    keyDecisions: ["استقلال اندونزی", "جنبش غیرمتعهد", "پان‌کاسیلا"]
  }
];

let currentQuestion = 0;
let userTraits = {};
const userAnswers = [];

function showQuestion() {
  const container = document.getElementById('questionContainer');
  container.innerHTML = "";

  const q = questions[currentQuestion];

  const questionNumber = document.createElement('div');
  questionNumber.className = "question-number";
  questionNumber.innerHTML = `سوال ${currentQuestion + 1} از ${questions.length}`;
  container.appendChild(questionNumber);

  const qEl = document.createElement('div');
  qEl.className = "question";
  qEl.innerHTML = q.question;
  container.appendChild(qEl);

  const opts = document.createElement('div');
  opts.className = "options";

  q.options.forEach((o, i) => {
    const btn = document.createElement('div');
    btn.className = "option";
    if (userAnswers[currentQuestion] === i) {
      btn.classList.add('selected');
    }
    btn.innerHTML = o.text;
    btn.onclick = () => { selectOption(i); }
    opts.appendChild(btn);
  });

  container.appendChild(opts);
  updateProgress();
}

function recalculateUserTraits() {
  // بازسازی userTraits از ابتدا بر اساس userAnswers
  userTraits = {};
  userAnswers.forEach((ansIndex, qIndex) => {
    if (ansIndex === undefined) return;
    const opt = questions[qIndex].options[ansIndex];
    for (const key in opt.traits) {
      userTraits[key] = (userTraits[key] || 0) + opt.traits[key];
    }
  });
}

function selectOption(index) {
  // ثبت پاسخ کاربر
  userAnswers[currentQuestion] = index;

  // بروزرسانی انتخاب در UI
  const options = document.querySelectorAll('.option');
  options.forEach(o => o.classList.remove('selected'));
  if (options[index]) options[index].classList.add('selected');

  // بازسازی امتیازات از ابتدا تا کنون تا از انباشت اشتباه جلوگیری شود
  recalculateUserTraits();
}

function nextQuestion() {
  if (userAnswers[currentQuestion] === undefined) {
    Swal.fire({
      icon: "error",
      title: "مشکلی به وجود امده است.",
      text: "حتما بایستی یک گزینه را انتخاب کرده باشید.",
      confirmButtonText: 'باشه'
    });
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    updateNavButtons();
  } else {
    showResult();
    
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    updateNavButtons();
  }
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (currentQuestion === 0) {
    prevBtn.style.visibility = 'hidden';
  } else {
    prevBtn.style.visibility = 'visible';
  }

  if (currentQuestion === questions.length - 1) {
    nextBtn.innerHTML = "مشاهده نتیجه →";
  } else {
    nextBtn.innerHTML = "بعدی →";
  }
}

function updateProgress() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const progressPercent = document.getElementById('progressPercent');

  const progress = ((currentQuestion + 1) / questions.length * 100);
  progressBar.style.width = progress + "%";
  progressText.innerHTML = `سوال ${currentQuestion + 1} از ${questions.length}`;
  progressPercent.innerHTML = Math.round(progress) + "%";
}

// تابع محاسبه شباهت: از شباهت کسینوسی بین بردار ویژگی‌های کاربر و رهبر استفاده می‌کنیم.
function cosineSimilarity(vecA, vecB) {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  const keys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  keys.forEach(k => {
    const a = vecA[k] || 0;
    const b = vecB[k] || 0;
    dot += a * b;
    normA += a * a;
    normB += b * b;
  });
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function showResult() {
  document.getElementById('questionContainer').style.display = 'none';
  document.querySelector('.controls').style.display = 'none';
  document.querySelector('.progress-container').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';

  // اطمینان از اینکه userTraits بازمحاسبه شده است
  recalculateUserTraits();

  // محاسبه بهترین تطابق بر اساس کسینوس شباهت
  let bestMatch = null;
  let bestScore = -1;

  leaders.forEach(leader => {
    // برای هر رهبر، بردار آنها را نگه می‌داریم (مقادیر ممکن است بیشتر از 3 باشد چون از برخی مقادیر 4 استفاده شده)
    const leaderVec = leader.traits || {};
    const score = cosineSimilarity(userTraits, leaderVec); // در بازه [0,1]
    if (score > bestScore) {
      bestScore = score;
      bestMatch = { ...leader, rawScore: score };
    }
  });

  if (bestMatch) {
    const percentage = Math.round((bestMatch.rawScore || 0) * 100);
    document.getElementById('leaderImage').src = bestMatch.image;
    document.getElementById('leaderName').innerHTML = bestMatch.name;
    document.getElementById('leaderTitle').innerHTML = bestMatch.title;
    document.getElementById('leaderEra').innerHTML = bestMatch.era;
    document.getElementById('matchPercentage').innerHTML = percentage + "%";
    document.getElementById('leaderDescription').innerHTML = bestMatch.description;

    // نمایش اطلاعات اضافی
    const additionalInfoDiv = document.getElementById('additionalInfo');
    additionalInfoDiv.innerHTML = `
          <div class="info-card">
            <h3>حزب سیاسی</h3>
            <p>${bestMatch.politicalParty || '—'}</p>
          </div>
          <div class="info-card">
            <h3>کشورهای مناسب برای رهبری</h3>
            <p>${(bestMatch.suitableCountries || []).join("، ")}</p>
          </div>
          <div class="info-card">
            <h3>سبک حکومتداری</h3>
            <p>${bestMatch.governingStyle || '—'}</p>
          </div>
          <div class="info-card">
            <h3>نرخ موفقیت (به‌صورت تقریبی)</h3>
            <p>${bestMatch.successRate || '—'}</p>
          </div>
        `;

    const traitsDiv = document.getElementById('traits');
    traitsDiv.innerHTML = "";

    // برای نمایش ویژگی‌ها: ۶ ویژگی برتر کاربر نسبت به رهبر (بر اساس مقدار رهبر ضربدر شباهت نسبی)
    // اما برای سادگی: نمایش 6 ویژگی برتر رهبر
    const topTraits = Object.entries(bestMatch.traits || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);

    for (const [key, value] of topTraits) {
      const traitElement = document.createElement('div');
      traitElement.className = "trait";

      const traitNames = {
        democratic: "دموکراتیک",
        liberal: "لیبرال",
        authoritarian: "اقتدارگرا",
        conservative: "محافظه‌کار",
        moderate: "میانه‌رو",
        pragmatic: "عملگرا",
        capitalist: "سرمایه‌دار",
        socialist: "سوسیالیست",
        progressive: "پیشرو",
        diplomatic: "دیپلماتیک",
        aggressive: "تهاجمی",
        stubborn: "سرسخت",
        revolutionary: "انقلابی",
        nationalist: "ملی‌گرا",
        militarist: "نظامی‌گرا",
        ideological: "ایدئولوژیک",
        populist: "پوپولیست",
        peaceful: "صلح‌طلب",
        tolerant: "مداراگر",
        strategic: "استراتژیک",
        determined: "مصمم",
        resilient: "انعطاف‌پذیر",
        visionary: "دوراندیش",
        humane: "انسان‌دوست",
        ethical: "اخلاق‌مدار",
        innovative: "نوآور",
        balanced: "متوازن",
        utilitarian: "فایده‌گرا",
        traditional: "سنتی",
        adaptive: "سازگار",
        principled: "اصول‌گرا",
        charismatic: "کاریزماتیک",
        enlightened: "روشنفکر",
        reformist: "اصلاح‌طلب",
        collaborative: "مشارکتی",
        individualist: "فردگرا",
        collectivist: "جمع‌گرا",
        egalitarian: "برابری‌خواه",
        realist: "واقع‌گرا",
        expansionist: "توسعه‌طلب",
        spiritual: "معنوی",
        cultural: "فرهنگی",
        focused: "متمرکز",
        intolerant: "عدم مدارا",
        radical: "رادیکال",
        rational: "عقلانی",
        cooperative: "همکار",
        defensive: "دفاعی",
        ambitious: "جاه‌طلب",
        humble: "فروتن",
        trusting: "مطمئن",
        selective: "گزینشی",
        delegative: "واگذارکننده",
        transparent: "شفاف",
        propagandist: "تبلیغاتی",
        unifier: "وحدت‌بخش",
        cosmopolitan: "جهان‌وطن",
        modernist: "مدرنیست",
        respectful: "محترم",
        honest: "صادق",
        stable: "پایدار",
        cautious: "محتاط",
        independent: "مستقل",
        humanist: "انسان‌گرا",
        technocratic: "تکنوکرات",
        strategic: "استراتژیک",
        isolationist: "انزواگرایانه",
        protectionist: "حمایت‌گرا"
      };

      const displayName = traitNames[key] || key;
      // مقدار نمایش بر اساس مقیاس رهبر (که ممکن است تا 4 باشد)
      const scaled = Math.min(value, 4);
      const percent = Math.round((scaled / 4) * 100);

      traitElement.innerHTML = `
            <h3>${displayName}</h3>
            <div>سطح: ${value}</div>
            <div class="trait-value">
              <div class="trait-fill" style="width: ${percent}%"></div>
            </div>
          `;

      traitsDiv.appendChild(traitElement);
    }
  }
}

function restartTest() {
  currentQuestion = 0;
  userTraits = {};
  userAnswers.length = 0;

  document.getElementById('resultContainer').style.display = 'none';
  document.getElementById('questionContainer').style.display = 'block';
  document.querySelector('.controls').style.display = 'flex';
  document.querySelector('.progress-container').style.display = 'block';

  showQuestion();
  updateNavButtons();
}

function shareResult() {
  const leaderName = document.getElementById('leaderName').innerText;
  const matchPercentage = document.getElementById('matchPercentage').innerText;
  const text = `من در تست شخصیت سیاسی شبیه ${leaderName} هستم! میزان تطابق: ${matchPercentage}`;

  navigator.clipboard.writeText(text).then(() => {
    Swal.fire({
      icon: "success",
      title: "نتیجه در حافظه کپی شد!",
      confirmButtonText: 'باشه'
    });
  }).catch(err => {
    Swal.fire({
      icon: "error",
      title: "مشکلی در عملیات بوجود امده است",
      confirmButtonText: 'باشه'
    }, err);
  });
}

function shareOnTwitter() {
  const leaderName = document.getElementById('leaderName').innerText;
  const matchPercentage = document.getElementById('matchPercentage').innerText;
  const text = `من در تست شخصیت سیاسی شبیه ${leaderName} هستم! میزان تطابق: ${matchPercentage}`;

  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
}

// شروع تست
showQuestion();
updateNavButtons();