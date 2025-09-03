const questions = [
  {
    question: "دیدگاه شما در مورد قدرت و رهبری چیست؟",
    options: [
      { text: "قدرت باید در دست مردم باشد و از طریق انتخابات منتقل شود", traits: { democratic: 3, liberal: 2, populist: 1 } },
      { text: "قدرت باید در دست یک رهبر قوی و با تجربه باشد", traits: { authoritarian: 3, conservative: 2, nationalist: 1 } },
      { text: "قدرت باید بین نهادهای مختلف تقسیم شود", traits: { moderate: 3, democratic: 1, balanced: 2 } },
      { text: "مهم نیست چه کسی قدرت دارد، مهم نتیجه‌کارش است", traits: { pragmatic: 3, moderate: 1, utilitarian: 2 } }
    ]
  },
  {
    question: "نظر شما در مورد اقتصاد و توزیع ثروت چیست؟",
    options: [
      { text: "بازار آزاد و رقابت بهترین راه توسعه است", traits: { capitalist: 3, liberal: 2, individualist: 1 } },
      { text: "دولت باید در اقتصاد نقش قوی داشته باشد", traits: { socialist: 3, authoritarian: 1, collectivist: 2 } },
      { text: "ترکیبی از بازار آزاد و نظارت دولتی", traits: { moderate: 3, pragmatic: 2, balanced: 2 } },
      { text: "ثروت باید به صورت عادلانه توزیع شود", traits: { socialist: 2, progressive: 2, egalitarian: 3 } }
    ]
  },
  {
    question: "در برابر مخالفان و منتقدان چه رفتاری خواهید داشت؟",
    options: [
      { text: "با آنها گفتگو می‌کنم و سعی در متقاعدشان دارم", traits: { diplomatic: 3, democratic: 2, tolerant: 2 } },
      { text: "آنها را سرکوب می‌کنم چون مانع پیشرفت هستند", traits: { authoritarian: 3, aggressive: 2, intolerant: 3 } },
      { text: "آنها را نادیده می‌گیرم و کارم را ادامه می‌دهم", traits: { stubborn: 2, conservative: 1, focused: 2 } },
      { text: "از انتقادات سازنده استفاده می‌کنم", traits: { progressive: 2, moderate: 2, pragmatic: 2 } }
    ]
  },
  {
    question: "نگرش شما نسبت به تغییرات اجتماعی چیست؟",
    options: [
      { text: "تغییرات باید آرام و تدریجی باشد", traits: { conservative: 3, moderate: 1, cautious: 2 } },
      { text: "انقلاب سریع بهتر از اصلاحات کند است", traits: { revolutionary: 3, aggressive: 2, radical: 3 } },
      { text: "تغییرات باید بر اساس علم و منطق باشد", traits: { progressive: 3, pragmatic: 2, rational: 3 } },
      { text: "هر تغییری که به نفع ملت باشد را قبول دارم", traits: { nationalist: 2, pragmatic: 2, utilitarian: 2 } }
    ]
  },
  {
    question: "در مورد روابط بین‌الملل چه استراتژی دارید؟",
    options: [
      { text: "صلح و همکاری با همه کشورها", traits: { diplomatic: 3, peaceful: 2, cooperative: 2 } },
      { text: "قدرت نظامی قوی برای حفظ امنیت", traits: { militarist: 3, conservative: 2, nationalist: 2 } },
      { text: "اول منافع ملی، بعد روابط دوستانه", traits: { nationalist: 3, pragmatic: 2, realist: 3 } },
      { text: "پیشبرد ایدئولوژی خودم در سطح جهان", traits: { ideological: 3, aggressive: 1, expansionist: 2 } }
    ]
  },
  {
    question: "مهم‌ترین اولویت شما به عنوان رهبر چه خواهد بود؟",
    options: [
      { text: "رفاه و خوشبختی مردم", traits: { populist: 3, progressive: 2, humanitarian: 3 } },
      { text: "قدرت و عظمت کشور", traits: { nationalist: 3, authoritarian: 1, militarist: 2 } },
      { text: "حفظ ثبات و نظم", traits: { conservative: 3, moderate: 2, stable: 3 } },
      { text: "پیشرفت علم و تکنولوژی", traits: { progressive: 3, pragmatic: 2, innovative: 3 } }
    ]
  },
  // جدید: سوال 7
  {
    question: "شیوه تصمیم‌گیری شما چگونه است؟",
    options: [
      { text: "تصمیم‌ها با مشورت و رای‌گیری گرفته شود", traits: { democratic: 3, collaborative: 2, transparent: 2 } },
      { text: "تصمیم‌گیری سریع و فرماندهی‌شده لازم است", traits: { decisive: 3, authoritarian: 2, strategic: 2 } },
      { text: "تحلیل داده و مشورت خبرگان", traits: { pragmatic: 3, technocratic: 2, rational: 2 } },
      { text: "بنیادهای ایدئولوژیک راهنمای تصمیم‌ها هستند", traits: { ideological: 3, principled: 2, traditional: 1 } }
    ]
  },
  // سوال 8
  {
    question: "نگاه شما به آزادی بیان چیست؟",
    options: [
      { text: "آزادی بیان باید گسترده باشد حتی اگر ناراحت‌کننده باشد", traits: { liberal: 3, tolerant: 2, individualist: 2 } },
      { text: "آزادی بیان مهم است اما باید محدودیت‌هایی برای امنیت وجود داشته باشد", traits: { balanced: 3, pragmatic: 2, cautious: 1 } },
      { text: "آزادی بیان باید کنترل شود تا نظم حفظ شود", traits: { authoritarian: 3, propagandist: 2, intolerant: 1 } },
      { text: "آزادی‌ای که به پیشرفت ملت کمک کند را تقویت می‌کنم", traits: { nationalist: 2, utilitarian: 2, progressive: 1 } }
    ]
  },
  // سوال 9
  {
    question: "رویکرد شما به دین و مذهب در سیاست چیست؟",
    options: [
      { text: "سیاست باید جدا از مذهب باشد", traits: { secular: 3, liberal: 2, modernist: 2 } },
      { text: "مذهب راهنمای ارزش‌ها و سیاست‌ها باشد", traits: { spiritual: 3, traditional: 2, principled: 2 } },
      { text: "ترکیبی منطقی از هر دو برای ثبات جامعه", traits: { balanced: 3, pragmatic: 2, respectful: 1 } },
      { text: "از مذهب برای تقویت انسجام ملی استفاده می‌کنم", traits: { nationalist: 2, cultural: 2, unifier: 2 } }
    ]
  },
  // سوال 10
  {
    question: "اقتصاد بین‌المللی و تجارت چه نقشی دارد؟",
    options: [
      { text: "بازار جهانی برای رشد ضروری است", traits: { capitalist: 3, cooperative: 2, internationalist: 2 } },
      { text: "خودکفایی اقتصادی باید اولویت باشد", traits: { protectionist: 3, nationalist: 2, defensive: 2 } },
      { text: "توازن بین تجارت آزاد و حمایت از صنایع داخلی", traits: { moderate: 3, pragmatic: 2, balanced: 2 } },
      { text: "اقتصاد باید ابزار تقویت سیاست داخلی و خارجی باشد", traits: { strategic: 3, realist: 2, expansionist: 1 } }
    ]
  },
  // سوال 11
  {
    question: "رفتار شما در بحران‌های داخلی چگونه است؟",
    options: [
      { text: "شفافیت، همدلی و کمک‌رسانی اولویت دارد", traits: { transparent: 3, humane: 2, collaborative: 2 } },
      { text: "تحکم و نظم برای بازگرداندن اوضاع لازم است", traits: { authoritarian: 3, decisive: 2, stable: 2 } },
      { text: "ترکیبی از اقدام فوری و برنامه‌ریزی بلندمدت", traits: { pragmatic: 3, strategic: 2, resilient: 2 } },
      { text: "فرصت برای تغییرات ساختاری در بحران‌ها وجود دارد", traits: { revolutionary: 2, reformist: 3, radical: 2 } }
    ]
  },
  // سوال 12
  {
    question: "نقش رسانه‌ها و اطلاع‌رسانی در حکومت چگونه است؟",
    options: [
      { text: "رسانه مستقل باید حفظ شود", traits: { transparent: 3, liberal: 2, democratic: 2 } },
      { text: "رسانه باید هماهنگ با اهداف ملی باشد", traits: { propagandist: 3, nationalist: 2, controlled: 1 } },
      { text: "آموزش و اطلاع‌رسانی عمومی برای پیشرفت مهم است", traits: { educational: 3, humane: 2, progressive: 2 } },
      { text: "رسانه‌ها ابزار سیاست خارجی و داخلی هستند", traits: { strategic: 3, utilitarian: 2, selective: 1 } }
    ]
  },
  // سوال 13
  {
    question: "نگاه شما به حقوق اقلیت‌ها چیست؟",
    options: [
      { text: "حقوق اقلیت‌ها باید تقویت و محافظت شود", traits: { egalitarian: 3, democratic: 2, tolerant: 2 } },
      { text: "اولویت با امنیت و وحدت ملی است", traits: { nationalist: 3, cautious: 2, defensive: 1 } },
      { text: "حقوق اختصاصی در چارچوب منافع ملی قابل‌سازش است", traits: { pragmatic: 3, balanced: 2, selective: 1 } },
      { text: "همه شهروندان برابرند و باید برخورد مساوی شود", traits: { humanist: 3, principled: 2, modernist: 2 } }
    ]
  },
  // سوال 14
  {
    question: "چقدر تمایل به ریسک‌پذیری در سیاست دارید؟",
    options: [
      { text: "ریسک‌پذیری بالا برای دستیابی به تغییرات سریع", traits: { aggressive: 3, revolutionary: 2, ambitious: 2 } },
      { text: "ریسک محدود و محاسبه‌شده", traits: { cautious: 3, pragmatic: 2, calculated: 2 } },
      { text: "ریسک فقط وقتی منافع بزرگ دارد توجیه‌پذیر است", traits: { utilitarian: 3, strategic: 2, focused: 2 } },
      { text: "از ثبات و حفاظت از دستاوردها استقبال می‌کنم", traits: { conservative: 3, stable: 2, protective: 2 } }
    ]
  },
  // سوال 15
  {
    question: "چگونه می‌خواهید میراث خود را بسازید؟",
    options: [
      { text: "با قانون‌گذاری برای حقوق و عدالت اجتماعی", traits: { reformist: 3, egalitarian: 2, principled: 2 } },
      { text: "با قدرت و برتری نظامی/اقتصادی کشور", traits: { nationalist: 3, militarist: 2, ambitious: 2 } },
      { text: "با پیشرفت علمی و توسعه فناوری", traits: { innovative: 3, visionary: 2, technocratic: 2 } },
      { text: "با آشتی اجتماعی و تقویت سرمایه اجتماعی", traits: { diplomatic: 3, humane: 2, unifier: 2 } }
    ]
  }
];

