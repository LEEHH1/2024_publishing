// 동기 프로그래밍
// console.log(1);
// console.log(3);
// console.log(4);
// 비동기[데이터가져오기, 지도위치가져오기, 시간초 재기]
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// setInterval(() => {
//   const count = document.querySelector(".count");
//   count.innerText = Number(count.innerText) + 1;
// }, 1000);

// String , Number, Boolean , Array, Element, Object

// 1. 지금 몇년 몇월 몇일 무슨요일인지 html에 나타내기
// const korDay = ["일", "월", "화", "수", "목", "금", "토"];

// const now = new Date();
// const date = now.getDate();
// const day = korDay[now.getDay()];
// const year = now.getFullYear();
// const month = now.getMonth();
// const hour = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();
// const count = document.querySelector(".count");
// count.innerText = `
//  ${year}년 ${month + 1}월 ${date}일 ${day}요일 ${hour} ${minutes} ${seconds}`;

// 1초 주기로 해주기
// setInterval(() => {
//   const korDay = ["일", "월", "화", "수", "목", "금", "토"];

//   const now = new Date();
//   const date = now.getDate();
//   const day = korDay[now.getDay()];
//   const year = now.getFullYear();
//   const month = now.getMonth();
//   const hour = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const count = document.querySelector(".count");
//   (count.innerText = `
//   ${year}년 ${month + 1}월 ${date}일 ${day}요일 ${hour} ${minutes} ${seconds}`),
//     1000;
// });
