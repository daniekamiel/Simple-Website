function processFormData() {
  var name = document.getElementById('txt_name').value.trim();
  var email = document.getElementById('txt_email').value.trim();
  var phone = document.getElementById('txt_phone').value.trim();
  var location = document.getElementById('txt_location').value;
  var comments = document.getElementById('txt_feedback').value.trim();

  var error_message = 'The following fields had errors:\n\n';
  var data = 'Congratulations! 🎉\n\n';
  var error_flag = false;

  // Validate Name
  if (name === '') {
      error_message += '❌ Name: Please enter your name\n';
      error_flag = true;
  } else {
      data += '✅ Name: ' + name + '\n';
  }

  // Validate Email
  if (!validateEmail(email)) {
      error_message += '❌ Email: Please enter a valid email address\n';
      error_flag = true;
  } else {
      data += '✅ Email: ' + email + '\n';
  }

  // Validate Phone Number
  if (!validatePhone(phone)) {
      error_message += '❌ Phone: Please enter a valid phone number (Example: 6012-3456789)\n';
      error_flag = true;
  } else {
      data += '✅ Phone: ' + phone + '\n';
  }

  // Validate Gender
  var gender_elements = document.getElementsByName('Gender');
  var gender = '';
  for (var i = 0; i < gender_elements.length; i++) {
      if (gender_elements[i].checked) {
          gender = gender_elements[i].value === 'M' ? 'Male' : 'Female';
          break;
      }
  }

  if (gender === '') {
      error_message += '❌ Gender: Please select a gender\n';
      error_flag = true;
  } else {
      data += '✅ Gender: ' + gender + '\n';
  }

  // Get selected membership
  var membership = document.querySelector('input[name="membership"]:checked');
  if (!membership) {
      error_message += "- Membership: Please select a membership package.\n";
      error_flag = true;
  } else {
      data += "💳 Membership: " + membership.value + "\n";
  }

  // Validate Comments
  if (comments === '') {
      error_message += '❌ Comments: Please enter your feedback\n';
      error_flag = true;
  } else {
      data += '✅ Feedback: ' + comments + '\n';
  }

  // Add Location
  data += '📍 You are from: ' + location + '\n';

  // Show Errors or Success Message
  if (error_flag) {
      alert(error_message);
  } else {
      alert(data);
  }
}

// Function to Validate Email
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Function to Validate Phone Number
function validatePhone(phone) {
  var phonePattern = /^6[0-9]{3}-[0-9]{7,8}$/;
  return phonePattern.test(phone);
}
