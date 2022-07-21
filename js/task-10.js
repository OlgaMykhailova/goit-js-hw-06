function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");

const createButtonEl = document.querySelector("[data-create]");

createButtonEl.addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);
  createBoxes(amount);
});

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);
  }
  boxesEl.append(...elements);
}

const destroyButtonEl = document.querySelector("[data-destroy]");

destroyButtonEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
