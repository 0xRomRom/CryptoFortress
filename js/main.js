"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navbar = document.querySelector(".nav-section");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Navigation upon scroll transparent
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
