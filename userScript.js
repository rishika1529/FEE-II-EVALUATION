"use strict";

// NAVBAR MENU
const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".navMenu");
menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("hide");
  console.log(menuList);
  console.log("click");
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
