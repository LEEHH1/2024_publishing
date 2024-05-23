// 참조 : array, element, object

const coffee = {
  coffeeName: "아메리카노",
  coffePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: "라떼",
  coffePrice: 2500,
  hasShot: true,
};
// book title,author,publishedYear,pasges

const book = {
  title: "파수꾼",
  author: "하퍼 리",
  publishedYear: 2015,
  pages: 200,
};

book["title"]; // 파수꾼
book.title; // 파수꾼

book.color = "green"; //color: "green" 추가
delete book.pages;
"author" in book; // ture or false
