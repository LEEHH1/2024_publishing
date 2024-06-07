function add(x: number, y: number): number {
  return x + y;
}
// truthy of falsy 해주는 함수(string)=> boolean

function makeBoolean(x: string): boolean {
  return !!x;
}

const minus = (x: number, y: number): number => x - y;

console.log(minus(10, 5));

// 태어난 년도로 띠 알아보기

const animal: string[] = [
  "신",
  "유",
  "술",
  "해",
  "자",
  "축",
  "인",
  "묘",
  "진",
  "사",
  "오",
  "미",
];

function yearAnimal(birth: number) {
  const year: number = birth % 12;
  if (year == 0) {
    return animal[0];
  } else if (year == 1) {
    return animal[1];
  } else if (year == 2) {
    return animal[2];
  } else if (year == 3) {
    return animal[3];
  } else if (year == 4) {
    return animal[4];
  } else if (year == 5) {
    return animal[5];
  } else if (year == 6) {
    return animal[6];
  } else if (year == 7) {
    return animal[7];
  } else if (year == 8) {
    return animal[8];
  } else if (year == 9) {
    return animal[9];
  } else if (year == 10) {
    return animal[10];
  } else if (year == 11) {
    return animal[11];
  }
}
console.log(yearAnimal(1997));
// 숫자 뒤집기 자연수 n을 뒤집어 배열형태로 되돌려주기 12345 [5,4,3,2,1]

function reverseNum(num: number): String[] {
  const arrNum: String[] = [...String(num)].reverse();
  return arrNum;
}
console.log(reverseNum(12345));
// 정수 n이 매개변수 일때 n이하의 홀수가 오름차순으로 담긴 배열을 리턴

function numnum(x: number): number[] {
  const numData: number[] = Array(Number(x))
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v % 2);
  return numData;
}

console.log(numnum(50));

// 띠 구하기
// const makeZodiac = (year: number): string => {
//   const zodiac = [
//     "신",
//     "유",
//     "술",
//     "해",
//     "자",
//     "축",
//     "인",
//     "묘",
//     "진",
//     "사",
//     "오",
//     "미",
//   ];
//   const animal = zodiac[year % 12];
//   return animal;
// };

// console.log(makeZodiac(1995));

// const reverseNumber = (num: number): Number[] => {
//   [...String(num)].reverse().map((v) => Number(v));
// };
