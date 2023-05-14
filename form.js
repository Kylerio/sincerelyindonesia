const Form = document.getElementById("Form");
const username = document.getElementById("username");
const email = document.getElementById('email');
const phone = document.getElementById('phone');

Form.addEventListener('submit', () => {
    event.preventDefault();

    checkInput();
});

function checkInput(){
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(nameValue === ''){
        setErrorFor(username, 'Name must be filled');
    }
    else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email must be filled');
    }
    else{
        setSuccessFor(email);
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Name must be filled');
    }
    else{
        setSuccessFor(phone);
    }
}

function setErrorFor(input, message){
    const input = input.parentElement;
    const small = input.querySelector('small');

    small.innerText = message;

    input.className = 'input error';
}

function setSuccessFor(input){
    const input = input.parentElement;
    input.className = 'input success';
}