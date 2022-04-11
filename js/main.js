"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navbar = document.querySelector(".nav-section");
const joinUsBtn = document.querySelector(".cta1");
//Animated header font letters
const letter1 = document.querySelector(".header-span1");
const letter2 = document.querySelector(".header-span2");
const letter3 = document.querySelector(".header-span3");
//Section 1 modal hover menu
const modal1Box = document.querySelector(".modal1-box");
const modal2Box = document.querySelector(".modal2-box");
const modal3Box = document.querySelector(".modal3-box");
const modal4Box = document.querySelector(".modal4-box");
const modal5Box = document.querySelector(".modal5-box");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modal5 = document.querySelector(".modal5");
const modal1Text = document.querySelector(".modal1-text");
const modal2Text = document.querySelector(".modal2-text");
const modal3Text = document.querySelector(".modal3-text");
const modal4Text = document.querySelector(".modal4-text");
const modal5Text = document.querySelector(".modal5-text");
//Offset for fade in
const section1Height = document.querySelector(".section1");
//Section 2 cta menu
const ctaExchange = document.querySelector(".cta-exchange");
const ctaExchangeNote = document.querySelector(".exchange-sidenote");
const ctaAcademy = document.querySelector(".cta-academy");
const ctaAcademyNote = document.querySelector(".academy-sidenote");
const ctaLegion = document.querySelector(".cta-legion");
const ctaLegionNote = document.querySelector(".legion-sidenote");

//Random headertext color function
(function () {
  setInterval(function () {
    const randomNum1 = Math.trunc(Math.random() * 255 + 1);
    const randomNum2 = Math.trunc(Math.random() * 255 + 1);
    const randomNum3 = Math.trunc(Math.random() * 255 + 1);
    letter1.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    letter2.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    letter3.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
  }, 1000);
})();

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
      <a href="#" class="underline">Academy</a>
    </li>
    <li class="nav-link">
      <a href="#" class="underline">Project Review</a>
    </li><li class="nav-link">
    <a href="#" class="underline">Quick Links</a>
  </li><li class="nav-link">
  <a href="#" class="underline">Join us</a>
  </li>
    `;
});

//Section1 fade in
window.addEventListener("scroll", () => {
  let content = document.querySelector(".section1");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  contentPosition < screenPosition
    ? content.classList.add("active")
    : content.classList.remove("active");
});

// Hover modals
//Modal (1
modal1Box.addEventListener("mouseover", () => {
  modal1.classList.add("modal1Animate");
  modal1Text.classList.add("opacity");
  modal1Text.style.visibility = "initial";
});

modal1Box.addEventListener("mouseleave", () => {
  modal1.classList.remove("modal1Animate");
  modal1Text.classList.remove("opacity");
  modal1Text.style.visibility = "hidden";
});

//Modal (2
modal2Box.addEventListener("mouseover", () => {
  modal2.classList.add("modal2Animate");
  modal2Text.classList.add("opacity");
  modal2Text.style.visibility = "initial";
});

modal2Box.addEventListener("mouseleave", () => {
  modal2.classList.remove("modal2Animate");
  modal2Text.classList.remove("opacity");
  modal2Text.style.visibility = "hidden";
});

//Modal (3
modal3Box.addEventListener("mouseover", () => {
  modal3.classList.add("modal3Animate");
  modal3Text.classList.add("opacity");
  modal3Text.style.visibility = "initial";
});

modal3Box.addEventListener("mouseleave", () => {
  modal3.classList.remove("modal3Animate");
  modal3Text.classList.remove("opacity");
  modal3Text.style.visibility = "hidden";
});

//Modal (4
modal4Box.addEventListener("mouseover", () => {
  modal4.classList.add("modal4Animate");
  modal4Text.classList.add("opacity");
  modal4Text.style.visibility = "initial";
});

modal4Box.addEventListener("mouseleave", () => {
  modal4.classList.remove("modal4Animate");
  modal4Text.classList.remove("opacity");
  modal4Text.style.visibility = "hidden";
});

//Modal (5
modal5Box.addEventListener("mouseover", () => {
  modal5.classList.add("modal5Animate");
  modal5Text.classList.add("opacity");
  modal5Text.style.visibility = "initial";
});

modal5Box.addEventListener("mouseleave", () => {
  modal5.classList.remove("modal5Animate");
  modal5Text.classList.remove("opacity");
  modal5Text.style.visibility = "hidden";
});

// Section2

ctaExchange.addEventListener("mouseover", () => {
  ctaExchangeNote.style.visibility = "initial";
  ctaExchangeNote.style.opacity = "1";
});

ctaExchange.addEventListener("mouseleave", () => {
  ctaExchangeNote.style.visibility = "hidden";
});

ctaAcademy.addEventListener("mouseover", () => {
  ctaAcademyNote.style.visibility = "initial";
  ctaAcademyNote.style.opacity = "1";
});

ctaAcademy.addEventListener("mouseleave", () => {
  ctaAcademyNote.style.visibility = "hidden";
});

ctaLegion.addEventListener("mouseover", () => {
  ctaLegionNote.style.visibility = "initial";
  ctaLegionNote.style.opacity = "1";
});

ctaLegion.addEventListener("mouseleave", () => {
  ctaLegionNote.style.visibility = "hidden";
});
