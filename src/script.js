function validateForm() {
  var email = document.getElementById('exampleInputEmail1').value;
  var fullName = document.getElementById('exampleInputPassword1').value;
  var phoneNumber = document.getElementById('exampleInputPhoneNumber').value;
  var agreement = document.getElementById('exampleCheck1').checked;

  if (!email || !fullName || !phoneNumber || !agreement) {
    alert('Please fill out all fields and agree to the terms.');
    return false;
  }

  alert('Enrollment successful!');
  return true;
}

function validateLoginForm() {
  var email = document.getElementById('exampleInputEmail').value;
  var password = document.getElementById('exampleInputPassword').value;
  var agreement = document.getElementById('exampleCheck').checked;

  if (!email || !password || !agreement) {
    alert('Please fill out all fields and agree to the terms.');
    return false;
  }

  alert('Login successful!');
  return true;
}