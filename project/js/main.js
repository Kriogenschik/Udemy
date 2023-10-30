document.addEventListener("DOMContentLoaded", () => {
  //tabs ====================================================================

  const tabs = document.querySelectorAll(".tabcontent"),
    tabsControls = document.querySelector(".tabheader__items"),
    tabBtn = document.querySelectorAll(".tabheader__item");

  function hideTabs() {
    tabs.forEach((tab) => {
      tab.classList.remove("tabcontent--active");
    });
  }

  function showTabs(i = 0) {
    tabs[i].classList.add("tabcontent--active");
  }

  tabsControls.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabBtn.forEach((btn, i) => {
        btn.classList.remove("tabheader__item--active");
        if (btn == e.target) {
          btn.classList.add("tabheader__item--active");
          hideTabs();
          showTabs(i);
        }
      });
    }
  });

  // timer===========================================================================

  const deadLine = "2023-12-31";

  function getTimeRemainig(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num <= 0) {
      return 0;
    } else if (num < 10) {
      return `0${num}`;
    } else return num;
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemainig(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);

  //modal ================================================================================

  const modalTrigers = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.code === "Escape") {
          closeModal(modal);
        }
      },
      { once: true }
    );
    modal.addEventListener("click", (e) => {
      if (e.target == modal || e.target.getAttribute('data-close') == '') {
        closeModal(modal);
      }
    });
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  modalTrigers.forEach((triger) => {
    triger.addEventListener("click", () => {
      openModal(modal);
    });
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  //menu cards =============================================================================================================

  class MenuCard {
    constructor(name, text, img, alt, price, parentSelector, ...classes) {
      this.name = name;
      this.text = text;
      this.img = img;
      this.alt = alt;
      this.price = price;
			this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 36;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
			if (!this.classes.length) {
				element.classList.add("menu__item");
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
      element.innerHTML = `
				<img src=${this.img} alt=${this.alt}>
				<h3 class="menu__item-subtitle">Меню “${this.name}”</h3>
				<div class="menu__item-descr">${this.text}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "Фитнес",
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством',
    "img/tabs/vegy.jpg",
    "vegy",
    10,
		".menu .container"
  ).render();

  new MenuCard(
    "Премиум",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    "img/tabs/elite.jpg",
    "elite",
    25,
		".menu .container"
  ).render();

  new MenuCard(
    "Постное",
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    "img/tabs/post.jpg",
    "post",
    17,
		".menu .container"
  ).render();

  //inputs request===================================================================

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    succes: 'Thanks, we`ll call you soon',
    failure: 'Something going wrong('
  }

  forms.forEach( form => {
    postData(form)
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');

      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });

      const json = JSON.stringify(object);

      request.send(json);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showTnksModal(message.succes);
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          showTnksModal(message.failure);
        }
      })
    })
  }

  function showTnksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thksModal = document.createElement('div');
    thksModal.classList.add('modal__dialog');
    thksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thksModal);
    setTimeout(() => {
      thksModal.remove();
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000)
  }
});
