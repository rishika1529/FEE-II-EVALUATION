// NAVBAR MENU
const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".navMenu");
menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("hide");
  // console.log(menuList);
  // console.log("click");
});

const menu_i = document.querySelector(".menui");
document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (
    e.target !== menuList &&
    e.target !== menuIcon &&
    e.target !== menu_i &&
    menuList.classList.contains("hide")
  ) {
    // console.log("here");
    menuList.classList.toggle("hide");
  }
});

// -------------------------------------------------------

// TABBED CONTENT
const recContainer = document.querySelector(".rec__tabs--container");
const recTabs = document.querySelectorAll(".rec__tab");
const recContents = document.querySelectorAll(".rec__content");

recContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".rec__tab");

  if (!clicked) return;

  const n = clicked.dataset.tab;

  recTabs.forEach((t) => t.classList.remove("rec__tab--active"));
  recContents.forEach((c) => c.classList.remove("rec__content--active"));

  document
    .querySelector(`.rec__content--${n}`)
    .classList.add("rec__content--active");
  clicked.classList.add("rec__tab--active");
});
