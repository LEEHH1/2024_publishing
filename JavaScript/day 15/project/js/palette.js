

let stage = 1;
let clearedStages = 0;
const initialOpacity = 0.7;
const opacityIncrease = 0.05;

function createBoard(){
  const gameBoard = document.querySelector('.gameBoard');
  const size = 2**stage;
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  const baseColor = generateRandomRGBColor();
    const correctIndex = Math.floor(Math.random() * (size * size));

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