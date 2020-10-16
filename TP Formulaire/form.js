var formValid = document.getElementById("submitBtn");
var firstName = document.getElementById('firstName');
var lastName  = document.getElementById('lastName');
var validName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
formValid.addEventListener('click', validation);

function validation(event) {
    if (firstName.value == '' || lastName.value == '') {
        event.preventDefault();
        firstName.setCustomValidity('Please enter your fisrt name.');
    } else if (validName.test(firstName.value) == false || validName.test(lastName.value) == false) {
        event.preventDefault();
    }
}