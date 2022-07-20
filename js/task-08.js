const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

    if (email.value === '' || password.value === '') {
        alert('Всі поля мають бути заповнені');
        return;
    } 
    const userData = {
        email: email.value,
        password: password.value,
    }
    console.log(userData);
    event.currentTarget.reset();

}
