import { stageColor } from "./color.js";

let paletteRows = 2;
let paletteColumns = 2;
let addPalette = paletteRows * paletteColumns;

const palette = document.querySelector(".palette");
palette.style.gridTemplateColumns = `repeat(${paletteColumns}, 1fr)`;
palette.style.gridTemplateRows = `repeat(${paletteRows}, 1fr)`;

const box = Array(paletteRows * paletteColumns);
console.log(box);
function createcolor() {
  const div = document.createElement("div");
  div.style.backgroundColor = `${stageColor.main()}`;
}

box.map((v) => {
  palette.insertAdjacentHTML("beforeend", createcolor());
});
