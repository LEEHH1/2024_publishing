// 함수(기능): [input -> output]

// 일반함수
// function 함수명(매개변수){return 리턴값}

function makeCoffe(x) {
  return x + "완료되었습니다.";
}
function numNum(x) {
  return x ** 2;
}

// 화살표 함수
// () => {}
const makeBread = (x) => {
  return x + "빵이 완료되었습니다.";
};

const a = makeBread("단팥");
console.log(a);

// 1. 어떤 수를 입력하면 세제곱을 돌려주는 함수
// 2. 대문자를 입력하면 소문자 + '완료!'를 돌려주는 함수
// 3. 어떤 x를 입력하면, truthy 인지 falsy 인지 알려주는 함수

const thirdNum = (x) => x ** 3;
const b = thirdNum(3);
console.log(b);

const under = (x) => `${x.toLowerCase()} 완료!`;
const c = under("AMERICANO");
console.log(c);

const boo = (x) => (x === true ? "truthy" : "falsy");
const d = boo(true);
console.log(d);

const makeButton = (x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
};
