import { btn } from "./index.js";

function btnChanger(type, text, color) {
  btn.type = type;
  btn.innerText = text;
  btn.style.backgroundColor = color;
}

function arraySorting(arr) {
  const sortedArr = arr.sort((a, b) => +a.key - +b.key);
  return sortedArr;
}

export { arraySorting, btnChanger };
