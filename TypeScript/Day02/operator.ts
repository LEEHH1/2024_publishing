//union = or

const user: string | number = 1; // union 타입

const isLogging: boolean | null = false;
const box: Element | null = document.querySelector(".box");
// 개 - 푸들,시바,치와와,시츄,...
//Element - div,section,input,button
const newDiv: Element = document.createElement(".div"); // or HTMLDivElement-> 좀더 자세히

// 커피 -> {name,price,shot} or {name,price,kcal}
const coffe:
  | { name: string; price: number; shot: number }
  | { name: string; price: number; kcal: number } = {
  name: "아아",
  price: 2000,
  shot: 3,
};

// intersection[=and] &
// never : 있을수가 없음
// unknown : 몰라
// const b: string  & number = never
// () => type : 함수 지정 타입
//Solid 원칙 => d:저수준 모듈 => 고수준 모델로 가는 순서
// ex: [타이어,엔진,벨트,시트] => 자동차

const person: { name: string } & { age: number } & { eat: () => void } = {
  name: "김타입",
  age: 21,
  eat: () => {
    console.log("eat");
  },
};

console.log(person);
