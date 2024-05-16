// input : window.prompt
// output: html

// 1번 유저에게 밑변과 높이를 입력을 받고 정삼각형의 넓이를 나타내기
// 2번 한국 돈 원을 입력하면 엔화로 바꿔주기

const heightNum = Number(window.prompt("높이를 입력하세요"));
const underNum = Number(window.prompt("밑변을 입력하세요"));
console.log(`정삼각형의 넓이는 ${heightNum * underNum * 0.5} 입니다.`);

const wonNum = Number(window.prompt("원화를 입력하세요"));
console.log(`엔화: ${wonNum * 0.114}`);
