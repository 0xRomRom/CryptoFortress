"use strict";

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-section");
const navMenu = document.querySelector(".nav-links");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Navigation upon scroll remove
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
