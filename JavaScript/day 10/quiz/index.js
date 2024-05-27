// 함수 만들기

// 1.
// my_string n result
// "hello" 3 "hhheeelllooo"

// function my_string(n) {
//   return [...n].map((v) => v + v + v).join("");
// }

const solution = (my_string, n) =>
  [...my_string].map((v) => v.repeat(n)).join("");

const c = solution("hello", 3);
console.log(c);

//2.
// mystring result
//  a 만 대문자화

const solution1 = (mystring) =>
  [...mystring].map((v) => (v == "a" ? "A" : v.toLowerCase())).join("");

const b = solution1("AAAAaaaa");
console.log(b);
