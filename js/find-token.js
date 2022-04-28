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
  coinName.classList.remove("hidden");
  coinRank.classList.remove("hidden");
  coinTicker.classList.remove("hidden");
  coinImage.classList.remove("hidden");
  questionMark.classList.add("hidden");
  questionText.classList.add("hidden");
  searchButton.style.cursor = "initial";
  outputTitle.classList.remove("hidden");
};

searchButton.addEventListener("click", () => {
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
  // console.log(blockchainOptions.value);
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
  searchButton.style.cursor = "pointer";
  questionText.classList.remove("hidden");
});

(function () {
  setInterval(function () {
    const randomNum1 = Math.trunc(Math.random() * 255 + 1);
    const randomNum2 = Math.trunc(Math.random() * 255 + 1);
    const randomNum3 = Math.trunc(Math.random() * 255 + 1);
    questionMark.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    questionMark.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
    questionMark.style.color = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
  }, 1000);
})();

// const renderBitcoin = function (price, change) {
//   const prices = `
//   ${price}
//     `;
//   const changes = `${change > 0 ? "+" : ""}${change}`;
//   price1.insertAdjacentHTML("beforeend", prices);
//   change1.insertAdjacentHTML("afterbegin", changes);
//   change >= 0 ? (change1.style.color = "green") : (change1.style.color = "red");
// };

// const render1 = function (coin) {
//   fetch(
//     `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderBitcoin(
//         +data.bitcoin.usd.toFixed(0),
//         +data.bitcoin.usd_24h_change.toFixed(2)
//       );
//     });
// };
// render1("bitcoin");
