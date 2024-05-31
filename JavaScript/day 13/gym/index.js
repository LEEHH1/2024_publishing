import { data } from "./data.js";
// liteAdList 첫번째 헬스장
// centerList 두번째 헬스장
// tag 헬스
//program.free
// service.free
// gymName
// gymPhotoBig- 메인 gymPhotoSmall - 밑에
// address 주소
// review.rate , review.count 평점
// isLiked 하트 표시
//  hasDailyItem 일일권
// isLowestPrice 다짐 회원가
//  price: {
//     name: "헬스 회원권",
//     count: null,
//     isLowestPrice: true,
//     lowestPrice: 239000,
//     originalPrice: 264000,
//     period: 12,
//     priceType: "period",
//     itemTags: ["헬스"],
//     lowestPriceRemainingCount: 10,
//   }

const gymData = data.result.liteAdList;
const main = document.querySelector(".main");

const makeCard = (data) => {
  return `
  <div class="headCard">
  <div class="card">
    <div class="cardMain">
      <div class="cardImg">
        <img
          src=${data.gymPhotoBig}
          alt=""
        />
      </div>
      <div class="cardText">
        <div class="cardTextMain">
          <div class="tag">${data.tags.join(", ")}</div>
          <div class="title">${data.gymName}</div>
          <div class="grade"><div class="gradeIcon">
            <i class="fa-solid fa-star"></i>
          </div class="gradeIcon">${data.review.rate} (${
    data.review.count
  })</div>
          <div class="address">${data.address}</div>
        </div class="cardTextMain">
        <div class="cardTextPrice">
          <div class="daily">${data.hasDailyItem ? "일일권" : ""}</div>
          
          <div class="price">
            <div class="pricePercent">9%</div>
            <div class="priceNum">${data.price.originalPrice}</div>
            <div class="month">/월</div>
          </div>
        </div>
      </div>
    </div>
    <div class="free">
      <div class="programBox">
        <div class="program">무료프로그램</div>
        <div class="programData">${data.program.free}</div>
      </div class="programBox">
      <div class="serviceBox">
        <div class="service">무료서비스</div>
        <div class="serviceData">${data.service.free}</div>
      </div class="serviceBox">
    </div>
  </div>
</div>
      `;
};

gymData.forEach((v) => main.insertAdjacentHTML("beforeend", makeCard(v)));
