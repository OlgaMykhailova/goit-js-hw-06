const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onValueChange);

function onValueChange() {
    spanEl.style.fontSize = `${this.value}px`;
}
