function validateForm() {
  var email = document.getElementById('exampleInputEmail1').value;
  var fullName = document.getElementById('exampleInputPassword1').value;
  var phoneNumber = document.getElementById('exampleInputPhoneNumber').value;
  var agreement = document.getElementById('exampleCheck1').checked;

  alert('Enrollment successful!');
  return true;
}

function validateLoginForm() {
  var email = document.getElementById('exampleInputEmail').value;
  var password = document.getElementById('exampleInputPassword').value;
  var agreement = document.getElementById('exampleCheck').checked;

  alert('Login successful!');
  return true;

}