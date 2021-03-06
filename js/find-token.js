"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const addressInput = document.querySelector(".address-input");
const searchButton = document.querySelector(".search-button");
const resetButton = document.querySelector(".reset-button");
const blockchainOptions = document.querySelector(".blockchains");
const coinName = document.querySelector(".coin-name");
const coinImage = document.querySelector(".coin-image");
const coinRank = document.querySelector(".coin-rank");
const coinTicker = document.querySelector(".coin-ticker");
const questionMark = document.querySelector(".question-mark");
const questionText = document.querySelector(".question-text");
const outputTitle = document.querySelector(".output-title");
const outputBox = document.querySelector(".output-box");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

const result = (name, image, rank, ticker) => {
  coinName.insertAdjacentHTML("beforeend", name);
  rank === null
    ? coinRank.insertAdjacentHTML("beforeend", "Unranked")
    : coinRank.insertAdjacentHTML("beforeend", rank);
  coinTicker.insertAdjacentHTML("beforeend", ticker);
  coinImage.src = image;
  searchButton.disabled = true;
  searchButton.style.pointerEvents = "none";
  searchButton.classList.remove("btn-bg");
  searchButton.style.color = "black";
  coinName.classList.remove("hidden");
  coinRank.classList.remove("hidden");
  coinTicker.classList.remove("hidden");
  coinImage.classList.remove("hidden");
  questionMark.classList.add("hidden");
  questionText.classList.add("hidden");
  searchButton.style.cursor = "initial";
  outputTitle.classList.remove("hidden");
  outputBox.classList.add("box-shadow");
};

searchButton.addEventListener("click", () => {
  let value;
  const renderResult = function (blockchain, address) {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${blockchain}/contract/${address}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        result(data.name, data.image.small, data.market_cap_rank, data.symbol);
      });
  };
  value = addressInput.value;
  renderResult(blockchainOptions.value, value);
});

resetButton.addEventListener("click", () => {
  addressInput.value = "";
  blockchainOptions.value = "avalanche";
  coinName.classList.add("hidden");
  coinName.textContent = "Token: ";
  coinRank.classList.add("hidden");
  coinRank.textContent = "Rank: ";
  coinTicker.classList.add("hidden");
  coinTicker.textContent = "Ticker: $";
  coinImage.classList.add("hidden");
  outputTitle.classList.add("hidden");
  questionMark.classList.remove("hidden");
  searchButton.disabled = false;
  searchButton.style.pointerEvents = "initial";
  searchButton.classList.add("btn-bg");
  searchButton.style.color = "white";
  searchButton.style.cursor = "pointer";
  questionText.classList.remove("hidden");
  outputBox.classList.remove("box-shadow");
});

(function () {
  setInterval(function () {
    const randomNum1 = Math.trunc(Math.random() * 255 + 1);
    const randomNum2 = Math.trunc(Math.random() * 255 + 1);
    const randomNum3 = Math.trunc(Math.random() * 255 + 1);
    questionMark.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
  }, 1000);
})();
