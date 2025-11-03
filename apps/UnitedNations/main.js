// main.js
// تست: "اگر رئیس سازمان ملل بودی..."  - 15 سوال
// هماهنگ با HTML و CSSی که فرستادی.
// نیازمندی: Chart.js و html2canvas در HTML وارد شده‌اند.

(() => {
  // ---------- داده‌های سوالات ----------
  const questions = [
    {
      q: "دو کشور درگیر نفت و منابع شدن. چه کاری می‌کنی؟",
      options: [
        { t: "کمیسیون صلح تشکیل می‌دم و میانجی می‌کنم.", type: "diplomatic" },
        { t: "کنترل منابع رو به‌صورت موقت به عهده می‌گیرم تا تقسیم عادلانه شه.", type: "authoritarian" },
        { t: "گزارش دقیق می‌نویسم و منتظر می‌مونم جامعه بین‌المللی تصمیم بگیره.", type: "logical" },
        { t: "تحریم یا فشار هدفمند برای وادار کردن طرفین حاضر می‌کنم.", type: "strategic" }
      ]
    },
    {
      q: "خبرنگار می‌پرسه: «آیا سازمان ملل واقعاً تأثیر داره؟» چه واکنشی نشون می‌دی؟",
      options: [
        { t: "با لبخند و شوخی جواب می‌دم و فضا رو آرام می‌کنم.", type: "charismatic" },
        { t: "آمار و شواهد دقیق ارائه می‌دم.", type: "logical" },
        { t: "مصاحبه رو ترک می‌کنم؛ وقت بحث عمومی نیست.", type: "authoritarian" },
        { t: "بهش پیشنهاد می‌دم نقش رسانه‌ای داشته باشه تا با هم کار کنیم.", type: "strategic" }
      ]
    },
    {
      q: "کشور A یک آزمایش موشکی انجام داده و دنیا نگران شده. چه کار می‌کنی؟",
      options: [
        { t: "جلسه اضطراری شورای امنیت می‌ذارم و همه رو دور میز میارم.", type: "diplomatic" },
        { t: "محدودیت‌ها و تحریم‌های سخت اعلام می‌کنم.", type: "authoritarian" },
        { t: "توئیتی می‌زنم که هم هشدار بده هم فضا رو کم‌تنش کنه.", type: "charismatic" },
        { t: "پشت پرده با کشور مذاکره می‌کنم تا توافقی امن حاصل شه.", type: "strategic" }
      ]
    },
    {
      q: "عضوی از اعضا بهت توهین علنی کرده. واکنشت چیه؟",
      options: [
        { t: "بی‌تفاوت می‌مونم و مسئله رو رسمی پیگیری می‌کنم.", type: "logical" },
        { t: "سخنرانی قاطع انجام می‌دم.", type: "authoritarian" },
        { t: "با یک شوخی یا کنایه فضا رو می‌شکنم.", type: "charismatic" },
        { t: "با اقدام پنهانی و هماهنگ، اعتبارش رو کم می‌کنم.", type: "strategic" }
      ]
    },
    {
      q: "کشورهای فقیر درخواست کمک دارن؛ چه استراتژی‌ای داری؟",
      options: [
        { t: "کمک انسانی و مالی فوری سازماندهی می‌کنم.", type: "diplomatic" },
        { t: "کمک رو مشروط می‌کنم تا اصلاحات اجرا بشه.", type: "strategic" },
        { t: "کمپین بزرگ رسانه‌ای راه می‌ندازم تا کمک عمومی جمع شه.", type: "charismatic" },
        { t: "کشورهای ثروتمند رو مجبور می‌کنم سهم‌شون رو بدن.", type: "authoritarian" }
      ]
    },
    {
      q: "عضویی قوانین سازمان رو نقض کرده؛ چه می‌کنی؟",
      options: [
        { t: "هشدار رسمی و فرصت اصلاح می‌دم.", type: "diplomatic" },
        { t: "تحریم یا محرومیت اعمال می‌کنم.", type: "authoritarian" },
        { t: "مذاکره پنهانی تا موضوع حل بشه.", type: "strategic" },
        { t: "اگر افشا بشه، واکنش رسانه‌ای مدیریت می‌کنم.", type: "logical" }
      ]
    },
    {
      q: "بحران اقلیمی در حال تشدیده؛ اولویتش چیه؟",
      options: [
        { t: "کنفرانس جهانی و طرح‌های همکاری بین‌المللی برگزار می‌کنم.", type: "diplomatic" },
        { t: "کشورهای آلاینده رو افشا و تحت فشار قرار می‌دم.", type: "authoritarian" },
        { t: "ویدئوها و پیام‌های احساسی برای مردم منتشر می‌کنم.", type: "charismatic" },
        { t: "پشت صحنه سیاست‌گذاری می‌کنم و بودجه هدفمند تخصیص می‌دم.", type: "strategic" }
      ]
    },
    {
      q: "جاسوسی یا درز اطلاعات در سازمان فاش می‌شه. واکنش؟",
      options: [
        { t: "کمیته بررسی تشکیل می‌دم و شفاف بررسی می‌کنم.", type: "logical" },
        { t: "اطلاعات حساس رو رسانه‌ای می‌کنم تا درس عبرت بشه.", type: "authoritarian" },
        { t: "موضوع رو آرام و مخفیانه حل می‌کنم تا بی‌ثباتی نشه.", type: "strategic" },
        { t: "تو سخنرانی‌م اشاره‌ای طنزآمیز می‌کنم تا فضا کم‌تنش شه.", type: "charismatic" }
      ]
    },
    {
      q: "بحران پناهجویان افزایش پیدا کرده. چه سیاستی داری؟",
      options: [
        { t: "برنامه جهانی اسکان و کمک انسانی فوری راه می‌ندازم.", type: "diplomatic" },
        { t: "به کشورها فشار می‌آورم سهم بپذیرن یا جریمه می‌شن.", type: "authoritarian" },
        { t: "داستان‌های انسانی رو برجسته می‌کنم تا افکار عمومی حساس شه.", type: "charismatic" },
        { t: "با توافق‌های مخفیانه موج پخش رو مدیریت می‌کنم.", type: "strategic" }
      ]
    },
    {
      q: "عضویی سازمان رو ترک کرده؛ تو چه کار می‌کنی؟",
      options: [
        { t: "در خفا لابی و مذاکره می‌کنم تا برگرده.", type: "strategic" },
        { t: "سخنرانی عمومی می‌کنم تا از تصمیمش انتقاد شه.", type: "authoritarian" },
        { t: "بی‌تفاوت رفتار می‌کنم مگر که موضوع مهم باشه.", type: "logical" },
        { t: "با طنز و پیام صلح‌آمیز دعوت به بازگشتش می‌کنم.", type: "charismatic" }
      ]
    },
    {
      q: "رسانه‌ها می‌گن چرا اقدام نظامی نکردی؟ جواب؟",
      options: [
        { t: "اول صلح؛ بعد هر اقدام مقتضی.", type: "diplomatic" },
        { t: "با برنامه‌ریزی پشت‌پرده اقدام صورت گرفته اما رسانه‌ای نشده.", type: "strategic" },
        { t: "نیروهای لازم رو نداریم؛ باید متحدان همکاری کنن.", type: "charismatic" },
        { t: "منتظر دستور شورای امنیت هستم؛ روی فرآیند تاکید دارم.", type: "logical" }
      ]
    },
    {
      q: "پیشنهاد رشوه از طرف یکی از اعضا دریافت می‌کنی. چه می‌کنی؟",
      options: [
        { t: "قاطعانه ردش می‌کنم و روند قضایی می‌گزارم.", type: "diplomatic" },
        { t: "اگر به هدف بزرگ‌تری کمک کنه، قبول و کنترلش می‌کنم.", type: "strategic" },
        { t: "علنی می‌کنم تا بقیه بترسن.", type: "authoritarian" },
        { t: "با شوخی و دیپلماسی رد می‌کنم.", type: "charismatic" }
      ]
    },
    {
      q: "قطعنامه‌ای جنجالی در راه رأی‌گیریه؛ چطور رفتار می‌کنی؟",
      options: [
        { t: "از قبل لابی و توافق‌سازی می‌کنم.", type: "strategic" },
        { t: "به وجدان و اصولم پایبند می‌مونم و شفاف رأی می‌دم.", type: "diplomatic" },
        { t: "سخنرانی احساسی دارم تا افکار رو تحت تأثیر بذارم.", type: "charismatic" },
        { t: "اگر تصویب نشه، اقدامات سخت‌تر برای بعد در نظر می‌گیرم.", type: "authoritarian" }
      ]
    },
    {
      q: "بحران اقتصادی جهانی رخ داده؛ اولویت تو چیه؟",
      options: [
        { t: "کنفرانس هماهنگی با رهبران اقتصادی ترتیب می‌دم.", type: "diplomatic" },
        { t: "بودجه اضطراری برای قشر ضعیف اختصاص می‌دم.", type: "charismatic" },
        { t: "سیاست‌های سختگیرانه برای کنترل بازار اعمال می‌کنم.", type: "authoritarian" },
        { t: "پشت پرده با بانک‌ها و بازارها هماهنگ می‌کنم.", type: "strategic" }
      ]
    },
    {
      q: "پیام سال نو می‌خوای بدی؛ کدومو انتخاب می‌کنی؟",
      options: [
        { t: "«به امید صلح و تفاهم جهانی!»", type: "diplomatic" },
        { t: "«دنیا به شجاعت نیاز داره، نه سکوت!»", type: "authoritarian" },
        { t: "«امید، عشق و یک فنجان قهوه برای همه!»", type: "charismatic" },
        { t: "«سال جدید، برنامه‌های جدید برای مدیریت و ثبات.»", type: "strategic" }
      ]
    }
  ];

  // ---------- نگاشت نوع به متن نتیجه و تصویر (اختیاری تصاویر) ----------
  const typeMeta = {
    diplomatic: {
      name: "دیپلمات آرام",
      title: "آدمِ میز مذاکره و سازش",
      desc: "تو اهل گفتگو، مصالحه و ایجاد توافقی که همه رو تا حدی راضی کنه هستی. در سیاست جهانی، تو کسی هستی که به دیپلماسی ایمان داره و تلاش می‌کنه در کنار حفظ کرامت، راه‌حل پیدا کنه.",
      phrase: "بیایید آرام حرف بزنیم، ولی قاطع عمل کنیم.",
      img: "assets/leaders/diplomatic.jpg"
    },
    charismatic: {
      name: "رهبر کاریزماتیک",
      title: "الهام‌بخش و صاحبِ صدا",
      desc: "تو با حرفات مردم رو جذب می‌کنی؛ قدرتِ نفوذت از احساس و ارتباط نزدیک ناشی می‌شه. شاید همیشه همه‌چیز رو تحلیل نکنی، اما قلب مردم همراهته.",
      phrase: "جهان شاید جدی باشه، ولی من لبخند می‌زنم!",
      img: "assets/leaders/charismatic.jpg"
    },
    strategic: {
      name: "سیاست‌مدار استراتژیک",
      title: "برنامه‌ریز پشت‌پرده",
      desc: "تو از بازی‌های بزرگ خوشت میاد و همیشه چند حرکت جلوتر رو در نظر می‌گیری. تصمیماتت معمولا سنجیده و با هدفِ بلندمدت هستن.",
      phrase: "هیچ اتفاقی تصادفی نیست… حتی سکوت من.",
      img: "assets/leaders/strategic.jpg"
    },
    authoritarian: {
      name: "اقتدارگرای عدالت‌جو",
      title: "قاطع و صریح",
      desc: "تو نظم، قدرت و اجرای قوانین رو مقدم می‌دونی. عقیده‌ات اینه که بدون قدرت و تنظیم، صلح پایدار نخواهد بود.",
      phrase: "صلح بدون اقتدار، توهمی بیش نیست.",
      img: "assets/leaders/authoritarian.jpg"
    },
    logical: {
      // اگر کاربر گزینه‌های منطقی/بی‌طرف زیاد انتخاب کنه، بین استراتژیک و دیپلمات قرار می‌گیره
      name: "تحلیل‌گر عقلانی",
      title: "منطقی و محاسبه‌گر",
      desc: "تو به داده‌ها نگاه می‌کنی و تصمیم‌هات مبتنی بر شواهد و تحلیل هستن. واکنش‌های تو معمولا خونسرد و کنترل‌شده است.",
      phrase: "آمار و واقعیت‌ها راهنمای من هستند.",
      img: "assets/leaders/logical.jpg"
    }
  };

  // ---------- متغیرهای UI ----------
  const introScreen = document.getElementById("introScreen");
  const quizScreen = document.getElementById("quizScreen");
  const resultScreen = document.getElementById("resultScreen");
  const questionContainer = document.getElementById("questionContainer");
  const questionNumberEl = document.getElementById("questionNumber");
  const progressBar = document.getElementById("progressBar");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const gaugeContent = document.getElementById("gaugeContent");

  const resultName = document.getElementById("resultName");
  const resultTitle = document.getElementById("resultTitle");
  const resultImage = document.getElementById("resultImage");
  const resultDescription = document.getElementById("resultDescription");
  const traitsGrid = document.getElementById("traitsGrid");
  const matchPercent = document.getElementById("matchPercent");
  const personalityChartCanvas = document.getElementById("personalityChart").getContext("2d");

  // state
  let currentQ = 0;
  const answers = new Array(questions.length).fill(null);
  let counts = { diplomatic: 0, charismatic: 0, strategic: 0, authoritarian: 0, logical: 0 };
  let chartInstance = null;

  // ---------- شروع تست ----------
  window.startTest = function startTest() {
    introScreen.style.display = "none";
    quizScreen.classList.add("active");
    resultScreen.classList.remove("active");
    currentQ = 0;
    for (let k in counts) counts[k] = 0;
    renderQuestion();
    updateProgress();
    renderGaugePlaceholder();
  };

  function renderQuestion() {
    const q = questions[currentQ];
    questionContainer.innerHTML = `
      <div class="question-block">
        <div class="question-header">
          <div class="question-text-with-icon">${escapeHtml(q.q)}</div>
        </div>
        <div class="options" id="optionsList"></div>
      </div>
    `;
    questionNumberEl.textContent = `${currentQ + 1}`;

    const optionsList = document.getElementById("optionsList");
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("div");
      btn.className = "option";
      if (answers[currentQ] === idx) btn.classList.add("selected");
      btn.innerText = opt.t;
      btn.addEventListener("click", () => {
        selectOption(currentQ, idx);
        // بعد از انتخاب، به‌روز‌رسانی پیش‌بینی زنده
        renderGaugePrediction();
      });
      optionsList.appendChild(btn);
    });

    // کنترل دکمه‌ها
    prevBtn.disabled = currentQ === 0;
    nextBtn.innerText = currentQ === questions.length - 1 ? "مشاهده نتیجه" : "بعدی";
  }

  function selectOption(qIndex, optionIndex) {
    answers[qIndex] = optionIndex;
    // انتخاب کاربری را در UI برجسته کن
    const optionEls = document.querySelectorAll("#optionsList .option");
    optionEls.forEach((el, i) => el.classList.toggle("selected", i === optionIndex));
  }

  window.nextQuestion = function nextQuestion() {
    // اگر سوال فعلی انتخاب نشده، هشدار بده
    if (answers[currentQ] === null) {
      showToast("لطفاً یک گزینه انتخاب کن.");
      return;
    }

    if (currentQ < questions.length - 1) {
      currentQ++;
      renderQuestion();
      updateProgress();
    } else {
      // آخرین سوال -> نمایش نتیجه
      computeResult();
      showResult();
    }
  };

  window.previousQuestion = function previousQuestion() {
    if (currentQ > 0) {
      currentQ--;
      renderQuestion();
      updateProgress();
    }
  };

  function updateProgress() {
    const percent = Math.round(((currentQ + (answers[currentQ] !== null ? 1 : 0)) / questions.length) * 100);
    progressBar.style.width = `${percent}%`;
  }

  // ---------- پیش‌بینی زنده (گِیج) ----------
  function renderGaugePlaceholder() {
    gaugeContent.innerHTML = `
      <div class="gauge-placeholder">
        <span>پس از پاسخ به چند سوال، پیش‌بینی نمایش داده می‌شود</span>
      </div>
    `;
  }

  function renderGaugePrediction() {
    // شمارش موقت از پاسخ‌های پر شده
    const tempCounts = { diplomatic: 0, charismatic: 0, strategic: 0, authoritarian: 0, logical: 0 };
    answers.forEach((ans, i) => {
      if (ans === null) return;
      const opt = questions[i].options[ans];
      if (opt && opt.type) tempCounts[opt.type] = (tempCounts[opt.type] || 0) + 1;
    });

    const totalAnswered = Object.values(tempCounts).reduce((a, b) => a + b, 0);
    if (totalAnswered === 0) {
      renderGaugePlaceholder();
      return;
    }

    // تبدیل به آرایه مرتب
    const items = Object.keys(tempCounts).map(k => ({ key: k, val: tempCounts[k] }));
    items.sort((a, b) => b.val - a.val);

    // ساخت لیست پیش‌بینی
    const top = items.slice(0, 3);
    const listHtml = top.map((it, idx) => {
      const percent = Math.round((it.val / totalAnswered) * 100);
      const label = typeLabel(it.key);
      return `
        <div class="prediction-item" style="--i:${idx}">
          <div class="prediction-rank">${idx + 1}</div>
          <div class="prediction-info">
            <div class="prediction-name">${escapeHtml(label)}</div>
            <div class="prediction-title">${percent}% از انتخاب‌ها</div>
          </div>
          <div class="prediction-bar-container" aria-hidden="true">
            <div class="prediction-bar" style="width:${percent}%"></div>
          </div>
          <div class="prediction-percent">${percent}%</div>
        </div>
      `;
    }).join("");

    gaugeContent.innerHTML = `<div class="gauge-predictions">${listHtml}</div>`;
  }

  function typeLabel(key) {
    switch (key) {
      case "diplomatic": return "دیپلمات";
      case "charismatic": return "کاریزماتیک";
      case "strategic": return "استراتژیک";
      case "authoritarian": return "اقتدارگرا";
      case "logical": return "تحلیل‌گر";
      default: return key;
    }
  }

  // ---------- محاسبه و نمایش نتیجه ----------
  function computeResult() {
    // صفر کن
    for (let k in counts) counts[k] = 0;
    // شمارش از answers
    answers.forEach((ans, i) => {
      if (ans === null) return;
      const opt = questions[i].options[ans];
      if (!opt || !opt.type) return;
      counts[opt.type] = (counts[opt.type] || 0) + 1;
    });
  }

  function showResult() {
    // اگر هیچ پاسخی نبود، هشدار و برگرد
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    if (total === 0) {
      showToast("ابتدا حداقل یک سوال رو پاسخ بده.");
      return;
    }

    // محاسبه درصدها بر اساس تعداد پاسخ‌ها
    const percentages = {};
    for (let k in counts) {
      percentages[k] = Math.round((counts[k] / total) * 100);
    }

    // تعیین نوع غالب (بر اساس بیشترین درصد)
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    const primary = sorted[0];

    // انتخاب متا
    const meta = typeMeta[primary] || typeMeta["strategic"];

    // پر کردن بخش نتایج
    resultName.innerText = meta.name;
    resultTitle.innerText = meta.title;
    resultDescription.innerText = meta.desc;
    resultImage.src = meta.img;
    matchPercent.innerText = `${Math.max(percentages[primary], 5)}%`; // مقدار نمایشی

    // صفات: بر اساس درصدها
    traitsGrid.innerHTML = `
      ${Object.keys(percentages).filter(k => k !== "logical").map(k => `
        <div class="trait-item">
          <div class="trait-name">${escapeHtml(typeLabel(k))}</div>
          <div class="trait-bar"><div class="trait-fill" style="--fill-width:${percentages[k]}%; width:0;" data-width="${percentages[k]}%"></div></div>
          <div class="trait-score">${percentages[k]}%</div>
        </div>
      `).join("")}
    `;

    // نمایش بخش نتیجه و پنهان کردن سوالات
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    // ساخت نمودار
    buildChart(percentages);
    // انیمیت پر شدن بارها
    setTimeout(() => {
      document.querySelectorAll(".trait-fill").forEach(el => {
        const w = el.dataset.width || "0%";
        el.style.width = w;
      });
    }, 50);
  }

  // ---------- نمودار شخصیتی (Chart.js) ----------
  function buildChart(percentages) {
    const labels = ["دیپلمات", "کاریزماتیک", "استراتژیک", "اقتدارگرا", "تحلیل‌گر"];
    const data = [
      percentages.diplomatic || 0,
      percentages.charismatic || 0,
      percentages.strategic || 0,
      percentages.authoritarian || 0,
      percentages.logical || 0
    ];

    // نابود کردن چارت قبلی
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }

    chartInstance = new Chart(personalityChartCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "درصدهای شما",
          data: data,
          // Chart.js default colors will be used (ما رنگ مشخص نکردیم مطابق قوانین)
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    });
  }

  // ---------- دانلود تصویر (html2canvas) ----------
  window.downloadAsImage = async function downloadAsImage() {
    const preview = document.getElementById("shareableContent");
    if (!preview) return showToast("محتوا برای دانلود پیدا نشد.");

    showToast("در حال ساخت تصویر...");
    try {
      const canvas = await html2canvas(preview, { scale: 2, useCORS: true, allowTaint: true });
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "result.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast("تصویر ساخته شد و دانلود شد.");
    } catch (err) {
      console.error(err);
      showToast("خطا در ساخت تصویر. اگر تصویرها بارگذاری نشده‌اند، ابتدا تصاویر موجود را در پوشه assets قرار بده.");
    }
  };

  // ---------- کپی نتیجه ----------
  window.shareResult = function shareResult() {
    // متن خلاصه نتیجه برای کپی
    const text = `${resultName.innerText} — ${resultTitle.innerText}\n${resultDescription.innerText}\nدرصد تطابق: ${matchPercent.innerText}`;
    navigator.clipboard?.writeText(text).then(() => {
      showToast("نتیجه کپی شد. می‌تونی در پیام‌رسان بچسبونیش.");
    }).catch(() => {
      showToast("کپی نشد؛ لطفاً دستی کپی کن.");
    });
  };

  // ---------- راه‌اندازی اولیه (intro) ----------
  // نمایش صفحه اول تا زمانی که کاربر شروع کنه
  (function init() {
    // اگر توی intro هستیم، نکنه راه‌اندازی نشده باشه
    // اضافه کردن رندر اولیه سوال اولِ مخفی برای بار اول
    // (بدون اینکه صفحه quiz نمایش داده شه)
    renderGaugePlaceholder();
  })();

  // ---------- توست (پیغام کوتاه) ----------
  function showToast(txt, timeout = 2200) {
    // حذف توست قبلی اگر وجود داشت
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const div = document.createElement("div");
    div.className = "toast";
    div.innerText = txt;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add("visible"), 50);
    setTimeout(() => {
      div.classList.remove("visible");
      setTimeout(() => div.remove(), 250);
    }, timeout);
  }

  // ---------- کمک‌ها ----------
  function escapeHtml(unsafe) {
    if (!unsafe && unsafe !== 0) return "";
    return String(unsafe)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ---------- ری‌استارت ----------
  window.restartTest = function restartTest() {
    // ریست کامل
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    for (let k in counts) counts[k] = 0;
    currentQ = 0;
    // نمایش دوباره intro یا مستقیم quiz بسته به خواست
    resultScreen.classList.remove("active");
    quizScreen.classList.add("active");
    renderQuestion();
    updateProgress();
    renderGaugePlaceholder();
    showToast("آزمون ری‌ست شد. موفق باشی!");
  };

  // ---------- وقتی کاربر از صفحه نتیجه میاد بیرون (مثلاً back) ----------
  // (اختیاری) اگر خواستی می‌تونم این قسمت رو بهبود بدم

})();
