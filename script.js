const dice = document.querySelector(".dice");

const fetchAdv = async function (num) {
  const response = await fetch(`https://api.adviceslip.com/advice/${num}`);
  const data = await response.json();
  console.log(data);
};

const renderAdv = function () {
  fetchAdv(21);
};

dice.addEventListener("click", renderAdv);
