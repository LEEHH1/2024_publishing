const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// console.log로 결과 나타내기
// 1. a가 포함 되어 있으면 대문자화 시키고 아니면, '이모지' 출력하기🎈
// 2. b가 포함되어 있으면 b기준으로 단어를 쪼개서 배열화 아니면 이모지 출력
// 3. n이 포함되어 있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기
// 4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력, 아니면 대문자화 출력

// fruits.forEach((v) => {
//   if (v.includes("a") === true) {
//     const a = v.toUpperCase();
//     console.log(a);
//   } else {
//     const b = v.replace(v, "🎈");
//     console.log(b);
//   }
// });

// fruits.forEach((v) => {
//   if (v.includes("b") === true) {
//     const c = v.split("b");
//     console.log(c);
//   } else {
//     const d = v.replace(v, "🎈");
//     console.log(d);
//   }
// });

// fruits.forEach((v) => {
//   if (v.includes("n") === true) {
//     const c = v.concat(v);
//     console.log(c);
//   } else {
//     console.log(v);
//   }
// });

// fruits.forEach((v) => {
//   const e = v.length();
//   if (e >= 5) {
//     const f = coffee.replace("a", "k");
//     console.log(f);
//   } else {
//     const g = v.toUpperCase();
//     console.log(g);
//   }
// });

// 1
// fruits.forEach((v) => {
//   console.log(v.includes("a") ? v.toUpperCase() : "😍");
// });

// 2
// fruits.forEach((v) => {
//   console.log(v.includes("b") ? v.split("b") : "😍");
// });

// 3

// let a = "";
// fruits.forEach((v) => {
//   if (v.includes("n")) {
//     a += v;
//   }
// });
// console.log(a);

//4

// fruits.forEach((v) => {
//   console.log(v.length >= 6 ? v.replace("a", "k") : v.toUpperCase());
// });
