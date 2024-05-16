// 색상 버튼 3개 임의로 만들기
// 파레트 상자 하나 만들기 100 100
// - + 버튼 만들기

const palletBox = document.createElement("div");
const yellowBtn = document.createElement("button");
const blueBtn = document.createElement("button");
const greenBtn = document.createElement("button");
const plusBtn = document.createElement("button");
const minusBtn = document.createElement("button");

palletBox.style.width = "100px";
palletBox.style.height = "100px";
palletBox.style.backgroundColor = "black";
yellowBtn.style.backgroundColor = "#f6e58d";
blueBtn.style.backgroundColor = "#7ed6df";
greenBtn.style.backgroundColor = "#badc58";

yellowBtn.innerText = "#f6e58d";
blueBtn.innerText = "#7ed6df";
greenBtn.innerText = "#badc58";
plusBtn.innerText = "Plus";
minusBtn.innerText = "minus";

yellowBtn.addEventListener("click", () => {
  palletBox.style.backgroundColor = "#f6e58d";
  palletBox.innerText = "#f6e58d";
});
blueBtn.addEventListener("click", () => {
  palletBox.style.backgroundColor = "#7ed6df";
  palletBox.innerText = "#7ed6df";
});

greenBtn.addEventListener("click", () => {
  palletBox.style.backgroundColor = "#badc58";
  palletBox.innerText = "#badc58";
});

plusBtn.addEventListener("click", () => {
  const length = parseInt(palletBox.style.width) + 1;
  palletBox.style.width = `${length}px`;
  palletBox.style.height = `${length}px`;
});
minusBtn.addEventListener("click", () => {
  const length = parseInt(palletBox.style.width) - 1;
  const isLength99 = length === 99;
  palletBox.style.width = isLength99 ? "100px" : `${length}px`;
  palletBox.style.height = isLength99 ? "100px" : `${length}px`;
});

document.body.appendChild(palletBox);
document.body.appendChild(yellowBtn);
document.body.appendChild(blueBtn);
document.body.appendChild(greenBtn);
document.body.appendChild(plusBtn);
document.body.appendChild(minusBtn);
