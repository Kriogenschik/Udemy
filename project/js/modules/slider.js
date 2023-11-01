function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totalCounter,
  currentCounter,
  wrapper,
  field,
}) {
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prevBtn = document.querySelector(prevArrow),
    nextBtn = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slideWraper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    sliderWidth = window.getComputedStyle(slideWraper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s";

  slideWraper.style.overflow = "hidden";

  slides.forEach((slide) => (slide.style.width = sliderWidth));

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.classList.add("carousel-indicators");
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
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
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

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  function addZeroToSliderNumb(num) {
    if (slides.length < 10) {
      num.textContent = `0${slideIndex}`;
    } else {
      num.textContent = slideIndex;
    }
  }

  function makeDotActive() {
    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  }

  nextBtn.addEventListener("click", () => {
    if (offset == deleteNotDigits(sliderWidth) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(sliderWidth);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    addZeroToSliderNumb(current);
    makeDotActive();
  });

  prevBtn.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(sliderWidth) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(sliderWidth);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    addZeroToSliderNumb(current);
    makeDotActive();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = deleteNotDigits(sliderWidth) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      addZeroToSliderNumb(current);
      makeDotActive();
    });
  });
}

export default slider;
