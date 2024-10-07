"use strict";

// selectors
const getPassword = document.querySelector("#input__password");
const getRepeatedPassword = document.querySelector("#input__repeatPassword");
const btnSubmit = document.querySelector(".signupbtn");

btnSubmit.addEventListener("click", function (e) {
  if (
    getPassword &&
    getRepeatedPassword &&
    getPassword.value !== getRepeatedPassword.value
  ) {
    e.preventDefault();
    alert("Passwords didn't match");
  }
});
