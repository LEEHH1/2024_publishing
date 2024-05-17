// - 0 +

const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");
const zero = document.createElement("div");

plusBtn.innerText = "plus";
minusBtn.innerText = "minus";
zero.innerText = "0";

plusBtn.addEventListener("click", () => {
  zero.innerText = Number(zero.innerText) + 1;
});

minusBtn.addEventListener("click", () => {
  const zeroNum = Number(zero.innerText);
  zero.innerText = zeroNum > 0 ? zeroNum - 1 : "0";
});

document.body.appendChild(plusBtn);
document.body.appendChild(zero);
document.body.appendChild(minusBtn);
