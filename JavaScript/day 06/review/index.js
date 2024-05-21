const password = document.querySelector(".pass");
const openBtn = document.querySelector(".open");
const closedBtn = document.querySelector(".closed");
closedBtn.style.display = "none";

openBtn.addEventListener("click", () => {
  password.type = "password";
  closedBtn.style.display = "block";
  openBtn.style.display = "none";
});
closedBtn.addEventListener("click", () => {
  password.type = "password";
  openBtn.style.display = "block";
  closedBtn.style.display = "none";
});
