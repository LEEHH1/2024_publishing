// 데이터 타입 : 기본 + 참조
// 기본 : number string boolean null undefined
// 참조 : array

// str = String() or "" or '' or +
// number = Number() or 123123 or +
// boolean = Boolean() or true or !
// Array = Array () or []

// const fruits = ["apple", "banana" , "orange", "kiwi"]

// // 인덱스
// fruits[0]; //apple
// fruits[1]; // banana

// // 추가 및 갱신
// fruits.push("grape");
// fruits[0] = "mango"

// //삭제
// fruits.pop(); // 맨뒤에 삭제
// delete fruits[1]// banana  삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 짜르기], sort
// 2. 접근자 - indexof[몇번째?], slice [짜르고 새로운 배열로 주기]
// 3. 반복[(v) => {v}] - forEach, map

const num = [3, 7, 2, 91, 309, 23, 124];
const fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "watermelon",
];
// 요소 바꾸기
// const newArr = num.map((v) => {
//   return v + 10;
// });
// 한줄로 바꾸기 const newArr = num.map((v) => return v + 10);

// console.log(newArr);

// const num2Arr = num.map((v) => {
//   return v + 100;
// });
//한줄로 바꾸기 const num2Arr = num.map((v) => return v + 10);
// console.log(num2Arr);

// const num3Arr = num.map((v) => {
//   return v * v;
// });
const num3Arr = num.map((v) => v * v);
console.log(num3Arr);
// // 홀수 제곱 짝수 100더하기
// const num4Arr = num.map((v) => {
//   return v % 2 === 0 ? v + 100 : v ** 2;
// });
const num4Arr = num.map((v) => (v % 2 === 0 ? v + 100 : v ** 2));
console.log(num4Arr);

// const fruitsArr = fruits.map((v) => {
//   return v.includes("a") ? v.toUpperCase() : (v = "icecream");
// });
// console.log(fruitsArr);

// //filter
// const num = [3, 7, 2, 91, 309, 23, 124];

// const numArr = num.filter((v) => {
//   return v > 10;
// });
// console.log(numArr);

// const numArr1 = num.filter((v) => {
//   return v % 2 === 0;
// });
// console.log(numArr1);

// const fruitsArr1 = fruits.filter((v) => {
//   return v.length === 6;
// });
// console.log(fruitsArr1);
// 알파벳 i가 들어있으면 제거하고 제거후 단어의 문자길이로 치환
// const fruitsArr2 = fruits.map((v) => {
//   return v.includes("i") ? delete v : v;
// });
// console.log(fruitsArr2);

// const fruitsArr3 = fruits.filter((v) => {
//   return !v.includes("i");
// });
// console.log(fruitsArr3);

// const fruitsArr4 = fruitsArr3.map((v) => {
//   return v.length;
// });
// console.log(fruitsArr4);

// // 체이닝
// const fruitsArr5 = fruits
//   .filter((v) => {
//     return !v.includes("i");
//   })
//   .map((v) => {
//     return v.length;
//   });
// console.log(fruitsArr5);

// every && some

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const every1 = arr3.every((v) => {
  return v > 0;
});
console.log(`every1 : ${every1}`); // true

const some1 = arr3.some((v) => {
  return v >= 10;
});
console.log(`some1 : ${some1}`);

const arr4 = arr3.map((v) => v + 100);
console.log(arr4);
