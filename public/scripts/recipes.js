(() => {
  let activeTab = 0;
  const tabs = Array.from(document.querySelectorAll(".tab-item"));
  const render = () => {
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
