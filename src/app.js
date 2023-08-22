/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardTypes = [
    "♦",
    "♥",
    "♠",
    "♣"
    //"fa-wine-glass-alt",
    // "fa-window-minimize",
    // "fa-tree"
  ];

  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function Ramdonposition(array) {
    return Math.floor(Math.random() * array.length);
  }

  let cardPosition = cardTypes[Ramdonposition(cardTypes)];
  console.log(cardTypes[cardPosition]);

  let numbersPosition = numbers[Ramdonposition(numbers)];
  console.log(numbersPosition);

  let randomIcon = cardTypes[Ramdonposition(cardTypes)];

  let selectedIcon = document.querySelector(".Top-icon");
  selectedIcon.innerHTML = randomIcon;

  selectedIcon.classList.add(cardPosition);

  let selectedIcon2 = document.querySelector(".Bottom-icon");
  selectedIcon2.innerHTML = randomIcon;

  selectedIcon2.classList.add(cardPosition);

  let selectNumber = document.getElementById("number");

  if (randomIcon == "♥" || randomIcon == "♦") {
    selectedIcon.style.color = "red";
    selectedIcon2.style.color = "red";
    selectNumber.style.color = "red";
  }

  selectNumber.innerHTML = numbersPosition;
};
