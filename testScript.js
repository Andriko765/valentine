"use strict"

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    yesButton.style["display"] = 'none'
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      yesButton.style["display"] = 'block'
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "О правильно, лови дозу романтіки :3";
  buttonsContainer.classList.add("hidden");
  setTimeout(() => {
    
    window.location.href = "/valentine/flowers.html";
  }, 2500);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Ні?",
    "Ти впевнена?",
    "Зараз доставка приїде в школу -_-",
    "Добре подумай",
    "Точно",
    "Найобую, нічого не купляв. Нажимай ТАК,там пиздаті квіточки з тік току :) З днем валіка тебе ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function generateButtonText(noCount) {
  const messages = [
    "Ні",
    "Впевненна",
    "НІ",
    "НІ",
    "Точно",
    "НІ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}


function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  titleElement.innerHTML = generateMessage(noCount);
  noButton.innerHTML = generateButtonText(noCount);
}
