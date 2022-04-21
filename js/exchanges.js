"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const content = document.querySelector(".exchange1");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

window.addEventListener("scroll", () => {
  const content1 = document.querySelector(".exchange1");
  const content2 = document.querySelector(".exchange2");
  const content3 = document.querySelector(".exchange3");
  const content4 = document.querySelector(".exchange4");
  const content5 = document.querySelector(".exchange5");
  const content6 = document.querySelector(".wallet-box");
  const content7 = document.querySelector(".metamask");
  const content8 = document.querySelector(".phantom");
  let contentTop1 = content1.getBoundingClientRect().bottom;
  let contentTop2 = content2.getBoundingClientRect().bottom;
  let contentTop3 = content3.getBoundingClientRect().bottom;
  let contentTop4 = content4.getBoundingClientRect().bottom;
  let contentTop5 = content5.getBoundingClientRect().bottom;
  let contentTop6 = content6.getBoundingClientRect().bottom;
  let contentTop7 = content7.getBoundingClientRect().bottom;
  let contentTop8 = content8.getBoundingClientRect().bottom;
  let screenPosition = window.innerHeight;
  console.log(contentTop1);
  if (contentTop1 < screenPosition) {
    content1.classList.add("active");
  }
  if (contentTop2 < screenPosition) {
    content2.classList.add("active");
  }
  if (contentTop3 < screenPosition) {
    content3.classList.add("active");
  }
  if (contentTop4 < screenPosition) {
    content4.classList.add("active");
  }
  if (contentTop5 < screenPosition) {
    content5.classList.add("active");
  }
  if (contentTop6 < screenPosition) {
    content6.classList.add("active");
  }
  if (contentTop7 < screenPosition) {
    content7.classList.add("active");
  }
  if (contentTop8 < screenPosition) {
    content8.classList.add("active");
  }
});
