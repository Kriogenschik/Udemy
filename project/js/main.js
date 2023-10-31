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
      if (e.target == modal || e.target.getAttribute("data-close") == "") {
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
        this.classes.forEach((className) => element.classList.add(className));
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

  const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getResource('http://localhost:3000/menu')
    .then(data => {
      data.forEach(({img, altimg, title, descr, price}) => {
        new MenuCard(title, descr, img, altimg, price, ".menu .container").render();
      })
    })

  //inputs request===================================================================

  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    succes: "Thanks, we`ll call you soon",
    failure: "Something going wrong(",
  };

  forms.forEach((form) => {
    bindpostData(form);
  });

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data
    });

    return await res.json();
  }

  function bindpostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showTnksModal(message.succes);
          statusMessage.remove();
        })
        .catch(() => {
          showTnksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showTnksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thksModal = document.createElement("div");
    thksModal.classList.add("modal__dialog");
    thksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector(".modal").append(thksModal);
    setTimeout(() => {
      thksModal.remove();
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }

  // slider ===================================================================================

  const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        nextBtn = document.querySelector('.offer__slider-next');
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slideWraper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        sliderWidth = window.getComputedStyle(slideWraper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s';

  slideWraper.style.overflow = 'hidden';

  slides.forEach(slide => slide.style.width = sliderWidth);

  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
        dots = [];

  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  nextBtn.addEventListener('click', () => {
    if (offset == +sliderWidth.slice(0, sliderWidth.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +sliderWidth.slice(0, sliderWidth.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  })

  prevBtn.addEventListener('click', () => {
    if (offset == 0) {
     offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (slides.length - 1);
    } else {
      offset -= +sliderWidth.slice(0, sliderWidth.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = +sliderWidth.slice(0, sliderWidth.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    })
  })

});
