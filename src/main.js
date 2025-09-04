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
  },]


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
    alert('نتیجه در حافظه کپی شد!');
  }).catch(err => {
    console.error('خطا در کپی کردن:', err);
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