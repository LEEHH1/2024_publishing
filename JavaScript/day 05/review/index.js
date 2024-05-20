// if/ switch

// 1. if

const isOverWeight = true;

if (isOverWeight === true) {
  console.log("과체중 입니다");
} else {
  console.log("정상입니다");
}

// switch (user) {
//   case "관리자":
//     console.log("관리자 로그인");
//     break;
//   case "편집자":
//     console.log("편집자 로그인");
//     break;
//   case "일반":
//     console.log("일반 로그인");
//     break;
// }

const arr = ["아메리카노", "라떼", "민트", "바닐라"];

arr.forEach((v, i) => {
  console.log(`${i},${v}`);
});
