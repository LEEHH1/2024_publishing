let stage = 1; // 현재 스테이지
let clearedStages = 0; // 클리어한 스테이지 수
const initialOpacity = 0.7; // 초기 opacity
const opacityIncrease = 0.05; // 스테이지가 진행될수록 증가하는 opacity 값

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    const size = 2 ** stage; // 현재 스테이지의 행과 열 수
    gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // 그리드의 열 설정

    const baseColor = generateRandomRGBColor(); // 기본 색상 생성
    const correctIndex = Math.floor(Math.random() * (size * size)); // 정답 타일의 인덱스

    gameBoard.innerHTML = ''; // 이전 보드 초기화
    for (let i = 0; i < size * size; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        const opacity = i === correctIndex ? initialOpacity - (opacityIncrease * clearedStages) : initialOpacity + (opacityIncrease * clearedStages);
        tile.innerHTML = `<div class="tile-inner" style="background-color: ${baseColor}; opacity: ${opacity};"></div>`;
        tile.addEventListener('click', () => {
            if (i === correctIndex) {
                clearedStages++;
                if (clearedStages % 2 === 0) {
                    stage++;
                }
                createBoard();
            }
        });
        gameBoard.appendChild(tile);
    }
}

function generateRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createBoard();
