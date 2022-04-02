const dice = document.querySelector(".dice");

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fetchAdv = async function (num) {
  const response = await fetch(`https://api.adviceslip.com/advice/${num}`);
  const data = await response.json();
  return data;
};

const renderAdv = async function () {
  const randomNum = randomNumber(1, 224);
  console.log(randomNum);
  const advSlip = await fetchAdv(randomNum);
  const advObj = advSlip.slip;
  console.log(advObj);
};

dice.addEventListener("click", renderAdv);
