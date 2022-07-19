let counterValue = 0;
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');
const increaseValueBtn = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

decreaseValueBtn.addEventListener('click', onDecreaseValue);
increaseValueBtn.addEventListener('click', onIncreaseValue);

function onDecreaseValue() {
    counterValue -= 1;
    spanEl.textContent = counterValue;
    return counterValue;
};

function onIncreaseValue() {
    counterValue += 1;
    spanEl.textContent = counterValue;
    return counterValue;
};