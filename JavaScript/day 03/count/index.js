const plusbtn = document.createElement("button");
const minbtn = document.createElement("button");
const zero = document.createElement("span");

plusbtn.innerText = "+";
minbtn.innerText = "-";
zero.innerText = 0;

plusbtn.addEventListener("click", () => {
  zero.innerText = Number(zero.innerText) + 1;
});

minbtn.addEventListener("click", () => {
  zero.innerText = Number(zero.innerText) - 1;
});

document.body.appendChild(plusbtn);
document.body.appendChild(minbtn);
document.body.appendChild(zero);
