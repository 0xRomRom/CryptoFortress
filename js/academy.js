"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const startButton = document.querySelector(".start-button");
const launchButton = document.querySelector(".launch-button");
const displayValue = document.querySelector(".text-call1");
const displayDataLoading = document.querySelector(".loading-data");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

startButton.classList.remove("hide-link");
startButton.addEventListener("click", () => {
  launchButton.classList.remove("hide-link");
  startButton.classList.add("hide-link");
  displayValue.textContent = "";
  launchButton.value = "Parsing";
  displayDataLoading.classList.remove("hide-link");

  setTimeout(function () {
    launchButton.value = "launch";
    launchButton.style.color = "white";
    launchButton.style.backgroundColor = "red";
    displayDataLoading.classList.add("hide-link");
  }, 4000);
});
