document.addEventListener("DOMContentLoaded", () => {

	//tabs 

	const tabs = document.querySelectorAll(".tabcontent"),
				tabsControls = document.querySelector(".tabheader__items"),
				tabBtn =  document.querySelectorAll(".tabheader__item");

	function hideTabs() {
		tabs.forEach (tab => {
			tab.classList.remove('tabcontent--active');
		})
	}

	function showTabs(i = 0) {
		tabs[i].classList.add('tabcontent--active');
	}

	tabsControls.addEventListener("click", (e) => {
		if(e.target && e.target.classList.contains('tabheader__item')) {
			tabBtn.forEach( (btn, i) => {
				btn.classList.remove('tabheader__item--active');
				if (btn == e.target) {
					btn.classList.add('tabheader__item--active');
					hideTabs();
					showTabs(i);
				}
			})
		}
	})
});
