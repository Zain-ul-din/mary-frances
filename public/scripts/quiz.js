(() => {
  const quizSections = Array.from(document.querySelectorAll(".quiz"));
  const quizTaskSection = document.querySelector(".quiz-task");
  const resetBtn = document.querySelector(".back-btn");
  const submitBtn = quizSections.at(-1).querySelector("button");

  let currentQuiz = 0;

  const previousHeadingContent = {
    para: undefined,
    heading: undefined
  };

  const resetQuiz = () => {
    currentQuiz = 0;
    quizTaskSection.classList.add("hidden");
    renderQuizSections();
    const questionSection = document.querySelector(".question");
    const heading = questionSection.querySelector("h2");
    const para = questionSection.querySelector("p");
    heading.textContent = previousHeadingContent.heading;
    para.textContent = previousHeadingContent.para;
  };

  resetBtn.onclick = () => {
    resetQuiz();
  };

  const renderQuizSections = (firstTime = false) => {
    quizSections.forEach((section, i) => {
      if (currentQuiz == i) section.classList.remove("hidden");
      else if (!section.classList.contains("hidden"))
        section.classList.add("hidden");
    });

    if (matchMedia("(width >= 1000px)") && !firstTime) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight, // Scrolls to the bottom of the page
          behavior: "smooth" // Smooth scrolling
        });
      }, 350);
    }
  };

  const announceResult = () => {
    const questionSection = document.querySelector(".question");
    const heading = questionSection.querySelector("h2");
    const para = questionSection.querySelector("p");

    previousHeadingContent.heading = heading.textContent;
    previousHeadingContent.para = para.textContent;

    currentQuiz = -1;
    renderQuizSections();

    heading.textContent = "The results are in!";
    para.textContent = "You should make:";

    quizTaskSection.classList.remove("hidden");
  };

  submitBtn.onclick = () => {
    announceResult();
  };

  quizSections.forEach((sec, i) => {
    const btn = sec.querySelector(".next-btn");
    if (!btn) return;
    btn.onclick = () => {
      currentQuiz = i + 1;
      renderQuizSections();
    };
  });

  renderQuizSections(true);
})();
