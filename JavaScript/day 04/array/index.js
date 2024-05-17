// 데이터 타입: 기본(string,number,boolean,null,undefined) & 참조(Array)
//Array
// const colors = ["#1abc9c", "#3498db", "#e74c3c", "#7f8c8d"];
// colors.push("#f1c40f"); // push 배열에 추가해주세요
// colors.sort(); //sort 배열을 정렬해주세요

// colors.forEach((x) => {
//   const divBox = document.createElement("div");
//   divBox.style.width = "100px";
//   divBox.style.height = "100px";
//   divBox.style.backgroundColor = x;
//   document.body.appendChild(divBox);
// }); // 한명씩 불러줘

// const menu = ["americano", "latte", "mint", "vanlina", "milktea"];

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 5000, 3000, 4000, 6000];

// prices.forEach((x) => {
//   if (x > 3000) {
//     console.log("비싸네요");
//   } else {
//     console.log("저렴하네요");
//   }
// });

// replace(a, b); a를 b로
// replaceAll(a,b) [모든 a를 b로]
// .slice(a.b) [a,b-1] 까지 문자 자르기

const a = "korea it".split(" ");
console.log(a);
const option = ["100 blue", "200 green", "500 black", "400 red"];
// wh : 100px, bg:blue

option.forEach((x) => {
  const wh = x.split(" ");
  const Box = document.createElement("div");
  Box.style.width = `${wh[0]}px`;
  Box.style.height = `${wh[0]}px`;
  Box.style.backgroundColor = wh[1];
  document.body.appendChild(Box);
});

const boxBtn = document.createElement("button");
boxBtn.innerText = "박스버튼";
document.body.appendChild(boxBtn);

boxBtn.addEventListener("click", () => {
  const a = window.prompt("넓이와 색깔 입력");
  const Box = document.createElement("div");
  const b = a.split(" ");
  Box.style.width = `${b[0]}px`;
  Box.style.height = `${b[0]}px`;
  Box.style.backgroundColor = b[1];
  document.body.appendChild(Box);
  Box.innerText = b[1];
});
