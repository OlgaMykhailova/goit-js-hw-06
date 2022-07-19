const inputEl = document.querySelector('#validation-input');
const valueOfSymbols = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation() {
this.classList.remove('valid','invalid');
this.value.length === valueOfSymbols ?  this.classList.add('valid') : this.classList.add('invalid');
}