// 색깔 다섯개
// 사이즈 다섯개
// 테두리 사이즈 3개

const colorArr = ["red", "green", "blue", "yellow", "pink"];
const sizeArr = ["boxSize1", "boxSize2", "boxSize3", "boxSize4", "boxSize5"];
const borderArr = ["boderRadi1", "boderRadi2", "boderRadi3"];
const divBox = document.querySelector(".box");

colorArr.forEach((v) => {
  const colorBtn = document.createElement("button");
  colorBtn.innerText = v;
  colorBtn.addEventListener("click", () => {
    colorArr.forEach((v) => divBox.classList.remove(v));
    divBox.classList.add(v);
  });
  const colorBtnList = document.querySelector(".colorBtnList");
  colorBtnList.appendChild(colorBtn);
});

sizeArr.forEach((v) => {
  const sizeBtn = document.createElement("button");
  sizeBtn.innerText = v;
  sizeBtn.addEventListener("click", () => {
    sizeArr.forEach((v) => divBox.classList.remove(v));
    divBox.classList.add(v);
  });
  const sizeBtnList = document.querySelector(".sizeBtnList");
  sizeBtnList.appendChild(sizeBtn);
});

borderArr.forEach((v) => {
  const borderBtn = document.createElement("button");
  borderBtn.innerText = v;
  borderBtn.addEventListener("click", () => {
    borderArr.forEach((v) => divBox.classList.remove(v));
    divBox.classList.add(v);
  });
  const borderBtnList = document.querySelector(".borderBtnList");
  borderBtnList.appendChild(borderBtn);
});

//-------------------------------------------------------------------------------
