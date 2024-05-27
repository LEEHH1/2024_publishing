//type casting: Number, String, Boolean

// String -> Array

const coffee = "americano";

//1. split(""), Array.from(),[...]
const a1 = coffee.split("");
const a2 = Array.from(coffee);
const a3 = [...coffee]; // 중요 많이씀 웬만하면 이걸로
// [m,r,c,n]

const b = a1.filter((v) => ![..."aeiou"].some((v1) => v1 == v));
console.log(b);

//e만 대문자로 나머지 배열

const c = a1.map((v) => (v == "e" ? v.toUpperCase() : v));
console.log(c);

// Array -> String
const fruits = ["apple", "banana", "orange"];

//join(''); 웬만하면 이걸로

const b1 = fruits.join(" ");
console.log(b1); // applebananaorange
// toString()
const b2 = fruits.toString();
console.log(b2); // apple,banana,orange

const c1 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""));
console.log(c1);

const b4 = fruits.map((v) => [...v]).flat();
const b5 = [...fruits.join("")];

//reduce(누적시키다) ,acc[누적된값], curr[현재]
[1, 3, 5, , 7, 9].reduce((a, c) => {
  console.log(`a : ${a} c:${c}`);
  return a + c;
});

const a = Array(10)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((a, c) => a + c);

//[1~10] 홀수는 더하고 짝수는 빼기의 함
const a5 = Array(10)
  .fill(0)
  .map((v, i) => (i % 2 ? -(i + 1) : i + 1))
  .reduce((a, c) => a + c);

console.log(a5);
