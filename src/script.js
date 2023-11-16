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

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function subscribeNewsletter() {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Perform subscription logic here (e.g., send the email to your server)

  // Show a pop-up message indicating successful subscription
  alert('Subscription successful! Thank you for subscribing.');

  // Optionally, clear the input field after successful subscription
  emailInput.value = '';
}