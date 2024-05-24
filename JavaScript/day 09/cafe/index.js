// const ameBtn = document.querySelector(".ameBtn");
// const latteBtn = document.querySelector(".latteBtn");
// const addPrice = document.querySelector(".addPrice");

// const lemonadeBtn = document.querySelector(".lemonadeBtn");
// const solOfEyeBtn = document.querySelector(".solOfEyeBtn");
// const cassBtn = document.querySelector(".cassBtn");
// const bannaBtn = document.querySelector(".bannaBtn");
// const sidaBtn = document.querySelector(".sidaBtn");
// const zerocokeBtn = document.querySelector(".zerocokeBtn");
// const dezwaBtn = document.querySelector(".dezwaBtn");
// const bita500Btn = document.querySelector(".bita500Btn");

const menus = [
  {
    coffeName: "아메리카노",
    coffePrice: 3000,
  },
  {
    coffeName: "라떼",
    coffePrice: 4000,
  },
  {
    coffeName: "레모네이드",
    coffePrice: 3500,
  },
];
const makeName = (name) => {
  const h3 = document.createElement("h3");
  h3.innerText = name;
  return h3;
}; //음료의 메뉴이름
const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

const makeButton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + price + "원";
  });
  return btn;
}; // 음료의 가격

const makeCoffee = (coffeeObj) => {
  const coffeBox = document.createElement("div");
  coffeBox.appendChild(makeName(coffeeObj.coffeName));
  coffeBox.appendChild(makePrice(coffeeObj.coffePrice));
  coffeBox.appendChild(makeButton(coffeeObj.coffePrice));
  document.querySelector(".menu").appendChild(coffeBox);
}; // 음료의 이름과 가격을 object에서 가져와서 div태그로 생성
menus.forEach((v) => makeCoffee(v)); //menu array안에 있는 object 요소들을 forEach로 뿌려주기

// ameBtn.addEventListener("click", () => {
//   addPrice.innerText = Number(addPrice.innerText) + 3000;
// });

// latteBtn.addEventListener("click", () => {
//   addPrice.innerText = Number(addPrice.innerText) + 4000;
// });

// function price(x, y) {
//   x.addEventListener("click", () => {
//     return (addPrice.innerText = Number(addPrice.innerText) + y);
//   });
// }
// price(ameBtn, 3000);
// price(latteBtn, 4000);

// price(lemonadeBtn, 3500);
// price(solOfEyeBtn, 2500);
// price(cassBtn, 4000);
// price(bannaBtn, 2000);
// price(sidaBtn, 1500);
// price(zerocokeBtn, 2000);
// price(dezwaBtn, 3000);
// price(bita500Btn, 500);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
// price(ameBtn, 3000);
// price(latteBtn, 4000);
