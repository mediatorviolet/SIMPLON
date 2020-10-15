var email = document.getElementById('email');
email.addEventListener('keyup', function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('EMAAAAAAAIL');
    } else {
        email.setCustomValidity('');
    }
});
