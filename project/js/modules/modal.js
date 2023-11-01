function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "Escape") {
        closeModal(modalSelector);
      }
    },
    { once: true }
  );
  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });
  clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "none";
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigers = document.querySelectorAll(triggerSelector);
        // modal = document.querySelector(modalSelector);

  modalTrigers.forEach((triger) => {
    triger.addEventListener("click", () => {
      openModal(modalSelector, modalTimerId);
    });
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};