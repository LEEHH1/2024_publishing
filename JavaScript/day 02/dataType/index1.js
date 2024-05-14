// 데이터 타입 : 기본, 참조
//기본 : String문자, Number숫자

// const a = window.prompt("숫자 입력:");

// 문자 -> 숫자 타입 바꾸기
// 1. Number
// const b = Number(a);
// console.log(b + 10);

// 2. parseInt() , parseFloat() 문자타입만 넣었을때 유효
// const c = parseInt(a);
// console.log(c + 30);

// +, -, *

//간단한 사칙 연산 사용자로부터 두개의 숫자와 사칙연산 하나를 입력받아 결과 div로

const numFirst = window.prompt("첫번째 숫자를 입력하세요");
const numSecond = window.prompt("두번째 숫자를 입력하세요");
const numBox = document.createElement("div");
const firstNum = Number(numFirst);
const secondNum = Number(numSecond);

numBox.innerText = `첫번째 숫자는 ${firstNum}, 두 번째 숫자는 ${secondNum}, 연산은  ${firstNum},${secondNum},${
  firstNum * secondNum
}입니다`;

document.body.appendChild(numBox);

// 나이를 입력받아 그사람이 태어난 연도 계산 만약 20살이면 20003년입니다
const yourAgeNum = Number(window.prompt("나이를 입력하세요")); // prompt를 바로 Number에 넣어주는것도 가능
const ageBox = document.createElement("div");
ageBox.innerText = `나이가 ${yourAgeNum}살 이라면, 출생년도는 ${
  2025 - yourAgeNum
}년 입니다`;
document.body.appendChild(ageBox);
// 정사각형 넓이 계산 한변의 길이를 입력받아 넓이를 구하는 프로그램
const boxNum = Number(window.prompt("정사각형 한변의 길이"));
const boxBox = document.createElement("div");
boxBox.innerText = `한 변의 길이가 ${boxNum}라면, 넓이는 ${
  boxNum * boxNum
}입니다.`;
document.body.appendChild(boxBox);
