const menuData = document.querySelector(".menuData");
const menuBtn = document.querySelector(".menuBtn");
const menuValue = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  const menuList = menuData.value;
  const menu = [menuList];
  console.log(menu);
  menu.forEach((v) => {
    const b = document.createElement("div");
    document.body.appendChild(b);
    b.innerText = v;
  });
});

// 메뉴를 넣고 제출 버튼 누르면

// menu에 글이 누적 되면서 추가
