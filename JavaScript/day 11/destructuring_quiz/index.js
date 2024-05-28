import { backendData } from "./data.js";

backendData;
// 1. id, currency, money, phone 만 콘솔로
// 2. animalName-> {animal, car:{make,model,year}};
//3 . ipaddress가 맨마지막 세자리 합이 10 이하이면, color만 콘솔로 찍기
// 4. timezone이 알파벳 모음으로 시작하면, timezone,carmake,phone앞세자리만가져오기
// 5. money가 5만엔 이하이면 phone은 하이픈 제거, appname은 대문자화

//1.
// backendData.map((v) => {
//   const { currency, money, phone } = v;
//   return console.log(currency, money, phone);
// });

//2.

// backendData.map(({ animalName: animal, carMake: make, carModel: model, carModelYear: year }) => {
//   console.log({ animal, car: { make, model, year } });
// });

//3.

// const c = backendData
// .filter(({ipAddress}) => {
//   const ipArr = [...ipAddress];
//   const lastDotIndex = ipArr.findLastIndex((v)=> v === ".");
//   const splicedArr = ipArr
//   .splice(lastDotIndex+1,ipArr.length)
//   .map((v)=> Number(v))
//   const sum = splicedArr.reduce((a,c) => a+c);
//   return sum <= 10;
// })
// .map(({ipAddress,color}) => ({ipAddress,color}));
// console.log(c);


//4.
  // backendData.map(({timeZone,carMake,phone}) =>{
  //   const timeZoneArr = [...timeZone];
  //   const a = ['A', 'E', 'I', 'O', 'U'];
  //   a.includes(timeZoneArr[0]) ? console.log(timeZone.slice(0, 3), carMake.slice(0, 3), phone.slice(0, 3))
  //   : console.log(timeZone,carMake,phone)

  // })

//5 money 앞 엔화 빼고 넘버화, phone에서 하이픈 기준으로 splice하고 join appName은 toUpperCase
const l = backendData.map(({money,phone,appName}) => {
  const moneyNum = money.split("¥")[1];
  const phoneHypen = phone.split("-").join("");
  const appNameUpper = appName.toUpperCase();
  return Number(moneyNum) <= 50000 ? {money : moneyNum,phone:phoneHypen ,appName: appNameUpper } : {money,phone,appName}
}) 
console.log(l);