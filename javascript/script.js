"use strict";

const closeButton = document.querySelector(".close");
const showButton = document.querySelectorAll(".show-modal");
const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < showButton.length; i++)
  showButton[i].addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (param) {
  if (param.key === "Escape") {
    if (!modalWindow.classList.contains("hidden")) {
      closeModal();
    }
  }
});
