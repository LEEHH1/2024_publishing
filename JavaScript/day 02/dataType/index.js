// 기본 타입
// 1. 문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");
// console.log(
//   "당신이 좋아하는 커피는" +
//     favorite1 +
//     "이고" +
//     "당신이 좋아하는 빵은" +
//     favorite2 +
//     "이군요"
// );
// console.log(
//   `당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이시군요`
// );

// const name = window.prompt("당신의 이름은");
// const age = window.prompt("당신의 나이는");
// const favoriteColor = window.prompt("당신이 좋아하는 색깔은");

// console.log(
//   `제이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은 ${favoriteColor}입니다!`
// );

// const date = window.prompt("오늘의 날짜는");
// const work = window.prompt("오늘의 일정은");
// console.log(`오늘은 ${date}, 계획하신 일정은 ${work} 입니다`);

// const button = document.createElement("button");
// const buttonText = window.prompt("data");
// a.innerText = `입력한 내용 ${buttonText}`;
// document.body.appendChild(button);

// 유저에게 세번의 prompt로 헥사코드 색깔을 입력을 받고
// 버튼 3개를 만들고(text: 헥사코드, bg: 헥사코드)
// 박스 하나 만들고 (w:100,h:100, bg : 선택된 버튼의 헥사코드, text: 입력된 헥사코드:[])

// const hexa1 = window.prompt("헥사코드1");
// const hexa2 = window.prompt("헥사코드2");
// const hexa3 = window.prompt("헥사코드3");
// const hexa1Btn = document.createElement("button");
// const hexa2Btn = document.createElement("button");
// const hexa3Btn = document.createElement("button");
// const box = document.createElement("div");

// hexa1Btn.innerText = hexa1;
// hexa2Btn.innerText = hexa2;
// hexa3Btn.innerText = hexa3;

// hexa1Btn.style.backgroundColor = hexa1;
// hexa2Btn.style.backgroundColor = hexa2;
// hexa3Btn.style.backgroundColor = hexa3;

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.border = "1px solid black";

// hexa1Btn.addEventListener("click", () => {
//   box.style.backgroundColor = hexa1;
//   box.innerText = `입력된 헥사코드는 ${hexa1} 입니다`;
// });
// hexa2Btn.addEventListener("click", () => {
//   box.style.backgroundColor = hexa2;
//   box.innerText = `입력된 헥사코드는 ${hexa2} 입니다`;
// });
// hexa3Btn.addEventListener("click", () => {
//   box.style.backgroundColor = hexa3;
//   box.innerText = `입력된 헥사코드는 ${hexa3} 입니다`;
// });

// document.body.appendChild(hexa1Btn);
// document.body.appendChild(hexa2Btn);
// document.body.appendChild(hexa3Btn);
// document.body.appendChild(box);
