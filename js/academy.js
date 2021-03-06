"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const startButton = document.querySelector(".start-button");
const launchButton = document.querySelector(".launch-button");
const buttonsMenu = document.querySelector(".buttons-menu");
const displayValue = document.querySelector(".text-call1");
const displayDataLoading = document.querySelector(".loading-data");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

//Arcade machine functionality
startButton.classList.remove("hide-link");
startButton.addEventListener("click", () => {
  startButton.classList.add("hide-link");
  launchButton.classList.remove("hide-link");
  displayValue.textContent = "";
  displayDataLoading.classList.remove("hide-link");
  launchButton.value = "Parsing";
  launchButton.disabled = true;
  setTimeout(function () {
    launchButton.value = "launch";
    launchButton.style.color = "white";
    launchButton.style.backgroundColor = "red";
    displayDataLoading.classList.add("hide-link");
    launchButton.disabled = false;
    displayValue.textContent = "Ready to learn?";
  }, 3000);
});

launchButton.addEventListener("click", () => {
  displayValue.textContent = "LFG then!";
  displayValue.classList.add("text-fade");
  setTimeout(function () {
    displayValue.textContent = "";
    launchButton.disabled = true;
    buttonsMenu.classList.remove("hide-link");
  }, 3000);
});
