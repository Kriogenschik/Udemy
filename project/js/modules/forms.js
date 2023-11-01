import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    succes: "Thanks, we`ll call you soon",
    failure: "Something going wrong(",
  };

  forms.forEach((form) => {
    bindpostData(form);
  });

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
    openModal('.modal', modalTimerId);

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
      closeModal('.modal');
    }, 4000);
  }
}

export default forms;