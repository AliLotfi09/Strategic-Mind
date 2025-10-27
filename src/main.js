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
      {
        name: "کوروش بزرگ",
        title: "بنیان‌گذار امپراتوری هخامنشی",
        era: "۵۵۹-۵۳۰ ق.م",
        traits: { tolerant: 4, strategic: 4, diplomatic: 3, nationalist: 2, balanced: 3, peaceful: 3, egalitarian: 3 },
        description: "شما مانند کوروش، به تسامح، انسانیت و بنیان‌گذاری یک تمدن بزرگ باور دارید.",
        politicalParty: "—",
        suitableCountries: "ایران باستان، امپراتوری‌های چندفرهنگی",
        governingStyle: "پادشاهی عادل و گسترش‌طلب",
        successRate: "95%"
      },
      {
        name: "داریوش بزرگ",
        title: "شاهنشاه هخامنشی",
        era: "۵۲۲-۴۸۶ ق.م",
        traits: { strategic: 4, pragmatic: 4, balanced: 3, authoritarian: 3, nationalist: 2, modernist: 3 },
        description: "شما مانند داریوش، نظم، قانون و توسعه اداری را سرلوحه دارید.",
        politicalParty: "—",
        suitableCountries: "ایران باستان، امپراتوری‌های بزرگ",
        governingStyle: "پادشاهی متمرکز",
        successRate: "90%"
      },
      {
        name: "نادرشاه افشار",
        title: "پادشاه ایران",
        era: "۱۷۳۶-۱۷۴۷",
        traits: { militarist: 4, nationalist: 3, authoritarian: 3, strategic: 3, aggressive: 2 },
        description: "شما مانند نادرشاه، رهبر جنگجو و فتح‌طلب هستید.",
        politicalParty: "—",
        suitableCountries: "ایران، امپراتوری‌های جنگی",
        governingStyle: "نظامی‌گرای مقتدر",
        successRate: "70%"
      },
      {
        name: "امیرکبیر",
        title: "صدر اعظم ایران",
        era: "۱۸۴۸-۱۸۵۱",
        traits: { reformist: 4, nationalist: 3, modernist: 3, pragmatic: 3, balanced: 2 },
        description: "شما مانند امیرکبیر، اصلاحات، آموزش و پیشرفت ملی را دنبال می‌کنید.",
        politicalParty: "—",
        suitableCountries: "ایران، کشورهای در حال توسعه",
        governingStyle: "اصلاح‌گر ملی",
        successRate: "80%"
      },
      {
        name: "میرزا کوچک‌خان جنگلی",
        title: "رهبر جنبش جنگل",
        era: "۱۹۱۴-۱۹۲۱",
        traits: { nationalist: 4, resistant: 3, spiritual: 2, socialist: 2, independent: 3 },
        description: "شما مانند میرزا کوچک‌خان، رهبر انقلابی و ملی‌گرای عدالت‌خواه هستید.",
        politicalParty: "جنبش جنگل",
        suitableCountries: "ایران، جنبش‌های استقلال‌طلب",
        governingStyle: "انقلابی ملی‌گرا",
        successRate: "65%"
      },
      {
        name: "محمد مصدق",
        title: "نخست‌وزیر ایران",
        era: "۱۹۵۱-۱۹۵۳",
        traits: { democratic: 4, nationalist: 3, liberal: 3, independent: 4, diplomatic: 3 },
        description: "شما مانند مصدق، استقلال سیاسی و اقتصادی را با تکیه بر مردم‌سالاری دنبال می‌کنید.",
        politicalParty: "جبهه ملی",
        suitableCountries: "ایران، کشورهای ضد استعمار",
        governingStyle: "ملی‌گرای دموکراتیک",
        successRate: "70%"
      },
      {
        name: "رضا شاه پهلوی",
        title: "شاه ایران",
        era: "۱۹۲۵-۱۹۴۱",
        traits: { authoritarian: 4, nationalist: 4, modernist: 3, militarist: 2, pragmatic: 2 },
        description: "شما مانند رضا شاه، به تمرکز قدرت، نوسازی و اقتدار ملی اهمیت می‌دهید.",
        politicalParty: "پهلوی",
        suitableCountries: "ایران، ترکیه آتاتورک",
        governingStyle: "اقتدارگرای مدرن‌ساز",
        successRate: "65%"
      },
      {
        name: "محمدرضا شاه پهلوی",
        title: "آخرین شاه ایران",
        era: "۱۹۴۱-۱۹۷۹",
        traits: { modernist: 3, authoritarian: 3, nationalist: 3, capitalist: 2, dependent: 2 },
        description: "شما مانند محمدرضا شاه، به مدرنیزاسیون و اتحاد با غرب باور دارید.",
        politicalParty: "پهلوی",
        suitableCountries: "ایران، کشورهای متحد غرب",
        governingStyle: "سلطنتی مدرن",
        successRate: "60%"
      },
      {
        name: "روح‌الله خمینی",
        title: "رهبر انقلاب ایران",
        era: "۱۹۷۹-۱۹۸۹",
        traits: { spiritual: 4, theocratic: 4, nationalist: 3, authoritarian: 3, resistant: 3 },
        description: "شما مانند خمینی، سیاست را با ایدئولوژی و دین پیوند می‌زنید.",
        politicalParty: "جمهوری اسلامی",
        suitableCountries: "ایران، کشورهای اسلامی",
        governingStyle: "اسلام‌گرای انقلابی",
        successRate: "80%"
      },
      {
        name: "علی خامنه‌ای",
        title: "رهبر جمهوری اسلامی ایران",
        era: "۱۹۸۹-اکنون",
        traits: { spiritual: 3, nationalist: 3, authoritarian: 3, strategic: 3, resistant: 3 },
        description: "شما مانند خامنه‌ای، بر ثبات سیاسی، استقلال و ایدئولوژی تاکید دارید.",
        politicalParty: "جمهوری اسلامی",
        suitableCountries: "ایران، کشورهای اسلامی",
        governingStyle: "ایدئولوژیک-اقتدارگرا",
        successRate: "75%"
      },
      {
        name: "اکبر هاشمی رفسنجانی",
        title: "رئیس‌جمهور ایران",
        era: "۱۹۸۹-۱۹۹۷",
        traits: { pragmatic: 4, moderate: 3, capitalist: 2, nationalist: 2, balanced: 3 },
        description: "شما مانند رفسنجانی، عملگرایی و توسعه اقتصادی را در سیاست در اولویت دارید.",
        politicalParty: "کارگزاران سازندگی",
        suitableCountries: "ایران، کشورهای در حال توسعه",
        governingStyle: "عملگرای توسعه‌گرا",
        successRate: "70%"
      },
      {
        name: "سید محمد خاتمی",
        title: "رئیس‌جمهور ایران",
        era: "۱۹۹۷-۲۰۰۵",
        traits: { reformist: 4, liberal: 3, democratic: 3, moderate: 3, diplomatic: 3 },
        description: "شما مانند خاتمی، به اصلاحات، گفت‌وگوی تمدن‌ها و آزادی‌های مدنی باور دارید.",
        politicalParty: "اصلاح‌طلبان",
        suitableCountries: "ایران، دموکراسی‌های در حال گذار",
        governingStyle: "اصلاح‌طلب دموکرات",
        successRate: "65%"
      },
      {
        name: "محمود احمدی‌نژاد",
        title: "رئیس‌جمهور ایران",
        era: "۲۰۰۵-۲۰۱۳",
        traits: { populist: 4, nationalist: 3, confrontational: 3, authoritarian: 2 },
        description: "شما مانند احمدی‌نژاد، با گفتمان پوپولیستی و تقابل با غرب پیش می‌روید.",
        politicalParty: "اصولگرایان",
        suitableCountries: "ایران، ونزوئلا چاوز",
        governingStyle: "پوپولیستی-ملی‌گرایانه",
        successRate: "55%"
      },
      {
        name: "مسعود پزشکیان",
        title: "رئیس‌جمهور ایران",
        era: "۲۰۲۴-اکنون",
        traits: { reformist: 3, moderate: 3, democratic: 2, pragmatic: 3 },
        description: "شما مانند پزشکیان، به اعتدال، اصلاحات اجتماعی و گفت‌وگو باور دارید.",
        politicalParty: "اصلاح‌طلبان",
        suitableCountries: "ایران، دموکراسی‌های نوپا",
        governingStyle: "اصلاح‌طلب معتدل",
        successRate: "60%"
      },
      {
        name: "جورج واشنگتن",
        title: "اولین رئیس‌جمهور آمریکا",
        era: "۱۷۸۹-۱۷۹۷",
        traits: { democratic: 4, principled: 4, moderate: 3, nationalist: 3, balanced: 3 },
        description: "شما مانند واشنگتن، بنیان‌گذار دموکراسی و رهبر اصولی هستید.",
        politicalParty: "بی‌طرف",
        suitableCountries: "آمریکا، جمهوری‌های نوپا",
        governingStyle: "دموکراتیک بنیان‌گذار",
        successRate: "90%"
      },
      {
        name: "آبراهام لینکلن",
        title: "شانزدهمین رئیس‌جمهور آمریکا",
        era: "۱۸۶۱-۱۸۶۵",
        traits: { egalitarian: 4, principled: 4, democratic: 3, strategic: 3 },
        description: "شما مانند لینکلن، برای برابری، وحدت ملی و عدالت می‌جنگید.",
        politicalParty: "جمهوری‌خواه",
        suitableCountries: "آمریکا، کشورهای تقسیم‌شده",
        governingStyle: "وحدت‌بخش انسان‌دوست",
        successRate: "85%"
      },
      {
        name: "فرانکلین روزولت",
        title: "سی و دومین رئیس‌جمهور آمریکا",
        era: "۱۹۳۳-۱۹۴۵",
        traits: { pragmatic: 4, reformist: 4, democratic: 3, strategic: 4, socialist: 2 },
        description: "شما مانند روزولت، رهبر بحران‌ها و حامی رفاه اجتماعی هستید.",
        politicalParty: "دموکرات",
        suitableCountries: "آمریکا، کشورهای در بحران اقتصادی",
        governingStyle: "پیشرو رفاه‌گرا",
        successRate: "90%"
      },
      {
        name: "جان اف کندی",
        title: "سی و پنجمین رئیس‌جمهور آمریکا",
        era: "۱۹۶۱-۱۹۶۳",
        traits: { modernist: 3, diplomatic: 3, liberal: 3, strategic: 3 },
        description: "شما مانند کندی، جوان، کاریزماتیک و طرفدار پیشرفت هستید.",
        politicalParty: "دموکرات",
        suitableCountries: "آمریکا، دموکراسی‌های مدرن",
        governingStyle: "کاریزماتیک مدرن",
        successRate: "75%"
      },
      {
        name: "رونالد ریگان",
        title: "چهلمین رئیس‌جمهور آمریکا",
        era: "۱۹۸۱-۱۹۸۹",
        traits: { capitalist: 4, conservative: 4, militarist: 2, pragmatic: 3 },
        description: "شما مانند ریگان، محافظه‌کار، طرفدار بازار آزاد و قدرت نظامی هستید.",
        politicalParty: "جمهوری‌خواه",
        suitableCountries: "آمریکا، کشورهای سرمایه‌داری",
        governingStyle: "محافظه‌کار بازارگرا",
        successRate: "80%"
      },
      {
        name: "دونالد ترامپ",
        title: "چهل و پنجمین رئیس‌جمهور آمریکا",
        era: "۲۰۱۷-۲۰۲۱",
        traits: { populist: 4, nationalist: 4, capitalist: 3, confrontational: 3 },
        description: "شما مانند ترامپ، پوپولیست، ملی‌گرا و تاجر هستید.",
        politicalParty: "جمهوری‌خواه",
        suitableCountries: "آمریکا، کشورهای پوپولیست",
        governingStyle: "پوپولیستی تجاری",
        successRate: "60%"
      },
      {
        name: "جو بایدن",
        title: "چهل و ششمین رئیس‌جمهور آمریکا",
        era: "۲۰۲۱-اکنون",
        traits: { moderate: 4, diplomatic: 3, pragmatic: 3, democratic: 3 },
        description: "شما مانند بایدن، با تجربه، معتدل و طرفدار دیپلماسی سنتی هستید.",
        politicalParty: "دموکرات",
        suitableCountries: "آمریکا، اتحادهای غربی",
        governingStyle: "معتدل دیپلماتیک",
        successRate: "70%"
      },
      {
        name: "ویل‌هلم دوم آلمان",
        title: "آخرین قیصر آلمان",
        era: "۱۸۸۸-۱۹۱۸",
        traits: { militarist: 4, nationalist: 4, authoritarian: 3, aggressive: 3 },
        description: "شما مانند قیصر ویلهلم، امپراتور جاه‌طلب و نظامی‌گرا هستید.",
        politicalParty: "امپراتوری آلمان",
        suitableCountries: "آلمان امپراتوری، قدرت‌های بزرگ",
        governingStyle: "امپراتوری نظامی‌گرا",
        successRate: "50%"
      },
      {
        name: "آدولف هیتلر",
        title: "فوهرر آلمان نازی",
        era: "۱۹۳۳-۱۹۴۵",
        traits: { authoritarian: 4, nationalist: 4, militarist: 4, aggressive: 4 },
        description: "شما مانند هیتلر، رهبر توتالیتر و افراطی هستید. (تحلیل تاریخی)",
        politicalParty: "حزب نازی",
        suitableCountries: "آلمان نازی، رژیم‌های توتالیتر",
        governingStyle: "توتالیتر فاشیستی",
        successRate: "10%"
      },
      {
        name: "وینستون چرچیل",
        title: "نخست‌وزیر بریتانیا",
        era: "۱۹۴۰-۱۹۴۵، ۱۹۵۱-۱۹۵۵",
        traits: { strategic: 4, diplomatic: 3, nationalist: 3, militarist: 2, pragmatic: 3 },
        description: "شما مانند چرچیل، رهبر قاطع و سخنور بزرگ در زمان بحران هستید.",
        politicalParty: "محافظه‌کار",
        suitableCountries: "بریتانیا، دموکراسی‌های غربی",
        governingStyle: "رهبری بحران",
        successRate: "85%"
      },
      {
        name: "شارل دوگل",
        title: "رئیس‌جمهور فرانسه",
        era: "۱۹۵۹-۱۹۶۹",
        traits: { nationalist: 4, independent: 4, strategic: 3, conservative: 3 },
        description: "شما مانند دوگل، ملی‌گرای مستقل و رهبر کاریزماتیک هستید.",
        politicalParty: "گولیست",
        suitableCountries: "فرانسه، کشورهای مستقل اروپایی",
        governingStyle: "ملی‌گرای مستقل",
        successRate: "80%"
      },
      {
        name: "مارگارت تاچر",
        title: "نخست‌وزیر بریتانیا",
        era: "۱۹۷۹-۱۹۹۰",
        traits: { conservative: 4, capitalist: 4, authoritarian: 3, reformist: 3 },
        description: "شما مانند تاچر، محافظه‌کار سرسخت و اصلاح‌گر اقتصادی هستید.",
        politicalParty: "محافظه‌کار",
        suitableCountries: "بریتانیا، کشورهای سرمایه‌داری",
        governingStyle: "محافظه‌کار اقتصادی",
        successRate: "75%"
      },
      {
        name: "آنگلا مرکل",
        title: "صدراعظم آلمان",
        era: "۲۰۰۵-۲۰۲۱",
        traits: { pragmatic: 4, moderate: 4, diplomatic: 3, balanced: 4 },
        description: "شما مانند مرکل، رهبر عملگرا، معتدل و باثبات هستید.",
        politicalParty: "دموکرات مسیحی",
        suitableCountries: "آلمان، اتحادیه اروپا",
        governingStyle: "عملگرای باثبات",
        successRate: "85%"
      },
      {
        name: "امانوئل مکرون",
        title: "رئیس‌جمهور فرانسه",
        era: "۲۰۱۷-اکنون",
        traits: { moderate: 4, modernist: 3, technocratic: 3, liberal: 3 },
        description: "شما مانند مکرون، سیاست‌مدار میانه‌رو و اروپایی هستید.",
        politicalParty: "جمهوری به پیش",
        suitableCountries: "فرانسه، اتحادیه اروپا",
        governingStyle: "میانه‌رو اروپایی",
        successRate: "70%"
      },
      {
        name: "مائو تسه‌دونگ",
        title: "رهبر جمهوری خلق چین",
        era: "۱۹۴۹-۱۹۷۶",
        traits: { socialist: 4, authoritarian: 4, nationalist: 3, militarist: 3 },
        description: "شما مانند مائو، انقلابی کمونیست و رهبر تحول‌گر هستید.",
        politicalParty: "حزب کمونیست چین",
        suitableCountries: "چین، کشورهای کمونیستی",
        governingStyle: "انقلابی کمونیستی",
        successRate: "60%"
      },
      {
        name: "دنگ شیائوپینگ",
        title: "رهبر چین",
        era: "۱۹۷۸-۱۹۹۲",
        traits: { pragmatic: 4, reformist: 4, modernist: 4, strategic: 3 },
        description: "شما مانند دنگ، اصلاح‌گر عملگرا و توسعه‌دهنده اقتصادی هستید.",
        politicalParty: "حزب کمونیست چین",
        suitableCountries: "چین، کشورهای در حال توسعه",
        governingStyle: "اصلاح‌گر اقتصادی",
        successRate: "90%"
      },
      {
        name: "شی جین‌پینگ",
        title: "رئیس‌جمهور چین",
        era: "۲۰۱۳-اکنون",
        traits: { authoritarian: 4, nationalist: 4, strategic: 4, centralized: 3 },
        description: "شما مانند شی جین‌پینگ، رهبر متمرکز و جاه‌طلب قدرت جهانی هستید.",
        politicalParty: "حزب کمونیست چین",
        suitableCountries: "چین، قدرت‌های بزرگ",
        governingStyle: "اقتدارگرای متمرکز",
        successRate: "75%"
      },
      {
        name: "مهاتما گاندی",
        title: "رهبر استقلال هند",
        era: "۱۹۱۵-۱۹۴۸",
        traits: { peaceful: 4, spiritual: 4, democratic: 4, principled: 4, tolerant: 3 },
        description: "شما مانند گاندی، رهبر صلح‌طلب و معنوی هستید.",
        politicalParty: "کنگره هند",
        suitableCountries: "هند، جنبش‌های صلح‌آمیز",
        governingStyle: "رهبری صلح‌آمیز",
        successRate: "85%"
      },
      {
        name: "نهرو",
        title: "نخست‌وزیر هند",
        era: "۱۹۴۷-۱۹۶۴",
        traits: { secular: 4, socialist: 3, democratic: 4, internationalist: 3 },
        description: "شما مانند نهرو، دموکرات سکولار و بین‌المللی‌گرا هستید.",
        politicalParty: "کنگره هند",
        suitableCountries: "هند، کشورهای غیرمتعهد",
        governingStyle: "دموکراتیک سکولار",
        successRate: "80%"
      },
      {
        name: "لی کوان یو",
        title: "نخست‌وزیر سنگاپور",
        era: "۱۹۵۹-۱۹۹۰",
        traits: { technocratic: 4, authoritarian: 3, pragmatic: 4, modernist: 4 },
        description: "شما مانند لی کوان یو، توسعه‌گر تکنوکرات و عملگرا هستید.",
        politicalParty: "حزب عمل خلق",
        suitableCountries: "سنگاپور، شهردولت‌های توسعه‌یافته",
        governingStyle: "تکنوکراتیک توسعه‌ای",
        successRate: "95%"
      },
      {
        name: "پارک چونگ‌هی",
        title: "رئیس‌جمهور کره جنوبی",
        era: "۱۹۶۳-۱۹۷۹",
        traits: { authoritarian: 4, modernist: 4, nationalist: 3, militarist: 3 },
        description: "شما مانند پارک چونگ‌هی، رهبر توسعه‌گر اقتدارگرا هستید.",
        politicalParty: "حزب جمهوری دموکراتیک",
        suitableCountries: "کره جنوبی، کشورهای در حال توسعه",
        governingStyle: "اقتدارگرای توسعه‌ای",
        successRate: "75%"
      },
      {
        name: "نارندرا مودی",
        title: "نخست‌وزیر هند",
        era: "۲۰۱۴-اکنون",
        traits: { nationalist: 4, populist: 3, modernist: 3, pragmatic: 3 },
        description: "شما مانند مودی، ملی‌گرای توسعه‌طلب و پوپولیست هستید.",
        politicalParty: "بهاراتیا جاناتا",
        suitableCountries: "هند، کشورهای پوپولیست",
        governingStyle: "ملی‌گرای توسعه‌ای",
        successRate: "70%"
      },
      {
        name: "نلسون ماندلا",
        title: "رئیس‌جمهور آفریقای جنوبی",
        era: "۱۹۹۴-۱۹۹۹",
        traits: { egalitarian: 4, peaceful: 4, democratic: 4, tolerant: 4, principled: 3 },
        description: "شما مانند ماندلا، رهبر صلح، عدالت و آشتی هستید.",
        politicalParty: "کنگره ملی آفریقا",
        suitableCountries: "آفریقای جنوبی، کشورهای پسا تفکیک",
        governingStyle: "صلح‌آمیز آشتی‌جو",
        successRate: "90%"
      },
      {
        name: "کوامه نکروما",
        title: "اولین رئیس‌جمهور غنا",
        era: "۱۹۵۷-۱۹۶۶",
        traits: { nationalist: 4, socialist: 3, independent: 4, modernist: 2 },
        description: "شما مانند نکروما، رهبر ضد استعمار و پان‌آفریقانیست هستید.",
        politicalParty: "حزب کنوانسیون خلق",
        suitableCountries: "غنا، کشورهای آفریقایی",
        governingStyle: "پان‌آفریقانیست",
        successRate: "70%"
      },
      {
        name: "ولادیمیر لنین",
        title: "رهبر انقلاب اکتبر",
        era: "۱۹۱۷-۱۹۲۴",
        traits: { socialist: 4, authoritarian: 4, strategic: 3, modernist: 3 },
        description: "شما مانند لنین، انقلابی کمونیست و ایدئولوگ هستید.",
        politicalParty: "بلشویک",
        suitableCountries: "شوروی، کشورهای انقلابی",
        governingStyle: "انقلابی کمونیستی",
        successRate: "75%"
      },
      {
        name: "یوسف استالین",
        title: "رهبر اتحاد شوروی",
        era: "۱۹۲۴-۱۹۵۳",
        traits: { authoritarian: 4, industrialist: 4, militarist: 3, centralized: 4 },
        description: "شما مانند استالین، رهبر توتالیتر و صنعتی‌ساز هستید.",
        politicalParty: "حزب کمونیست شوروی",
        suitableCountries: "شوروی، رژیم‌های توتالیتر",
        governingStyle: "توتالیتر صنعتی",
        successRate: "50%"
      },
      {
        name: "میخائیل گورباچف",
        title: "آخرین رهبر شوروی",
        era: "۱۹۸۵-۱۹۹۱",
        traits: { reformist: 4, peaceful: 4, democratic: 3, pragmatic: 3 },
        description: "شما مانند گورباچف، اصلاح‌گر صلح‌دوست و دموکراتیزه‌کننده هستید.",
        politicalParty: "حزب کمونیست شوروی",
        suitableCountries: "شوروی، کشورهای در حال گذار",
        governingStyle: "اصلاح‌گر دموکراتیک",
        successRate: "70%"
      },
      {
        name: "ولادیمیر پوتین",
        title: "رئیس‌جمهور روسیه",
        era: "۲۰۰۰-اکنون",
        traits: { authoritarian: 4, nationalist: 4, strategic: 4, militarist: 3 },
        description: "شما مانند پوتین، رهبر اقتدارگرا و استراتژیست قدرت‌طلب هستید.",
        politicalParty: "روسیه متحد",
        suitableCountries: "روسیه، قدرت‌های اقتدارگرا",
        governingStyle: "اقتدارگرای استراتژیک",
        successRate: "75%"
      },
      {
        name: "سیمون بولیوار",
        title: "رهبر استقلال آمریکای لاتین",
        era: "۱۸۱۳-۱۸۳۰",
        traits: { nationalist: 4, independent: 4, strategic: 4, democratic: 3 },
        description: "شما مانند بولیوار، رهایی‌بخش و وحدت‌گرای بزرگ هستید.",
        politicalParty: "—",
        suitableCountries: "آمریکای لاتین، جنبش‌های استقلال",
        governingStyle: "آزادی‌بخش ملی",
        successRate: "85%"
      },
      {
        name: "فیدل کاسترو",
        title: "رهبر انقلاب کوبا",
        era: "۱۹۵۹-۲۰۰۸",
        traits: { socialist: 4, authoritarian: 4, nationalist: 3, resistant: 4 },
        description: "شما مانند کاسترو، انقلابی کاریزماتیک و مقاوم هستید.",
        politicalParty: "حزب کمونیست کوبا",
        suitableCountries: "کوبا، کشورهای انقلابی",
        governingStyle: "انقلابی کمونیستی",
        successRate: "70%"
      },
      {
        name: "هوگو چاوز",
        title: "رئیس‌جمهور ونزوئلا",
        era: "۱۹۹۹-۲۰۱۳",
        traits: { populist: 4, socialist: 4, nationalist: 3, confrontational: 3 },
        description: "شما مانند چاوز، پوپولیست سوسیالیست و ضد امپریالیست هستید.",
        politicalParty: "حزب سوسیالیست متحد",
        suitableCountries: "ونزوئلا، کشورهای پوپولیست",
        governingStyle: "پوپولیستی سوسیالیستی",
        successRate: "60%"
      },
      {
        name: "اوا پرون",
        title: "بانوی اول آرژانتین",
        era: "۱۹۴۶-۱۹۵۲",
        traits: { populist: 4, egalitarian: 4, socialist: 3, democratic: 3 },
        description: "شما مانند اویتا، رهبر پوپولیست و مدافع حقوق زنان هستید.",
        politicalParty: "پرونیست",
        suitableCountries: "آرژانتین، کشورهای پوپولیست",
        governingStyle: "پوپولیستی فمینیستی",
        successRate: "80%"
      },
      {
        name: "مصطفی کمال آتاتورک",
        title: "بنیان‌گذار ترکیه مدرن",
        era: "۱۹۲۳-۱۹۳۸",
        traits: { secular: 4, modernist: 4, nationalist: 4, reformist: 4 },
        description: "شما مانند آتاتورک، مدرن‌ساز سکولار و ملی‌گرا هستید.",
        politicalParty: "حزب خلق جمهوری",
        suitableCountries: "ترکیه، کشورهای مدرن‌ساز",
        governingStyle: "سکولار مدرن‌ساز",
        successRate: "90%"
      },
      {
        name: "رجب طیب اردوغان",
        title: "رئیس‌جمهور ترکیه",
        era: "۲۰۰۳-اکنون",
        traits: { authoritarian: 4, spiritual: 3, populist: 3, nationalist: 3 },
        description: "شما مانند اردوغان، رهبر محافظه‌کار مسلمان و پوپولیست هستید.",
        politicalParty: "عدالت و توسعه",
        suitableCountries: "ترکیه، کشورهای اسلامی",
        governingStyle: "اسلام‌گرای پوپولیست",
        successRate: "70%"
      },
      {
        name: "جمال عبدالناصر",
        title: "رئیس‌جمهور مصر",
        era: "۱۹۵۶-۱۹۷۰",
        traits: { nationalist: 4, socialist: 3, independent: 4, modernist: 3 },
        description: "شما مانند ناصر، رهبر پان‌عرب و ملی‌گرای کاریزماتیک هستید.",
        politicalParty: "اتحاد سوسیالیست عرب",
        suitableCountries: "مصر، جهان عرب",
        governingStyle: "پان‌عربیستی",
        successRate: "75%"
      },
      {
        name: "صدام حسین",
        title: "رئیس‌جمهور عراق",
        era: "۱۹۷۹-۲۰۰۳",
        traits: { authoritarian: 4, militarist: 4, nationalist: 3, aggressive: 4 },
        description: "شما مانند صدام، رهبر اقتدارگرا و جنگ‌طلب هستید.",
        politicalParty: "حزب بعث",
        suitableCountries: "عراق، رژیم‌های اقتدارگرا",
        governingStyle: "اقتدارگرای نظامی",
        successRate: "30%"
      },
      {
        name: "بنیامین نتانیاهو",
        title: "نخست‌وزیر اسرائیل",
        era: "۱۹۹۶-۱۹۹۹، ۲۰۰۹-۲۰۲۱، ۲۰۲۲-اکنون",
        traits: { conservative: 4, nationalist: 4, militarist: 3, pragmatic: 3 },
        description: "شما مانند نتانیاهو، محافظه‌کار امنیت‌محور و ملی‌گرا هستید.",
        politicalParty: "لیکود",
        suitableCountries: "اسرائیل، دموکراسی‌های امنیت‌محور",
        governingStyle: "محافظه‌کار امنیت‌گرا",
        successRate: "70%"
      },
      {
        name: "ولودیمیر زلنسکی",
        title: "رئیس‌جمهور اوکراین",
        era: "۲۰۱۹-اکنون",
        traits: { democratic: 4, resistant: 4, diplomatic: 3, nationalist: 3 },
        description: "شما مانند زلنسکی، رهبر مقاوم و ارتباط‌گر ماهر در بحران هستید.",
        politicalParty: "خدمتگزار مردم",
        suitableCountries: "اوکراین، دموکراسی‌های در حال دفاع",
        governingStyle: "رهبری بحران دموکراتیک",
        successRate: "80%"
      },
      {
        name: "جاسیندا آردرن",
        title: "نخست‌وزیر نیوزیلند",
        era: "۲۰۱۷-۲۰۲۳",
        traits: { liberal: 4, egalitarian: 4, democratic: 4, peaceful: 3 },
        description: "شما مانند آردرن، رهبر همدل و پیشرو در عدالت اجتماعی هستید.",
        politicalParty: "کارگر",
        suitableCountries: "نیوزیلند، دموکراسی‌های پیشرو",
        governingStyle: "پیشرو همدل",
        successRate: "85%"
      },
      {
        name: "لولا داسیلوا",
        title: "رئیس‌جمهور برزیل",
        era: "۲۰۰۳-۲۰۱۱، ۲۰۲۳-اکنون",
        traits: { populist: 4, socialist: 4, egalitarian: 4, democratic: 3 },
        description: "شما مانند لولا، رهبر چپ پوپولیست و مدافع برابری هستید.",
        politicalParty: "حزب کارگران",
        suitableCountries: "برزیل، کشورهای چپ لاتین",
        governingStyle: "چپ پوپولیست",
        successRate: "75%"
      },
      {
        name: "ناپلئون بناپارت",
        title: "امپراتور فرانسه",
        era: "۱۸۰۴-۱۸۱۴",
        traits: { militarist: 4, strategic: 4, nationalist: 3, reformist: 3 },
        description: "شما مانند ناپلئون، فرمانده نظامی نابغه و اصلاح‌گر جاه‌طلب هستید.",
        politicalParty: "امپراتوری فرانسه",
        suitableCountries: "فرانسه، امپراتوری‌های نظامی",
        governingStyle: "امپراتوری نظامی",
        successRate: "70%"
      },
      {
        name: "آلکساندر مقدونی",
        title: "پادشاه مقدونیه",
        era: "۳۳۶-۳۲۳ ق.م",
        traits: { militarist: 4, strategic: 4, nationalist: 3, tolerant: 3 },
        description: "شما مانند اسکندر، فاتح بزرگ و آمیزه‌دهنده فرهنگ‌ها هستید.",
        politicalParty: "—",
        suitableCountries: "مقدونیه باستان، امپراتوری‌های باستانی",
        governingStyle: "فتح‌گرای فرهنگی",
        successRate: "85%"
      },
      {
        name: "یولیوس سزار",
        title: "دیکتاتور روم",
        era: "۴۹-۴۴ ق.م",
        traits: { strategic: 4, militarist: 4, reformist: 3, populist: 3 },
        description: "شما مانند سزار، سیاست‌مدار جاه‌طلب و فرمانده کاریزماتیک هستید.",
        politicalParty: "پوپولار",
        suitableCountries: "روم باستان، جمهوری‌های قدرتمند",
        governingStyle: "دیکتاتوری کاریزماتیک",
        successRate: "75%"
      },
      {
        name: "اکبر شاه",
        title: "پادشاه مغولی هند",
        era: "۱۵۵۶-۱۶۰۵",
        traits: { tolerant: 4, strategic: 4, balanced: 4, pragmatic: 3 },
        description: "شما مانند اکبر، پادشاه متسامح و مدیر ماهر امپراتوری هستید.",
        politicalParty: "—",
        suitableCountries: "هند مغولی، امپراتوری‌های چندفرهنگی",
        governingStyle: "پادشاهی متسامح",
        successRate: "90%"
      },
      {
        name: "سوکارنو",
        title: "اولین رئیس‌جمهور اندونزی",
        era: "۱۹۴۵-۱۹۶۷",
        traits: { nationalist: 4, independent: 4, diplomatic: 3, populist: 3 },
        description: "شما مانند سوکارنو، رهبر ضد استعمار و بنیان‌گذار غیرمتعهدی هستید.",
        politicalParty: "ملی اندونزی",
        suitableCountries: "اندونزی، کشورهای غیرمتعهد",
        governingStyle: "ملی‌گرای ضد استعمار",
        successRate: "70%"
      }
    ];


    // نام‌های فارسی ویژگی‌ها برای نمایش
    const traitNames = {
      democratic: "دموکراتیک",
      liberal: "لیبرال",
      authoritarian: "اقتدارگرا",
      conservative: "محافظه‌کار",
      moderate: "میانه‌رو",
      pragmatic: "عملگرا",
      capitalist: "سرمایه‌دار",
      socialist: "سوسیالیست",
      diplomatic: "دیپلماتیک",
      militarist: "نظامی‌گرا",
      nationalist: "ملی‌گرا",
      populist: "پوپولیست",
      peaceful: "صلح‌طلب",
      tolerant: "مداراگر",
      strategic: "استراتژیک",
      reformist: "اصلاح‌طلب",
      egalitarian: "برابری‌خواه",
      spiritual: "معنوی",
      modernist: "مدرنیست",
      traditionalist: "سنتی",
      balanced: "متوازن",
      technocratic: "تکنوکرات",
      resistant: "مقاوم",
      independent: "مستقل",
      principled: "اصول‌گرا",
      transparent: "شفاف",
      confrontational: "تقابل‌جو",
      aggressive: "تهاجمی",
      defensive: "دفاعی",
      isolationist: "انزواگرا",
      internationalist: "بین‌المللی‌گرا",
      cooperative: "همکار",
      expansionist: "توسعه‌طلب",
      theocratic: "دینی‌گرا",
      secular: "سکولار",
      controlled: "کنترل‌گر",
      free_market: "بازار آزاد",
      centralized: "متمرکز",
      innovative: "نوآور",
      industrialist: "صنعت‌گرا"
    };


    const config = {
      questions,
      leaders,
      traitNames,
      totalQuestions: 15
    };

    // ====== بازیابی state ======
    let savedState = null;
    try {
      savedState = JSON.parse(localStorage.getItem('quizState')) || null;
    } catch (e) {
      savedState = null;
    }

    let state = savedState || {
      currentQuestion: 0,
      answers: Array(config.totalQuestions).fill(null),
      userTraits: {},
      bestMatch: null,   // اگر محاسبه شد، اینجا ذخیره میشه
      testStarted: false
    };

    // ====== ذخیره state ======
    function saveState() {
      try {
        localStorage.setItem('quizState', JSON.stringify(state));
      } catch (e) {
        // در صورت پر بودن حافظه یا محدودیت‌های مرورگر نادیده می‌گیریم
        console.warn('Could not save state to localStorage', e);
      }
    }

    // ====== پیامک کوچک ======
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.animation = 'slideInUp 0.25s ease-out reverse';
        setTimeout(() => toast.remove(), 250);
      }, 2000);
    }

    // ====== محاسبه بردار کاربر از پاسخ‌ها ======
    function calculateUserTraitsVector() {
      state.userTraits = {};
      state.answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex === null || answerIndex === undefined) return;
        const question = config.questions[questionIndex];
        if (!question || !question.options || !question.options[answerIndex]) return;
        const option = question.options[answerIndex];
        if (option.traits) {
          Object.entries(option.traits).forEach(([trait, weight]) => {
            state.userTraits[trait] = (state.userTraits[trait] || 0) + weight;
          });
        }
      });
    }

    // ====== نرمال‌سازی ایمن بین user و leader (min-max per-trait) ======
    // ورودی: دو وکتور ساده {trait: value, ...}
    // خروجی: دو وکتور نرمال‌شده در بازه [0,1]
    function normalizePair(userVec, leaderVec) {
      const allKeys = new Set([...Object.keys(userVec || {}), ...Object.keys(leaderVec || {})]);
      const uNorm = {};
      const lNorm = {};

      allKeys.forEach(key => {
        const u = userVec[key] || 0;
        const l = leaderVec[key] || 0;
        const minVal = Math.min(u, l);
        const maxVal = Math.max(u, l);

        // اگر هر دو برابرند (بدون پراکندگی) مقدار را 0.5 قرار می‌دهیم (بی‌طرف)
        if (maxVal === minVal) {
          uNorm[key] = 0.5;
          lNorm[key] = 0.5;
        } else {
          // min-max scaling
          uNorm[key] = Math.max(0, Math.min(1, (u - minVal) / (maxVal - minVal)));
          lNorm[key] = Math.max(0, Math.min(1, (l - minVal) / (maxVal - minVal)));
        }
      });

      return [uNorm, lNorm];
    }

    // ====== توابع similarity/distance ======
    function cosineSimilarity(vec1, vec2) {
      let dot = 0, mag1 = 0, mag2 = 0;
      const keys = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
      keys.forEach(k => {
        const a = vec1[k] || 0;
        const b = vec2[k] || 0;
        dot += a * b;
        mag1 += a * a;
        mag2 += b * b;
      });
      const denom = Math.sqrt(mag1) * Math.sqrt(mag2);
      return denom === 0 ? 0 : dot / denom;
    }

    function euclideanDistance(vec1, vec2) {
      let sum = 0;
      const keys = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
      keys.forEach(k => {
        const diff = (vec1[k] || 0) - (vec2[k] || 0);
        sum += diff * diff;
      });
      return Math.sqrt(sum);
    }

    function manhattanDistance(vec1, vec2) {
      let sum = 0;
      const keys = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
      keys.forEach(k => {
        sum += Math.abs((vec1[k] || 0) - (vec2[k] || 0));
      });
      return sum;
    }

    // ====== helper: تعداد ویژگی‌های واقعی بین دو وکتور ======
    function traitCount(vec1, vec2) {
      return new Set([...Object.keys(vec1 || {}), ...Object.keys(vec2 || {})]).size || 1;
    }

    // ====== تابع قوی‌تر برای پیدا کردن بهترین تطابق (ensemble + normalization + robustness) ======
    function findBestMatch() {
      // 1. ساخت بردار کاربر از پاسخ‌ها
      calculateUserTraitsVector();

      const userRaw = state.userTraits;

      let bestScore = -Infinity;
      let bestLeader = null;

      config.leaders.forEach(leader => {
        const leaderRaw = leader.traits || {};

        // 2. نرمال‌سازی pairwise (هر trait بر اساس دامنه user+leader)
        const [uNorm, lNorm] = normalizePair(userRaw, leaderRaw);

        // 3. محاسبات بنیادی
        const cosine = cosineSimilarity(uNorm, lNorm); // در بازه [-1,1] معمولاً [0,1] چون 0..1
        const nTraits = traitCount(uNorm, lNorm);

        // در حالت نرمال‌شده (۰..۱)، بیشینه فاصله اقلیدوسی sqrt(nTraits)
        const euc = euclideanDistance(uNorm, lNorm);
        const eucNorm = 1 - Math.min(euc / Math.sqrt(nTraits), 1); // تبدیل به similarity در [0,1]

        // manhattan در بازه [0, nTraits] -> نرمال به [0,1]
        const man = manhattanDistance(uNorm, lNorm);
        const manNorm = 1 - Math.min(man / nTraits, 1);

        // 4. چند روش مستقل برای robustness
        // a) ترکیب پایه‌ای (وزن‌ها طوری انتخاب شدند که cosine نقش قوی‌تری داشته باشه)
        const methodA = (cosine * 0.6) + (eucNorm * 0.3) + (manNorm * 0.1);

        // b) روش مبتنی بر فاصله بیشتر (برای مواردی که اختلاف کمی بین جهت‌ها هست ولی مقادیر فرق دارند)
        const methodB = (eucNorm * 0.5) + (manNorm * 0.3) + (cosine * 0.2);

        // c) pure cosine (برای حالات جهت‌محور)
        const methodC = cosine;

        // 5. adaptive weighting: اگر وکتور کاربر خیلی یکنواخت باشه (variance کم)، وزن cosine را بالاتر می‌بریم
        const uValues = Object.values(uNorm);
        const mean = uValues.reduce((s, v) => s + v, 0) / Math.max(uValues.length, 1);
        const variance = uValues.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / Math.max(uValues.length, 1);
        const adaptiveBoost = variance < 0.002 ? 0.1 : 0; // آستانه کوچک؛ اگر یکنواخت باشه به cosine جایزه میدیم

        // 6. ترکیب نهایی ensemble (میانگین وزنی)
        let finalScore = (methodA * 0.5) + (methodB * 0.3) + (methodC * 0.2);
        finalScore = Math.min(1, Math.max(0, finalScore + adaptiveBoost));

        // 7. انتخاب بهترین
        if (finalScore > bestScore) {
          bestScore = finalScore;
          bestLeader = leader;
        }
      });

      // تبدیل به درصد (قابل فهم برای کاربر)
      const percentage = Math.max(0, Math.min(100, Math.round(bestScore * 100)));

      // ذخیره در state (فقط یک بار، و ذخیره به localStorage)
      state.bestMatch = {
        ...bestLeader,
        score: bestScore,
        percentage,
        // ذخیرهٔ بردار traits رهبر برای نمایش/تحلیل بعدی مفیده
        traits: bestLeader ? (bestLeader.traits || {}) : {}
      };

      saveState();
    }

    // ====== UI: شروع تست ======
    function startTest() {
      state.testStarted = true;
      if (!state.answers || state.answers.length !== config.totalQuestions)
        state.answers = Array(config.totalQuestions).fill(null);

      document.getElementById('introScreen')?.classList.add('hidden');
      document.getElementById('quizScreen')?.classList.add('active');
      document.getElementById('resultScreen')?.classList.remove('active');

      renderQuestion();
      updateProgress();
      saveState();
    }

    // ====== UI: رندر سوال ======
    function renderQuestion() {
      const q = config.questions[state.currentQuestion];
      if (!q) return;
      const container = document.getElementById('questionContainer');
      if (!container) return;

      container.innerHTML = `
    <div class="question-block">
      <div class="question-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, idx) => `
          <div class="option ${state.answers[state.currentQuestion] === idx ? 'selected' : ''}"
               onclick="selectOption(${idx})">
            ${opt.text}
          </div>
        `).join('')}
      </div>
    </div>
  `;
    }

    // ====== انتخاب گزینه ======
    function selectOption(index) {
      state.answers[state.currentQuestion] = index;
      renderQuestion();
      saveState();
    }

    // ====== ناوبری ======
    function nextQuestion() {
      if (state.answers[state.currentQuestion] === null) {
        showToast('لطفاً یک گزینه را انتخاب کنید');
        return;
      }
      if (state.currentQuestion < config.totalQuestions - 1) {
        state.currentQuestion++;
        renderQuestion();
        updateProgress();
        window.scrollTo(0, 0);
      } else {
        // وقتی کاربر به آخر رسید، محاسبه و نمایش نتیجه
        findBestMatch();
        showResults();
      }
      saveState();
    }

    function previousQuestion() {
      if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuestion();
        updateProgress();
        window.scrollTo(0, 0);
      }
      saveState();
    }

    function updateProgress() {
      const progress = ((state.currentQuestion + 1) / config.totalQuestions) * 100;
      const bar = document.getElementById('progressBar');
      if (bar) bar.style.width = progress + '%';
      const qNum = document.getElementById('questionNumber');
      if (qNum) qNum.textContent = state.currentQuestion + 1;
      const prevBtn = document.getElementById('prevBtn');
      if (prevBtn) prevBtn.disabled = state.currentQuestion === 0;
      const nextBtn = document.getElementById('nextBtn');
      if (nextBtn) nextBtn.textContent = state.currentQuestion === config.totalQuestions - 1 ? 'نتایج' : 'بعدی';
    }

    // ====== نمایش نتایج (از state، بدون بازمحاسبه) ======
    function showResultsFromState() {
      const match = state.bestMatch;
      if (!match) return;
      // نمایش UI
      document.getElementById('introScreen')?.classList.add('hidden');
      document.getElementById('quizScreen')?.classList.remove('active');
      document.getElementById('resultScreen')?.classList.add('active');

      document.getElementById('resultImage') && (document.getElementById('resultImage').src = match.image || '');
      document.getElementById('resultName') && (document.getElementById('resultName').textContent = match.name || '');
      document.getElementById('resultTitle') && (document.getElementById('resultTitle').textContent = match.title || '');
      document.getElementById('matchPercent') && (document.getElementById('matchPercent').textContent = (match.percentage || 0) + '%');
      document.getElementById('resultDescription') && (document.getElementById('resultDescription').textContent = match.description || '');

      document.getElementById('resultDetails') && (document.getElementById('resultDetails').innerHTML = `
    <div class="result-detail">
      <div class="detail-label">سبک رهبری</div>
      <div class="detail-value">${match.governingStyle || '—'}</div>
    </div>
  `);

      // traits top 4
      const topTraits = Object.entries(match.traits || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);

      const traitsGrid = document.getElementById('traitsGrid');
      if (traitsGrid) {
        traitsGrid.innerHTML = topTraits.map(([name, score]) => `
      <div class="trait-item">
        <div class="trait-name">${name}</div>
        <div class="trait-bar"><div class="trait-fill" style="--fill-width: ${(score / 4) * 100}%"></div></div>
        <div class="trait-score">${score}/4</div>
      </div>
    `).join('');
      }

      window.scrollTo(0, 0);
    }

    // ====== نمایش نتایج (پس از محاسبه جدید) ======
    function showResults() {
      // state.bestMatch باید از قبل توسط findBestMatch مقداردهی شده باشه
      saveState();
      showResultsFromState();
    }

    // ====== اشتراک گذاری ======
    function shareResult() {
      const match = state.bestMatch;
      if (!match) {
        showToast('نتیجه‌ای برای اشتراک وجود ندارد');
        return;
      }
      const text = `من در تست شخصیت "${match.name}" شدم! درصد تطابق: ${match.percentage}%`;
      navigator.clipboard.writeText(text)
        .then(() => showToast('نتیجه در کلیپ‌بورد کپی شد'))
        .catch(() => showToast('خطا در کپی کردن'));
    }

    // ====== restart ======
    function restartTest() {
      try {
        localStorage.removeItem('quizState');
      } catch (e) {
        console.warn('Could not remove quizState', e);
      }

      state = {
        currentQuestion: 0,
        answers: Array(config.totalQuestions).fill(null),
        userTraits: {},
        bestMatch: null,
        testStarted: false
      };

      document.getElementById('resultScreen')?.classList.remove('active');
      document.getElementById('introScreen')?.classList.remove('hidden');
      document.getElementById('quizScreen')?.classList.remove('active');

      renderQuestion();
      updateProgress();
      window.scrollTo(0, 0);
    }

    // ====== init on load ======
    function initQuiz() {
      // اگر قبلأ نتیجه محاسبه و ذخیره شده بود، مستقیم آن را نمایش بده (بدون بازمحاسبه)
      if (state && state.bestMatch) {
        showResultsFromState();
        return;
      }

      // اگر state.answers پر شده و همه سوالات پاسخ داده شده‌اند ولی bestMatch نیست،
      // شاید لازم باشه نتیجه را محاسبه کنیم (مثلاً کاربر تا انتها رفته ولی صفحه قبل از ذخیره بسته شده).
      const allAnswered = Array.isArray(state.answers) && state.answers.every(a => a !== null);
      if (allAnswered && (!state.bestMatch)) {
        // محاسبه و نمایش نتیجه
        findBestMatch();
        showResults();
        return;
      }

      // در غیر این صورت صفحهٔ معرفی/شروع را نمایش بده (یا آخرین سوال را اگر کاربر وسط تست بود)
      if (state.testStarted) {
        document.getElementById('introScreen')?.classList.add('hidden');
        document.getElementById('quizScreen')?.classList.add('active');
        renderQuestion();
        updateProgress();
      } else {
        document.getElementById('introScreen')?.classList.remove('hidden');
        document.getElementById('quizScreen')?.classList.remove('active');
        document.getElementById('resultScreen')?.classList.remove('active');
      }
    }

    // ====== اجرا در لود ======
    window.addEventListener('load', initQuiz);