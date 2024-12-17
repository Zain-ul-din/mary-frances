(() => {
  const quizSections = Array.from(document.querySelectorAll(".quiz"));
  const quizTaskSection = document.querySelector(".quiz-task");
  const resetBtn = document.querySelector(".back-btn");
  const submitBtn = quizSections.at(-1).querySelector("button");
  const answers = [];

  const populateDefaultAnswers = () => {
    Array.from(document.querySelectorAll('[data-status="active"]')).forEach(
      (ele, i) => {
        const value = ele.getAttribute("data-value");
        answers[i] = value;
      }
    );
  };
  populateDefaultAnswers();

  let currentQuiz = 0;

  quizSections.forEach((section, sectionIdx) => {
    const choices = Array.from(section.querySelectorAll(".choice"));

    choices.forEach((choice, idx) => {
      choice.onclick = () => {
        choices.forEach((c, i) => {
          if (i == idx) answers[sectionIdx] = c.getAttribute("data-value");
          c.setAttribute("data-status", i == idx ? "active" : "disable");
        });
      };
    });
  });

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
    populateDefaultAnswers();
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

    const potentialRecipes = answers
      .map(
        (category, i) =>
          recipes[i].find((recipe) => recipe.category === category).cards
      )
      .flat();
    const randomRecipe =
      potentialRecipes[Math.floor(potentialRecipes.length * Math.random())];

    document.querySelector(".task > h3").textContent = randomRecipe.title;
    document.querySelector(".task  img").src = randomRecipe.img;

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
