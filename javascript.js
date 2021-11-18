const form = document.getElementById('form');
const Username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Reconfirm = document.getElementById('Re-confirm');

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const UsernameValue = Username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const ReconfirmValue = Reconfirm.value.trim();

    if UsernameValue === ''{
        setErrorfor(Username,'Username cannot be blank');
    }else {
        setSuccessFor(Username);
    }
}

function setErrorfor(input,message){
    const formControl = input.parentElement;
    const small = formControl.value.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}