const leaders = [
  {
    name: "کوروش بزرگ",
    title: "بنیانگذار امپراتوری هخامنشی",
    era: "۵۷۹-۵۲۹ پیش از میلاد",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cyrus_II_-_illustration.jpg/800px-Cyrus_II_-_illustration.jpg",
    traits: { tolerant: 3, diplomatic: 3, visionary: 3, strategic: 3, pragmatic: 2, progressive: 2, humane: 3, nationalist: 2, militarist: 2, authoritarian: 1, conservative: 2, moderate: 2 },
    description: "شما مانند کوروش بزرگ، رهبری مداراگر و بلندنظر هستید که به حقوق مردم و فرهنگ‌های مختلف احترام می‌گذارید. شما استراتژیست بزرگی هستید که می‌توانید تنوع فرهنگی را مدیریت کنید.",
    politicalParty: "سلطنت",
    suitableCountries: ["ایران", "هند", "مالزی", "امارات متحده عربی"],
    governingStyle: "سلطنتی متمرکز با احترام به فرهنگ‌های محلی",
    successRate: "85%",
    keyDecisions: ["ایجاد منشور حقوق بشر", "احترام به ادیان مختلف", "توسعه نظامی و اقتصادی"]
  },
  {
    name: "نلسون ماندلا",
    title: "رهبر صلح‌جو و دموکراسی‌خواه",
    era: "۱۹۱۸-۲۰۱۳ میلادی",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28edit%29.jpg/800px-Nelson_Mandela-2008_%28edit%29.jpg",
    traits: { democratic: 3, peaceful: 3, diplomatic: 3, progressive: 2, tolerant: 3, humane: 3, resilient: 3, collaborative: 3, egalitarian: 3, liberal: 2 },
    description: "شما مانند ماندلا، رهبری صلح‌جو و مردم‌محور هستید که مصالحه و آشتی را بر انتقام ترجیح می‌دهید. شما برای دموکراسی و حقوق بشر ارزش بسیاری قائلید.",
    politicalParty: "کنگره ملی آفریقا",
    suitableCountries: ["آفریقای جنوبی", "کانادا", "نروژ", "نیوزیلند"],
    governingStyle: "دموکراسی چندنژادی مبتنی بر آشتی ملی",
    successRate: "92%",
    keyDecisions: ["پایان دادن به آپارتاید", "ایجاد کمیسیون حقیقت و آشتی", "تقویت دموکراسی"]
  },
  {
    name: "وینستون چرچیل",
    title: "رهبر جنگی و استراتژیست",
    era: "۱۸۷۴-۱۹۶۵ میلادی",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg",
    traits: { militarist: 3, conservative: 3, nationalist: 3, stubborn: 2, strategic: 3, decisive: 3, resilient: 3, authoritarian: 2, capitalist: 3, ideological: 2 },
    description: "شما مانند چرچیل، در مواقع حساس قاطع و مقاوم هستید. شما رهبری هستید که در شرایط سخت، شجاعت و اراده‌ای قوی نشان می‌دهید و می‌توانید ملت را در بحران‌ها هدایت کنید.",
    politicalParty: "حزب محافظه‌کار",
    suitableCountries: ["بریتانیا", "ایالات متحده آمریکا", "اسرائیل", "فرانسه"],
    governingStyle: "رهبری قاطع در زمان جنگ و بحران",
    successRate: "78%",
    keyDecisions: ["رهبری در جنگ جهانی دوم", "تشکیل اتحاد با متفقین", "سخنرانی‌های الهام‌بخش"]
  },
  // رهبران معاصر بیشتر
  {
    name: "کیم جونگ‌اون",
    title: "رهبر کره شمالی",
    era: "متعاصر",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kim_Jong-un_in_Pyongyang_2019_%28cropped%29.jpg",
    traits: { authoritarian: 4, nationalist: 3, militarist: 3, propagandist: 3, isolationist: 2 },
    description: "شما مانند کیم جونگ‌اون، مدیریتی متمرکز و اقتدارگرا دارید؛ امنیت و انسجام در مرکز سیاست‌ها قرار دارد.",
    politicalParty: "حزب کارگران کره",
    suitableCountries: ["کره شمالی"],
    governingStyle: "اقتدارگرایانه و متمرکز",
    successRate: "55%",
    keyDecisions: ["تمرکز قدرت", "تقویت ارتش", "سیاست‌های داخلی سخت‌گیرانه"]
  },
  {
    name: "شی جین‌پینگ",
    title: "رهبر جمهوری خلق چین",
    era: "متعاصر",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Xi_Jinping_2019.jpg",
    traits: { authoritarian: 4, pragmatic: 3, nationalist: 3, technocratic: 2, strategic: 3 },
    description: "شما مانند شی، ترکیبی از اقتدار و تکنوکراسی را به کار می‌برید؛ توسعه اقتصادی و کنترل سیاسی همزمان دنبال می‌شود.",
    politicalParty: "حزب کمونیست چین",
    suitableCountries: ["چین", "مناطق شرقی آسیا"],
    governingStyle: "اقتدار در هماهنگی با توسعه اقتصادی",
    successRate: "80%",
    keyDecisions: ["سیاست توسعه اقتصادی", "کنترل اجتماعی", "تمرکز قدرت"]
  },
  {
    name: "ولادیمیر پوتین",
    title: "رهبر روسیه",
    era: "متعاصر",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Vladimir_Putin_%282024%29.jpg",
    traits: { authoritarian: 4, nationalist: 3, strategic: 3, realist: 3, conservative: 2 },
    description: "شما مانند پوتین، رهبرانی هستید که روی امنیت ملی، نفوذ منطقه‌ای و سیاست‌های واقع‌گرایانه تأکید می‌کنید.",
    politicalParty: "مستقل / متحدان محافظه‌کار",
    suitableCountries: ["روسیه", "کشورهای همسایه"],
    governingStyle: "قدرت متمرکز با رویکرد واقع‌گرایانه",
    successRate: "70%",
    keyDecisions: ["تمرکز قدرت", "سیاست خارجی فعال", "تقویت نهادهای امنیتی"]
  },
  {
    name: "باراک اوباما",
    title: "ریاست‌جمهوری ایالات متحده",
    era: "متأخر معاصر",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
    traits: { liberal: 3, diplomatic: 3, progressive: 2, pragmatic: 3, collaborative: 2 },
    description: "شما مانند اوباما، به سیاست دیپلماتیک، گفتگوی بین‌المللی و اصلاحات تدریجی علاقه‌مندید.",
    politicalParty: "دموکرات",
    suitableCountries: ["ایالات متحده آمریکا", "کشورهای غربی"],
    governingStyle: "دموکراسی لیبرال با تمرکز بر دیپلماسی",
    successRate: "83%",
    keyDecisions: ["تقویت دیپلماسی", "سیاست‌های اصلاحی داخلی", "رویکرد چندجانبه"]
  },
  {
    name: "آنگلا مرکل",
    title: "صدراعظم پیشین آلمان",
    era: "متأخر معاصر",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Angela_Merkel_July_2010.jpg",
    traits: { pragmatic: 4, moderate: 3, diplomatic: 3, technocratic: 2, cautious: 2 },
    description: "شما مانند مرکل، مدیری میانه‌رو، واقع‌گرا و متکی بر کارشناسی هستید که ثبات و تدبیر را ارج می‌نهد.",
    politicalParty: "حزب دموکرات مسیحی",
    suitableCountries: ["آلمان", "کشورهای اروپایی"],
    governingStyle: "میانه‌رو و تکنوکراتیک",
    successRate: "88%",
    keyDecisions: ["ثبات اقتصادی", "رهبری اتحادیه اروپا", "مدیریت محتاط بحران‌ها"]
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
    alert("لطفاً یک گزینه انتخاب کنید");
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