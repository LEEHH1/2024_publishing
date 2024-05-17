// const minus = document.querySelector(".minusBtn");
// const plus = document.querySelector(".plusBtn");
// const ticket = document.querySelector(".ticket");
// const won = document.querySelector(".won");

// plus.addEventListener("click", () => {
//   const ticketNum = Number(ticket.innerText) + 1;
//   const wonNum = ticketNum * 10000;
//   if (ticketNum >= 10) {
//     won.innerText = wonNum * 0.8;
//   } else if (ticketNum >= 5) {
//     won.innerText = wonNum * 0.9;
//   } else {
//     won.innerText = wonNum * 1;
//   }
//   ticket.innerText = Number(ticket.innerText) + 1;
// });
// minus.addEventListener("click", () => {
//   const ticketNum = Number(ticket.innerText) - 1;
//   const wonNum = ticketNum * 10000;
//   if (ticketNum >= 10) {
//     won.innerText = wonNum * 0.8;
//     ticket.innerText = Number(ticket.innerText) - 1;
//   } else if (ticketNum >= 5) {
//     won.innerText = wonNum * 0.9;
//     ticket.innerText = Number(ticket.innerText) - 1;
//   } else if (5 > ticketNum && ticketNum > 0) {
//     won.innerText = wonNum * 1;
//     ticket.innerText = Number(ticket.innerText) - 1;
//   } else {
//     won.innerText = 0;
//     ticket.innerText = 0;
//   }
// });

const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const ticket = document.querySelector(".ticket");
const won = document.querySelector(".won");

plusBtn.addEventListener("click", () => {
  const ticketNum = Number(ticket.innerText) + 1;
  const wonNum = ticketNum * 10000;
  if (ticketNum >= 10) {
    won.innerText = wonNum * 0.8;
  } else if (ticketNum >= 5) {
    won.innerText = wonNum * 0.9;
  } else {
    won.innerText = wonNum * 1;
  }
  ticket.innerText = ticketNum;
});

minusBtn.addEventListener("click", () => {
  const ticketNum = Number(ticket.innerText) - 1;
  const wonNum = ticketNum * 10000;
  if (ticketNum >= 10) {
    won.innerText = wonNum * 0.8;
    ticket.innerText = Number(ticket.innerText) - 1;
  } else if (ticketNum >= 5) {
    won.innerText = wonNum * 0.9;
    ticket.innerText = Number(ticket.innerText) - 1;
  } else if (ticketNum >= 0) {
    won.innerText = wonNum * 1;
    ticket.innerText = Number(ticket.innerText) - 1;
  } else {
    ticket.innerText = 0;
    won.innerText = 0;
  }
});
