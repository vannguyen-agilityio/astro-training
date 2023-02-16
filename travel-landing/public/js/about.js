// Find button send
const btnSubmitContact = document.getElementById('btn-submit');
const inputSalary = document.getElementById('input-salary');

// Handle click button.
btnSubmitContact.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the value of the input field with id
  let fullName = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let message = document.getElementById('input-message').value;

  let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!regName.test(fullName)) {
    document.getElementById('input-name').focus();
    document.getElementById('error-name').innerHTML =
      'Please enter your full name (first & last name).';
    return false;
  }
  if (!regEmail.test(email)) {
    document.getElementById('input-email').focus();
    document.getElementById('error-email').innerHTML =
      'Please enter your email (example@gmail.com).';
    document.getElementById('error-name').innerHTML = '';
    return false;
  }

  if (message === '') {
    document.getElementById('input-message').focus();
    document.getElementById('error-message').innerHTML =
      'Please enter your message.';
    document.getElementById('error-email').innerHTML = '';
    return false;
  } else {
    document.getElementById('error-message').innerHTML = '';
    let alert = document.getElementsByClassName('alert');
    if (alert.length > 0) {
      alert[0].classList.remove('hidden');
    }
    let alertDel = document.querySelectorAll('.alert-del');
    alertDel.forEach((btnClose) =>
      btnClose.addEventListener('click', function () {
        btnClose.parentElement.classList.add('hidden');
      })
    );
  }
});
