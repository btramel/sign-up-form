const submitForm = document.querySelector('button');
const userPassword = document.getElementById('user-password').value;
const confirmUserPassword = document.getElementById('confirm-user-password').value;


submitForm.addEventListener('click', (e) => {
    if ( userPassword !== confirmUserPassword ) {
        e.preventDefault();
        alert('Your passwords do not match.');
    }
});