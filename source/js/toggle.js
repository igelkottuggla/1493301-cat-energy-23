const exampleModels = document.querySelector(".example__models");

if(exampleModels) {
  const catBefore = document.querySelector(".models__before");
  const catAfter = document.querySelector(".models__after");
  const btnBefore = document.querySelector(".slider__button--before");
  const range = document.querySelector(".slider__input");
  const btnAfter = document.querySelector(".slider__button--after");
  const imgsContainer = document.querySelector(".models__images");

  const imgsContainerWidth = imgsContainer.getBoundingClientRect().width;
  const mobileMaxMediaQuery = 767;

  if (window.innerWidth <= mobileMaxMediaQuery) {
    btnBefore.addEventListener("click", () => {
      catBefore.style.display = "block";
      catAfter.style.display = "none";
      range.value = 0;
    });

    btnAfter.addEventListener("click", () => {
      catBefore.style.display = "none";
      catAfter.style.display = "block";
      range.value = 100;
    });

    range.addEventListener("input", () => {
      if (range.value === "0") {
        catBefore.style.display = "block";
        catAfter.style.display = "none";
      } else {
        catBefore.style.display = "none";
        catAfter.style.display = "block";
      }
    });
  } else {
      btnBefore.addEventListener("click", () => {
        catBefore.style.width = `${imgsContainerWidth}px`;
        catAfter.style.width = 0 + "%";
        range.value = 0;
      });

      btnAfter.addEventListener("click", () => {
        catBefore.style.width = 0;
        range.value = 100;
      });

      range.addEventListener("input", () => {
        catBefore.style.width = +range.value + "%";
      });
  }
}
