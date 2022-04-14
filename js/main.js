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
const continueButton = document.querySelector(".fa-circle-arrow-down");
//Offset for fade in
const section1Height = document.querySelector(".section1");
const section2Height = document.querySelector(".section2");
//Section 2 cta menu
const ctaExchange = document.querySelector(".cta-exchange");
const button1Padding = document.querySelector(".button1-padding");
const ctaExchangeNote = document.querySelector(".exchange-sidenote");
const signUpSpan = document.querySelector(".sec2-span1");
//
const ctaAcademy = document.querySelector(".cta-academy");
const button2Padding = document.querySelector(".button2-padding");
const ctaAcademyNote = document.querySelector(".academy-sidenote");
const getEducatedSpan = document.querySelector(".sec2-span2");
//
const ctaLegion = document.querySelector(".cta-legion");
const ctaLegionNote = document.querySelector(".legion-sidenote");
const button3Padding = document.querySelector(".button3-padding");
const becomePartSpan = document.querySelector(".sec2-span3");

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

//Section1 fade in/out
window.addEventListener("scroll", () => {
  const content = document.querySelector(".section1");
  const continueButton = document.querySelector(".fa-circle-arrow-down");
  let contentTop = content.getBoundingClientRect().top;
  let contentBottom = content.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;
  if (contentTop < screenPosition) {
    content.classList.add("active");
  }
  if (!(contentTop < screenPosition)) {
    content.classList.remove("active");
    continueButton.style.visibility = "hidden";
  }

  if (contentBottom < 133) {
    content.classList.remove("active");
    continueButton.style.visibility = "hidden";
  }
});

// //Section2 fade in/out
window.addEventListener("scroll", () => {
  const content = document.querySelector(".section2");
  let contentTop = content.getBoundingClientRect().top;
  let contentBottom = content.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;
  console.log(screenPosition);
  contentTop < screenPosition
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
  continueButton.style.visibility = "initial";
});

modal5Box.addEventListener("mouseleave", () => {
  modal5.classList.remove("modal5Animate");
  modal5Text.classList.remove("opacity");
  modal5Text.style.visibility = "hidden";
});

// Section2

button1Padding.addEventListener("mouseover", () => {
  ctaExchangeNote.style.visibility = "initial";
  ctaExchangeNote.style.opacity = "1";
  ctaExchange.style.color = "white";
  signUpSpan.classList.add("hover-glow");
});

button1Padding.addEventListener("mouseleave", () => {
  ctaExchangeNote.style.visibility = "hidden";
  ctaExchange.style.color = "black";
  signUpSpan.classList.remove("hover-glow");
});

button2Padding.addEventListener("mouseover", () => {
  ctaAcademyNote.style.visibility = "initial";
  ctaAcademyNote.style.opacity = "1";
  ctaAcademy.style.color = "white";
  getEducatedSpan.classList.add("hover-glow");
});

button2Padding.addEventListener("mouseleave", () => {
  ctaAcademyNote.style.visibility = "hidden";
  ctaAcademy.style.color = "black";
  getEducatedSpan.classList.remove("hover-glow");
});

button3Padding.addEventListener("mouseover", () => {
  ctaLegionNote.style.visibility = "initial";
  ctaLegionNote.style.opacity = "1";
  ctaLegion.style.color = "white";
  becomePartSpan.classList.add("hover-glow");
});

button3Padding.addEventListener("mouseleave", () => {
  ctaLegionNote.style.visibility = "hidden";
  ctaLegion.style.color = "black";
  becomePartSpan.classList.remove("hover-glow");
});
