// if 조건문
// if (조건식)
// else

// const age = Number(window.prompt("몇살인가요"));

// if (age > 19) {
//   console.log("성인입니다");
// } else {
//   console.log("미성년자입니다");
// }
// console.log("프로그램 끝");

// prompt로 두개의 숫자를 입력받고
// 큰수를 콘솔로 출력하기

// const firstNum = window.prompt("첫번째 수를 입력하세요");
// const secondNum = window.prompt("두번째 수를 입력하세요");

// if (Number(firstNum) > Number(secondNum)) {
//   console.log(firstNum);
// } else {
//   console.log(secondNum);
// }

// const age = 15;

// if (age > 19) {
//   console.log("성인입니다");
// } else if (19 >= age && age >= 16) {
//   console.log("고딩");
// } else if (age >= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("잼민이");
// };

// 하나의 정수르 입력받고, 양수, 음수, 0인지 확인하기
// 수학 점수를 입력받고, 90이상 'a' 80 b, 70 c, 그밑 d

// const Num = window.prompt("정수를 입력하세요");

// if (Num > 0) {
//   console.log(`${Num}은 양수 입니다`);
// } else if (Num == 0) {
//   console.log(`${Num}은 0 입니다`);
// } else {
//   console.log(`${Num}은 음수 입니다`);
// }

// const math = window.prompt("수학점수를 입력하세요");

// if (math >= 90) {
//   console.log(`${math}점은 A입니다`);
// } else if (math >= 80) {
//   console.log(`${math}점은 B입니다`);
// } else if (math >= 70) {
//   console.log(`${math}점은 C입니다`);
// } else {
//   console.log(`${math}점은 D입니다`);
// }

// const num = Number(window.prompt("숫자입력"));
// const isPositive = num > 0;
// const idNegative = num < 0;
// const isOdd = num % 2 === 1;
// const isEven = num % 2 === 0;
// num % 2 === 1 홀수(num < 0) % 2 === 0
// num % 2 === 0 짝수((num < 0) % 2 === 1)

// 숫자 입력, 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0

// if (isPositive && isOdd) {
//   console.log("양의 홀수입니다");
// } else if (isPositive && isEven) {
//   console.log("양의 짝수입니다");
// } else if (idNegative && isEven) {
//   console.log("음의 짝수입니다");
// } else if (idNegative && isOdd) {
//   console.log("양의 홀수입니다");
// } else {
//   console.log("0 입니다");
// }

// const age = 10;
// if(age > 7) {
//   if (age > 13){
//     console.log("청소년");
//   } else{
//     console.log("유소년");
//   }
// }

// switch
const season = "봄";
switch (season) {
  case "봄": {
    console.log("날이 좋아요");
    break;
  }
  case "여름": {
    console.log("날이 더워요");
    break;
  }
  case "가을": {
    console.log("날이 쌀쌀해요");
    break;
  }
  case "겨울": {
    console.log("날이 추워요");
    break;
  }
}
