function validateEmail() {
    var regexString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('email');
    var verified = document.createElement('small');
    if (regexString.test(email.value)) {
        verified.innerHTML = 'Hooray! valid email';
        verified.className = 'verifiedEmail';
        document.getElementById('email-group').appendChild(verified);
    } else {
        verified.innerHTML = 'Woops! there was an error';
        verified.className = 'invalidEmail';
        document.getElementById('email-group').appendChild(verified);
    }
};
