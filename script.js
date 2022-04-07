"use-strict";

const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

/**
 * Generates random number between the given parameters
 * @param {number} min - Minimum number
 * @param {number} max - Maximum number
 * @returns {number} Returns the random number
 */
const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Renders the id and advice on the DOM
 * @param {object} obj - The object coming from the Advice Slip API
 * @returns {undefined} - Returns when given "obj" argument is undefined
 */
const renderUI = function (obj) {
  //* Guard Clause
  if (!obj) return;

  adviceId.textContent = `ADVICE #${obj.id}`;
  advice.textContent = `"${obj.advice}"`;
};

const renderError = function () {
  adviceId.textContent = `ERROR`;
  advice.textContent = `"Failed to fetch the advice from API"`;
};

/**
 * Generates advice coming from the Advice Slip API
 * @returns {undefined} - Returns when the fetch is unsuccessful.
 */
const generateAdvice = async function () {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${randomNumber(1, 224)}`
    );
    //* Guard Clause
    if (!response) return;

    const data = await response.json();
    renderUI(data.slip);
  } catch (err) {
    renderError();
    console.error(err.message);
  }
};

dice.addEventListener("click", generateAdvice);
