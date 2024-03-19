let donutCount = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;
let donutsPerClick = 1;

addDonut = () => {
  if (autoClickerCount == 0) {
    donutCount += 1;
  } else {
    donutCount += autoClickerCount;
  }
};

addAutoClicker = () => {
  if (donutCount >= autoClickerCost) {
    autoClickerCount += 1;
    donutCount -= autoClickerCost;
  } else {
    console.log("You do not have enough donuts to purchase an auto clicker.");
  }
};

resetGame = () => {
  donutCount = 0;
  autoClickerCount = 0;
  autoClickerCost = 100;
  donutsPerClick = 1;
};

document.addEventListener("DOMContentLoaded", function () {
  const developerLink = document.getElementById("developer-dropdown");
  const developerModal = document.getElementById("developer-modal");
  const companyInfoLink = document.getElementById("company-info-link");
  const companyInfoModal = document.getElementById("company-info-modal");

  developerLink.addEventListener("click", function () {
    developerModal.style.display = "block";
  });

  companyInfoLink.addEventListener("click", function () {
    companyInfoModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target === developerModal) {
      developerModal.style.display = "none";
    }
    if (event.target === companyInfoModal) {
      companyInfoModal.style.display = "none";
    }
  });
});

const donutCountElement = document.querySelector(".donutCount");
const donutButton = document.querySelector(".donutButton");
const autoClickerCountElement = document.querySelector(".autoClickerCount");
const autoClickerButton = document.querySelector(".autoClickerButton");
const autoClickerCostElement = document.querySelector(".autoClickerCost");
const resetGameButton = document.querySelector(".resetGameButton");

const updateGame = () => {
  donutCountElement.innerText = donutCount;
  autoClickerCountElement.innerText = autoClickerCount;
  autoClickerCostElement.innerText = autoClickerCost + " Donuts";

  if (donutCount >= autoClickerCost) {
    autoClickerButton.style.backgroundColor = "white";
  } else {
    autoClickerButton.style.backgroundColor = "grey";
  }
};

const clickDonutButton = (button) => {
  button.addEventListener("click", () => {
    addDonut();
    updateGame();
  });
};

const clickAutoClickerButton = (button) => {
  button.addEventListener("click", () => {
    addAutoClicker();
    updateGame();
  });
};

const clickResetGameButton = (button) => {
  button.addEventListener("click", () => {
    resetGame();
    updateGame();
  });
};

function countUp() {
  donutCount += autoClickerCount;
  updateGame();
}
setInterval(countUp, 1000);

clickDonutButton(donutButton);
clickAutoClickerButton(autoClickerButton);
clickResetGameButton(resetGameButton);
