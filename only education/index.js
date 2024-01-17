








document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['leadData'];
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Validate mobile number before submitting
      if (!validateMobileNumber()) {
        return;
      }
  
      // Fetch URL for Google Apps Script
    //   const scriptURL = "https://script.google.com/macros/s/AKfycbzQifehznokunrsvzoVeqTUgdJgdrhAsVK_8sdPbijBbfWn7eZY1q1yZjeTb2hiSQ_y/exec";
  

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec';

      // Send form data to Google Apps Script
      fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(new FormData(form)).toString()
      })
      .then(response => {
        if (response.ok) {
        //   alert("Thank you! Your form is submitted successfully.");
  
          // Clear form fields after successful submission
          form.reset();
  
          // You can also reset specific fields like this:
          // form.querySelector('[name="fullName"]').value = '';
          // form.querySelector('[name="mobileNumber"]').value = '';
          // ...
  
          // Update other UI elements or perform additional actions here
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => console.error('Error!', error.message));
    });
  
    function validateMobileNumber() {
      // Validate mobile number logic here
      return true;
    }
  });








