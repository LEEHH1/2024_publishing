import { backendData } from "./data.js";

backendData;
// 1. id, currency, money, phone 만 콘솔로
// 2. animalName-> {animal, car:{make,model,year}};
//3 . ipaddress가 맨마지막 세자리 합이 10 이하이면, color만 콘솔로 찍기
// 4. timezone이 알파벳 모음으로 시작하면, timezone,carmake,phone앞세자리만가져오기
// 5. money가 5만엔 이하이면 phone은 하이픈 제거, appname은 대문자화

//1.
backendData.map((v) => {
  const { currency, money, phone } = v;
  return console.log(currency, money, phone);
});

//2.

// backendData.map((v) => {
//   const { animalName: animal } = v;
//   const { car: (carMake+ carModel+carModelYear) } = v;
//   return console.log(animal, car);
// });

//3.

const { ipAdress, color } = backendData;

backendData.map((v) => {
  const a = v.ipAddress.split(".").join("").map((v.i)=>);
  console.log(a);
});
