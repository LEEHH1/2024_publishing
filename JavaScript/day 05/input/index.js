// const input = document.querySelector(".input");
// const btn = document.querySelector(".btn");
// const box = document.createElement("div");
// // input을 입력하고 확인 버튼을 눌렀을때
// // console.log(input.value); input.value : input에 입력한 글자
// // 8글자 이하이면 글자수가 짧습니다[빨간색] 나오고
// // 아니면 글자수가 충분합니다[파란색] 나오기

// btn.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     box.innerText = "글자수가 짧습니다";
//     box.style.color = "red";
//   } else {
//     box.innerText = "글자수가 충분합니다";
//     box.style.color = "blue";
//   }
// });
// document.body.appendChild(box);

//-------------------------------------------------------------------------------

// 8 ~ 20 글자 사이이고, 아니면 8 20 사이로 만들어주세요!
//반드시 !,#,$중 하나를 포함해야하며 아니면 포함하라는 메세지
// 글자 시작을 'IT' 일 경우, 올바르게 문자를 설정했습니다.[blue] 아니면 시작하라는 메세지

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");

// btn.addEventListener("click", () => {
//   const a = input.value.includes("!", "#", "$");
//   const b = input.value.startsWith("IT");
//   const c = input.value.length <= 20;
//   const d = input.value.length >= 8;
//   if ((a, b, c, d === true)) {
//     msg.innerText = "올바르게 문자를 설정했습니다";
//     msg.style.color = "blue";
//   } else {
//     msg.innerText = "문자를 다시 설정하세요";
//     msg.style.color = "red";
//   }
// });

btn.addEventListener("click", () => {
  const value = input.value;

  const isValidLength = 8 <= value.length && value.length <= 20;

  const isVaildSpecialChar =
    input.value.includes("!") ||
    input.value.includes("#") ||
    input.value.includes("$");

  const isValidStart = value.startsWith("IT");

  const a = isValidLength && isVaildSpecialChar && isValidStart;
  msg.style.color = "red";
  if (!isValidLength) {
    msg.innerText = "8~20 글자 사이로 입력하세요";
  } else if (!isVaildSpecialChar) {
    msg.innerText = "!,#,$ 중 하나를 포함해서입력하세요";
  } else if (!isValidStart) {
    msg.innerText = "IT로 시작해주세요";
  } else {
    msg.innerText = "올바르게 입력했습니다";
    msg.style.color = "blue";
  }
});
