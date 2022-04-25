"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});
