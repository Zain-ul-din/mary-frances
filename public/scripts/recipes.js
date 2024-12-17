(() => {
  let activeTab = 0;
  const tabs = Array.from(document.querySelectorAll(".tab-item"));
  const allSections = Array.from(document.querySelectorAll("article section"));
  let animatingFirstTime = true;

  const renderSection = (section, recipe) => {
    const heading = section.querySelector("h2");
    heading.textContent = recipe.label;

    Array.from(section.querySelectorAll(".cards > div")).forEach((card, i) => {
      if (!animatingFirstTime) {
        card.classList.remove("flip-animation");
        setTimeout(() => {
          card.classList.add("flip-animation");
        }, 20);
      }

      const heading = card.querySelector("h3");
      const badge = card.querySelector(".badge");
      const img = card.querySelector("img");

      card.onclick = () => {
        window.location.href =
          recipe.cards[i].link || links["Queen of Hearts Tarts"];
      };

      heading.textContent = recipe.cards[i].title;
      badge.textContent = recipe.cards[i].label;
      img.src = recipe.cards[i].img;
      img.alt = recipe.cards[i].title;
    });

    animatingFirstTime = false;
  };

  const render = () => {
    const recipe = recipes[activeTab];

    allSections.forEach((section, i) => {
      renderSection(section, recipe[i]);
    });

    tabs.forEach((tab, i) => {
      tab.setAttribute("data-status", i == activeTab ? "active" : "disable");
    });
  };

  render();

  tabs.forEach((tab, i) => {
    tab.onclick = () => {
      activeTab = i;
      render();
    };
  });
})();
