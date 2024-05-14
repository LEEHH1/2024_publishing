const a = document.querySelector(".bar");
const b = document.querySelector(".xIcon");
a.style.display = "none";
a.style.transition = "all 0.5s";

a.addEventListener("click", () => {
  a.style.display = "none";
  b.style.display = "block";
});

b.addEventListener("click", () => {
  b.style.display = "none";
  a.style.display = "block";
});
