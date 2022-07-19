function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const boxesEl = document.querySelector('#boxes');

// const divEl = document.createElement('div');
// divEl.style.width = '30px';
// divEl.style.height = '30px';
// divEl.style.backgroundColor = getRandomHexColor();

// boxesEl.append(divEl);

const amount = document.querySelector('#controls').firstElementChild.value;
console.log(amount);

function createBoxes(amount) {

}