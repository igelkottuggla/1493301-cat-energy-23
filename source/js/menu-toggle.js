"use strict";

const headerEl = document.querySelector(".header");
const toggleBtn = document.querySelector(".header__nav-button");

if (headerEl) {
  headerEl.classList.remove("header--no-js");

  toggleBtn.addEventListener("click", () => {
    headerEl.classList.toggle("header--opened");
  });
}
