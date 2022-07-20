function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls").firstElementChild;

inputEl.addEventListener("blur", userInput);

const parameters = [];

function userInput() {
  const amount = document.querySelector("#controls").firstElementChild.value;

  for (let i = 0; i < amount; i += 1) {
    parameters[i] = {
      width: `${30 + 10 * i}px`,
      height: `${30 + 10 * i}px`,
      backgroundColor: getRandomHexColor(),
    };
    parameters.push(parameters[i]);
    console.log(parameters[i])
  }
  console.log(parameters);
}

const boxesEl = document.querySelector("#boxes");

const createButtonEl = document.querySelector("[data-create]");

createButtonEl.addEventListener("click", createBoxes);

function createBoxes() {
  const elements = parameters.map((param) => {
    const divEl = document.createElement("div");
    divEl.style.width = param.width;
    divEl.style.height = param.height;
    divEl.style.backgroundColor = param.backgroundColor;
    return divEl;
  });
  boxesEl.append(...elements);
  parameters.splice(0,parameters.length);
  // console.log(parameters)
}

const destroyButtonEl = document.querySelector("[data-destroy]");

destroyButtonEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
