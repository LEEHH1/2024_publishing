// 색깔 다섯개
// 사이즈 다섯개
// 테두리 사이즈 3개

const colorArr = ["red", "green", "blue", "yellow", "pink"];
const sizeArr = ["boxSize1", "boxSize2", "boxSize3", "boxSize4", "boxSize5"];
const borderArr = ["boderRadi1", "boderRadi2", "boderRadi3"];
const divBox = document.querySelector(".box");

colorArr.forEach((v) => {
  const colorBtn = document.createElement("button");
  document.body.appendChild(colorBtn);
  colorBtn.innerText = v;
  colorBtn.addEventListener("mouseover", () => {
    divBox.classList.toggle(v);
  });
});

sizeArr.forEach((v) => {
  const sizeBtn = document.createElement("button");
  document.body.appendChild(sizeBtn);
  sizeBtn.innerText = v;
  sizeBtn.addEventListener("click", () => {
    divBox.classList.toggle(v);
  });
});

borderArr.forEach((v) => {
  const borderBtn = document.createElement("button");
  document.body.appendChild(borderBtn);
  borderBtn.innerText = v;
  borderBtn.addEventListener("click", () => {
    divBox.classList.toggle(v);
  });
});

//-------------------------------------------------------------------------------
