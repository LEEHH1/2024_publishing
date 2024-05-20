// 커피 input
// 가격  input - 숫자여야만함 [1000 이상부터 가능]
// 1000원 이상 입력해야합니다
// 수량 input - 숫자여야만 하지만 [1~10000 가능]
// 1 ~ 10000 사이여야 합니다.
// 제출하기 button
// 3개 글자가 0이 아니어야 제출 가능

//커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개
// 총 갯수 : 13000개

const coffeeInput = document.querySelector(".coffee");
const price = document.querySelector(".price");
const ea = document.querySelector(".ea");
const btn = document.querySelector(".btn");
const wanMsg = document.querySelector(".wanMsg");
// btn.addEventListener("click", () => {
//   const numPirce = Number(price.value);
//   const numberEa = Number(ea.value);

//   const all = 0 + numberEa;
//   const PriceValue = numPirce < 1000;

//   if (PriceValue) {
//     priceText.innerText = "1000원이상부터 가능합니다";
//     priceText.style.color = "red";
//   } else if (1 > numberEa || numberEa > 10000) {
//     eaText.innerText = "1~10000 사이 입력 가능합니다";
//     eaText.style.color = "red";
//   } else {
//     const a = document.createElement("div");
//     document.body.appendChild(a);
//     a.innerText = `${coffee.value} ${numPirce}원 ${numberEa}개 입니다 `;
//   }
// });

btn.addEventListener("click", () => {
  const cv = coffeeInput.value;
  const pv = price.value;
  const ev = ea.value;

  const isValidEmpty = !cv.length && !pv.length && !ev.length;
  const isValidPrice = 1000 <= Number(pv);
  const isValidEa = 1 <= Number(ev) && Number(ev) <= 10000;
  wanMsg.style.color = "red";
  if (isValidEmpty) {
    wanMsg.innerText = "빈칸을 모두 기입해주세요";
  } else if (isValidPrice) {
    wanMsg.innerText = "가격은 1000원 이상 입력해야합니다";
  } else if (isValidEa) {
    wanMsg.innerText = "수량은 1~10000 사이로 입력해야합니다";
  } else {
    wanMsg.style.color = "black";
    const coffeeListDiv = document.querySelector(".coffeeList");
    const divTag = document.createElement("div");
    divTag.innerText = `커피: ${cv} 가격: ${pv} 수량: ${ev}`;
    // appendChild 자식에 추가
    coffeeListDiv.appendChild(divTag);
    const total = document.querySelector(".total");
    total.innerText = Number(total.innerText) + Number(ev);
    wanMsg.innerText = ``;
  }
});

// btn.addEventListener("click", () => {
//   const cv = coffeeInput.value;
//   const pv = price.value;
//   const ev = ea.value;

//   const isValidEmpty = cv.length > 0 && pv.length > 0 && ev.length > 0;
//   const isValidPrice = Number(pv) >= 1000;
//   const isValidEa = Number(ev) >= 1 && Number(ev) <= 10000;

//   wanMsg.style.color = "red";

//   if (!isValidEmpty) {
//     wanMsg.innerText = "빈칸을 모두 기입해주세요";
//   } else if (!isValidPrice) {
//     wanMsg.innerText = "가격은 1000원 이상 입력해야합니다";
//   } else if (!isValidEa) {
//     wanMsg.innerText = "수량은 1~10000 사이로 입력해야합니다";
//   } else {
//     wanMsg.style.color = "black";
//     const coffeeListDiv = document.querySelector(".coffeeList");
//     const divTag = document.createElement("div");
//     divTag.innerText = `커피: ${cv} 가격: ${pv} 수량: ${ev}`;
//     coffeeListDiv.appendChild(divTag);
//     const total = document.querySelector(".total");
//     total.innerText = Number(total.innerText) + Number(ev);
//     wanMsg.innerText = ``;
//   }
// });
