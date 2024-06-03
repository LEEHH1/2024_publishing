const timer = document.querySelector(".timer");
let timeLeft = 15;

const timerNum = function () {
  if (timeLeft > 0) {
    timer.innerText = timeLeft--;
  } else {
    timer.innerText = 0;
    clearInterval(count);
  }
};

export const count = setInterval(timerNum, 1000);
