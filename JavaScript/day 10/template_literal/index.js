const box = document.querySelector(".box");
// const names = ["kim", "lee", "park"];
// box.innerHTML = `<h1>My Friend</h1>
// <ul>
//     ${names.map((v) => `<li>${v}</li>`).join("")}
// </ul>`;

const books = [
  {
    title: "자바스크립트 꿀잼",
    author: "손흥민",
    price: 30000,
    isSale: true,
  },
  {
    title: "타입스크립트 안쓰는법",
    author: "황희찬",
    price: 24000,
    isSale: false,
  },
  {
    title: "구글링하다가 막혔을 때 코딩하는법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];

const isBookSale = (books) => {
  return books.isSale ? books.price * 0.9 : books.price;
};

// box.innerHTML = `
// ${books
//   .map(
//     (v) => `
//     <h1 class = "ddd">${v.title}</h1>
//     <h4>${v.author}</h4>
//     <span>${isBookSale(v)}</span>`
//   )
//   .join("")}`;

//box.insertAdjacentHTML('어디에','무엇을')
//afterbegin : 맨처음 자식으로
// beforebegin: 맨뒤 자식으로
// box.insertAdjacentHTML(
//   "beforebegin",
//   `
// ${books
//   .map(
//     (v) => `<h1>${v.title}</h1>
//     <h3>${v.author}</h3>
//     <span>${isBookSale(v)}</span>`
//   )
//   .join("")}`
// );

// books.forEach((v) => {
//   box.insertAdjacentElement(
//     "beforebegin",
//     `
//     <h1>${v.title}</h1>
//     <h4>${v.author}</h4>
//     <span>${isBookSale(v)}</span>

//     `
//   );
// });

const makeBook = (book) =>
  `<h1>${book.title}</h1>
    <h4>${book.author}</h4>
    <span>${isBookSale(book)}</span>`;

books.forEach((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));
