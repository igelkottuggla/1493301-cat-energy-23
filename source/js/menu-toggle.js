"use strict";

const headerEl = document.querySelector(".header");

if (headerEl) {
  const navMenu = headerEl.querySelector(".header__nav");
  const toggleSpan = headerEl.querySelector(".header__nav-burger");
  const toggleBtn = headerEl.querySelector(".header__nav-button");

  toggleBtn.addEventListener("click", () => {
    if (
      navMenu.classList.contains("header__nav--opened") ||
      navMenu.classList.contains("no--js")
    ) {
      navMenu.classList.add("header__nav--closed");
      navMenu.classList.remove("no--js");
      navMenu.classList.remove("header__nav--opened");
      toggleSpan.classList.remove("header__nav-burger--closed");
    } else {
      navMenu.classList.add("header__nav--opened");
      navMenu.classList.remove("header__nav--closed");

      toggleSpan.classList.add("header__nav-burger--closed");
    }
  });
}
