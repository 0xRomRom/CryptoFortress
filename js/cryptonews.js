"use strict";

//Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const joinUsBtn = document.querySelector(".cta1");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");
const price4 = document.querySelector(".price4");
const price5 = document.querySelector(".price5");
const price6 = document.querySelector(".price6");
const price7 = document.querySelector(".price7");
const price8 = document.querySelector(".price8");
const change1 = document.querySelector(".change1");
const change2 = document.querySelector(".change2");
const change3 = document.querySelector(".change3");
const change4 = document.querySelector(".change4");
const change5 = document.querySelector(".change5");
const change6 = document.querySelector(".change6");
const change7 = document.querySelector(".change7");
const change8 = document.querySelector(".change8");

//Burger menu for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  joinUsBtn.classList.toggle("opacity");
});

const renderBitcoin = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price1.insertAdjacentHTML("beforeend", prices);
  change1.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change1.style.color = "green") : (change1.style.color = "red");
};

const render1 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderBitcoin(
        +data.bitcoin.usd.toFixed(0),
        +data.bitcoin.usd_24h_change.toFixed(2)
      );
    });
};
render1("bitcoin");

const renderEthereum = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price2.insertAdjacentHTML("beforeend", prices);
  change2.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change2.style.color = "green") : (change2.style.color = "red");
};

const render2 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderEthereum(
        +data.ethereum.usd.toFixed(0),
        +data.ethereum.usd_24h_change.toFixed(2)
      );
    });
};
render2("Ethereum");

const renderSolana = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price3.insertAdjacentHTML("beforeend", prices);
  change3.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change3.style.color = "green") : (change3.style.color = "red");
};

const render3 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderSolana(
        +data.solana.usd.toFixed(0),
        +data.solana.usd_24h_change.toFixed(2)
      );
    });
};
render3("Solana");

const renderBNB = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price4.insertAdjacentHTML("beforeend", prices);
  change4.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change4.style.color = "green") : (change4.style.color = "red");
};

const render4 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderBNB(
        +data.binancecoin.usd.toFixed(0),
        +data.binancecoin.usd_24h_change.toFixed(2)
      );
    });
};
render4("binancecoin");

const renderXRP = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price5.insertAdjacentHTML("beforeend", prices);
  change5.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change5.style.color = "green") : (change5.style.color = "red");
};

const render5 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderXRP(
        +data.ripple.usd.toFixed(2),
        +data.ripple.usd_24h_change.toFixed(2)
      );
    });
};
render5("ripple");

const renderADA = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price6.insertAdjacentHTML("beforeend", prices);
  change6.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change6.style.color = "green") : (change6.style.color = "red");
};

const render6 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderADA(
        +data.cardano.usd.toFixed(2),
        +data.cardano.usd_24h_change.toFixed(2)
      );
    });
};
render6("cardano");

const renderLINK = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price7.insertAdjacentHTML("beforeend", prices);
  change7.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change7.style.color = "green") : (change7.style.color = "red");
};

const render7 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderLINK(
        +data.link.usd.toFixed(1),
        +data.link.usd_24h_change.toFixed(2)
      );
    });
};
render7("link");

const renderDOT = function (price, change) {
  const prices = `
  ${price}
    `;
  const changes = `${change > 0 ? "+" : ""}${change}`;
  price8.insertAdjacentHTML("beforeend", prices);
  change8.insertAdjacentHTML("afterbegin", changes);
  change >= 0 ? (change8.style.color = "green") : (change8.style.color = "red");
};

const render8 = function (coin) {
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderDOT(
        +data.polkadot.usd.toFixed(1),
        +data.polkadot.usd_24h_change.toFixed(2)
      );
    });
};
render8("polkadot");
