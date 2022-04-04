"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navbar = document.querySelector(".nav-section");
const joinUsBtn = document.querySelector(".cta1");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
  navMenu.innerHTML = `<li class="nav-link">
    <a href="#" class="underline">Home</a>
  </li>
  <li class="nav-link">
    <a href="#" class="underline">Crypto News</a>
  </li>
  <li class="nav-link">
    <a href="#" class="underline">Tutorials</a>
  </li>
  <li class="nav-link">
    <a href="#" class="underline">Project Review</a>
  </li><li class="nav-link">
  <a href="#" class="underline">Quick Links</a>
</li><li class="nav-link">
<a href="https://discord.gg/hBwmkP7rCe" class="underline" target="_blank">Join us</a>
</li>
  `;
});

//Navigation upon scroll transparent
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
