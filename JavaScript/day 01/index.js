// console.log("자바스크립트! 시작!");
// // 미니퀴즈
// // 자바스크립트 공부 다짐
// // 오늘점심 메뉴
// console.log("오늘 점심 메뉴 : 간짜장, 라멘 중에 고민중");

// window.alert("아무거나 써볼게요."); 팝업

// window.confirm("아무거나아아아"); 확인 취소 팝업

// window.prompt("나와라아아아"); 질문 대답 팝업

// window.open("https://www.naver.com/");
// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가커피 짱짱");
// });
// document.body.appendChild(a);

// 화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭을 하면 alert로 부처님 오심 ㄹㅇ

// const a = document.createElement("button");
// a.innerText = "석가탄신일";
// a.addEventListener("click", () => {
//   window.alert("부처님 오심ㄹㅇ");
// });
// document.body.appendChild(a);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면 , 라떼로 바뀜

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   a.innerText = "라떼";
// });
// document.body.appendChild(a);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째  prompt 버튼 전의 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭 전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜

// const a = document.createElement("button"); // button element
// const b = window.prompt("커피는");
// const c = window.prompt("콜라는");
// a.innerText = b;
// a.addEventListener("click", () => {
//   a.innerText = c;
// });
// document.body.appendChild(a);

// button 태그 만들고, 배경색 하늘색, 폰트 사이즈 20px
// 클릭을 하면 빨간색으로 바뀌는

// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "20px";
// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
// });
// document.body.appendChild(a);

// const a = document.createElement("div");
// a.innerHTML = "<button>아메리카노</button>";
// document.body.appendChild(a);

// 버튼이 5개 있음, 빨,주,노,초,파 있음
// 모두 css를 배경색은 각각 해당 색으로 바꾸고, text 빨,주,노,초,파
// div 태그가 width 100px h 100px border 1px soild black 있는데
// 여기서 위의 5개의 버튼중 하나를 누르면 div의 배경이 해당 색으로

const a = document.createElement("button");
const b = document.createElement("button");
const c = document.createElement("button");
const d = document.createElement("button");
const e = document.createElement("button");
const f = document.createElement("div");

f.style.width = "100px";
f.style.height = "100px";
f.style.border = "1px solid black";

a.style.backgroundColor = "red";
b.style.backgroundColor = "orange";
c.style.backgroundColor = "yellow";
d.style.backgroundColor = "green";
e.style.backgroundColor = "blue";

a.innerText = "빨강";
b.innerText = "주황";
c.innerText = "노랑";
d.innerText = "초록";
e.innerText = "파랑";

a.addEventListener("click", () => {
  f.style.backgroundColor = "red";
});
b.addEventListener("click", () => {
  f.style.backgroundColor = "orange";
});
c.addEventListener("click", () => {
  f.style.backgroundColor = "yellow";
});
d.addEventListener("click", () => {
  f.style.backgroundColor = "green";
});
e.addEventListener("click", () => {
  f.style.backgroundColor = "blue";
});
document.body.appendChild(a);
document.body.appendChild(b);
document.body.appendChild(c);
document.body.appendChild(d);
document.body.appendChild(e);
document.body.appendChild(f);
