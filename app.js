import { readCounter, saveCounter } from "./counter.js";

const counterValue = document.querySelector("#counter-value");
const incrementButton = document.querySelector("#increment-button");
const resetButton = document.querySelector("#reset-button");

let count = readCounter(window.localStorage);

function render() {
  counterValue.textContent = String(count);
}

incrementButton.addEventListener("click", () => {
  count = saveCounter(window.localStorage, count + 1);
  render();
});

resetButton.addEventListener("click", () => {
  count = saveCounter(window.localStorage, 0);
  render();
});

render();
