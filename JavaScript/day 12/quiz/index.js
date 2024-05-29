import { data } from "./data.js";

//data.pageProps.events.
const box = document.querySelector(".box");
const cardData = data.pageProps.events;
function koreaPrice(num) {
  const won = num / 10000;
  return won % 1 === 0 ? won + "만원" : won.toFixed(1) + "만원";
}

function discountRatePercent(discount) {
  return discount == 0 ? (discount = "") : `${discount}%`;
}

const makeCard = (data) =>
  `
  <div class="card">
  <div class="card_img"><img src="${data.titleImage}" alt=""></div>
<div class="card_text">
  <div class="card_id">${data.hospitalSubway} ${data.hospitalName}</div>
  <div class="card_title">${data.title}</div>
  <div class="card_stars">
      <div class="starIcon"><i class="fa-solid fa-star"></i></div>
      <div class="score">${data.rating}</div>
      <div class="review">(${data.ratingCount})</div>
  </div>
  <div class="card_price">${koreaPrice(data.cost)} ${discountRatePercent(
    data.discountRate
  )}</div>
</div class="card_text">
</div>
  `;
cardData.forEach((v) => box.insertAdjacentHTML("beforeend", makeCard(v)));
