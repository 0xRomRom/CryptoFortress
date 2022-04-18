"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const walletID = document.querySelector(".wallet-id");
const copyButton = document.querySelector(".copy");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

copyButton.addEventListener("click", () => {
  const walletID = document.querySelector(".wallet-id");
  walletID.select();
  walletID.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(walletID.value)
    .then(() => {
      alert("Thanks so much!");
    })
    .catch(() => {
      alert("something went wrong");
    });
});
