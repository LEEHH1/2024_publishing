// promise
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타내는 객체
// ing, 성공, 실패
// pending, fullfilled, rejected
// const a = new Promise((succeed, failed) => {
//   setTimeout(() => {
//     succeed("happy js");
//   }, 3000);
// });

// a.then((x) => {
//   console.log(x);
// });
// const b = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
// b.then((x)=> x.json()).then((y)=>)

//promise
// promise 객체는 자바스크립트에서 비동기 작업을 처리하기 위한 방법입니다.
// promise 는 비동기 작업이 성공하거나 실패했을 때 각각의 결과 값을 반환하도록
// 약속합니다. 이를 통해 비동기 코드를 보다 읽기 쉽고 관리하기 쉽게 만들어 줍니다.

// core theory
// promise의 상태
// promise는 세가지 상태를 가집니다.
// 1. Pending : 초기 상태, 작업이 아직 완료되지 않음
// 2. Fulfilled : 작업이 성공적으로 완료됨.
// 3. Rejected : 작업이 실패함

// let promise = new Promise(function(resolve, rejected) {
//     if("작업성공"){
//         resolve(value);
//     } else{
//         rejected(error)
//     }
// })
