const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const renderUI = function (obj) {
  //* Guard Clause
  if (!obj) return;

  adviceId.textContent = `ADVICE #${obj.id}`;
  advice.textContent = obj.advice;
};

const generateAdvice = async function () {
  const response = await fetch(
    `https://api.adviceslip.com/advice/${randomNumber(1, 224)}`
  );
  //* Guard Clause
  if (!response) return;

  const data = await response.json();
  renderUI(data.slip);
};

dice.addEventListener("click", generateAdvice);
