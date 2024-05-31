// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// 1.stateLess[request// response] 대원칙
// 2. 쿠키, 세션, JWT[]
// 3. restful api

// const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v));

// const companyData = fetch("https://fakerapi.it/api/v1/companies?_quantity=10");
// companyData.then((v) => v.json()).then((v) => console.log(v));

// https://fakerapi.it/api/v1/books?_quantity=20
//"id": 1,
// "title": "Cheshire Cat,'.",
// "author": "Harry Kertzmann",

// "description": "Just then her head to keep back the wandering hair that WOULD always get into her face. 'Wake up, Alice dear!' said her sister; 'Why, what a delightful thing a bit!' said the King: 'leave out that.",

// "image": https://picsum.photos/200,
// card형태로 만들기

const bookData = fetch("https://fakerapi.it/api/v1/books?_quantity=20");

const makeCard = (data) =>
  `
<div class="card">
<div class="cardImg">
  <img src="https://picsum.photos/200" alt="" />
</div>
<div class="cardText">
  <div class="title">title : ${data.title}</div>
  <div class="author">author : ${data.author}</div>
  <div class="description">description : ${data.description}</div>
</div>
</div>


    `;
const cardContainer = document.querySelector(".cardContainer");
bookData
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((book) => {
      cardContainer.insertAdjacentHTML("beforeend", makeCard(book));
    });
  });
// console.log(bookData.data);
