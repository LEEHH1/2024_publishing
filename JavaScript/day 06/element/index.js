// 기본 : string number boolean null undefined
// 참조 : array,element
const divTag = document.createElement("div");

// divTag.appendChild() 자식에 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style 직접 css관여
// divTag.classList 클래스 리스트보기
// divTag.classList.add("red"); 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에서 red 삭제
// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제 없으면 추가

const divBox = document.querySelector(".box");
const wideBtn = document.querySelector(".wideBtn");
const miniBtn = document.querySelector(".miniBtn");
const redBox = document.querySelector(".redBox");
const blueBox = document.querySelector(".blueBox");
const bolderBtn = document.querySelector(".bolderBtn");

// miniBtn.style.display = "none";
// blueBox.style.display = "none";

// wideBtn.addEventListener("click", () => {
//   divBox.classList.replace("box", "box2");
//   miniBtn.style.display = "block";
//   wideBtn.style.display = "none";
// });

// miniBtn.addEventListener("click", () => {
//   divBox.classList.replace("box2", "box");
//   wideBtn.style.display = "block";
//   miniBtn.style.display = "none";
// });

// redBox.addEventListener("click", () => {
//   divBox.classList.replace("blue", "red");
//   blueBox.style.display = "block";
//   redBox.style.display = "none";
// });

// blueBox.addEventListener("click", () => {
//   divBox.classList.replace("red", "blue");
//   redBox.style.display = "block";
//   blueBox.style.display = "none";
// });

// ------------------------------------------------------------------------
wideBtn.addEventListener("click", () => {
  wideBtn.innerText = wideBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  divBox.classList.toggle("medium");
  divBox.classList.toggle("large");
});
redBox.addEventListener("click", () => {
  redBox.innerText = redBox.innerText == "빨간색" ? "파란색" : "빨간색";
  divBox.classList.toggle("red");
  divBox.classList.toggle("blue");
});

bolderBtn.addEventListener("click", () => {
  bolderBtn.innerText = bolderBtn.innerText == "직각" ? "둥그스러움" : "직각";
  divBox.classList.toggle("boldera");
  divBox.classList.toggle("boldra");
});
