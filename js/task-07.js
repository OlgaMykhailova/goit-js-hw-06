const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('change', onValueChange);

function onValueChange() {
    spanEl.style.fontSize = `${this.value}px`;
}
