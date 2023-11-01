function tabs(tabsSelector, tabsContent, tabsButtons, tabsActiveClass, btnsActiveClass ) {
  const tabs = document.querySelectorAll(tabsSelector),
        tabsControls = document.querySelector(tabsContent),
        tabBtn = document.querySelectorAll(tabsButtons);

  function hideTabs() {
    tabs.forEach((tab) => {
      tab.classList.remove(tabsActiveClass);
    });
  }

  function showTabs(i = 0) {
    tabs[i].classList.add(tabsActiveClass);
  }

  tabsControls.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains(tabsButtons.replace(/./, ""))) {
      tabBtn.forEach((btn, i) => {
        btn.classList.remove(btnsActiveClass);
        if (btn == e.target) {
          btn.classList.add(btnsActiveClass);
          hideTabs();
          showTabs(i);
        }
      });
    }
  });
}

export default tabs;
