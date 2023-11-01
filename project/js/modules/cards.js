import { getResource } from "../services/services";

function cards() {
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

  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        title,
        descr,
        img,
        altimg,
        price,
        ".menu .container"
      ).render();
    });
  });
}

export default cards;