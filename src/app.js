/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardTypes = [
    "fa-gem",
    "fa-wine-glass-alt",
    "fa-window-minimize",
    "fa-tree"
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

  let selectedIcon = document.getElementById("iconLeftTopCorner");

  selectedIcon.classList.add(cardPosition);

  let selectedIcon2 = document.getElementById("iconLowerRightCorner");

  selectedIcon2.classList.add(cardPosition);

  let selectNumber = document.getElementById("number");

  selectNumber.innerHTML = numbersPosition;
};
