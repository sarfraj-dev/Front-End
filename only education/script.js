document.addEventListener("DOMContentLoaded", function () {
  var allReadMoreButtons = document.querySelectorAll(".readMore");

  allReadMoreButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      toggleReadMore(event.target);
    });
  });

  document.addEventListener("click", function (event) {
    // Close all clickReadMore elements when clicking outside
    if (
      !event.target.matches(".readMore") &&
      !event.target.closest(".clickReadMore")
    ) {
      closeAllReadMore();
    }
  });
});

function toggleReadMore(button) {
  var clickReadMore = button.nextElementSibling;
  var currentHeight = clickReadMore.clientHeight;
  var isCollapsed = currentHeight === 0;

  // Close all open clickReadMore elements
  closeAllReadMore();

  if (isCollapsed) {
    // Open the clicked clickReadMore
    clickReadMore.style.maxHeight = clickReadMore.scrollHeight + "px";
  }
}

function closeAllReadMore() {
  var allReadMoreElements = document.querySelectorAll(".clickReadMore");
  allReadMoreElements.forEach(function (element) {
    element.style.maxHeight = 0;
  });
}

// slider start

$(document).ready(function () {
  $(".my-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// slider end

// form start
/*

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec";
// const thankYouMessage = document.getElementById("thankYouMessage");



const form = document.forms['leadForm'];

form.addEventListener('submit', e => {
    e.preventDefault();

    // Check mobile number validation before submitting
    if (!validateMobileNumber()) {
        return; // If validation fails, exit the function without submitting
    }
    // form.style.display = 'none';
    // thankYouMessage.style.display = 'block';


    // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    //     .then(response => alert("Thank you! Your form is submitted successfully."))
    //     .then(() => { window.location.reload(); })
    //     .catch(error => console.error('Error!', error.message));


    // form.style.display = 'none';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // thankYouMessage.style.display = 'block';
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));

});

// Mobile number validation
function validateMobileNumber() {
    const mobileNumberInput = document.getElementById('mobileNumber');
    const mobileError = document.getElementById('mobileError');
    const mobileNumber = mobileNumberInput.value.trim();

    // Use a regular expression to check if the input contains only numeric characters
    const numericRegex = /^[0-9]+$/;

    // Reset the error message
    mobileError.textContent = "";

    if (!numericRegex.test(mobileNumber)) {
        mobileError.textContent = "Please enter a valid mobile number containing only numeric characters.";
        return false;
    }

    // You can add additional checks here, such as length criteria
    if (mobileNumber.length !== 10) {
        mobileError.textContent = "Mobile number should be 10 digits long.";
        return false;
    }

    // If the input passes all checks, the form is valid
    return true;
}
*/

// form end

// current date start

const date = new Date();
const dd = date.getDate();
const mm = date.getMonth() + 1;
const yyyy = date.getFullYear();
const newDate = dd + "-" + mm + "-" + yyyy;
const p = document.getElementById("currentDate");
p.innerHTML = newDate;

// current date end

const openPopupButtons = document.querySelectorAll(".formPopupButton");
const popupContainerDiv = document.getElementById("popupContainer");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popupContainerDiv.style.display = "flex";
  });
});

function closePopup() {
  popupContainer.style.display = "none";
}
// popup form

/*

const openPopupButton = document.getElementById('openPopup');
  const popupContainer = document.getElementById('popupContainer');
  const leadForm = document.getElementById('leadForm');

  openPopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
  });

  function closePopup() {
    popupContainer.style.display = 'none';
  }

  function submitForm() {
    const formData = new FormData(leadForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const url = 'https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formObject).toString()
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form data sent successfully', data);
      // Assuming your server responds with a JSON containing success message
      // You can customize the logic to display a success message or redirect
      // For example: displaySuccessMessage(data.message);
      leadForm.reset();

      closePopup();


    })
    .catch(error => {
      console.error('Error sending form data:', error);
      // Handle the error, show an error message, etc.
    });
  }

  window.onclick = function (event) {
    if (event.target === popupContainer) {
      closePopup();
    }
  };

*/

/*
function submitForm() {
  const leadForm = document.getElementById('leadForm');
  const requiredFields = leadForm.querySelectorAll('[required]');
  const formObject = {};

  // Check if all required fields have values
  let isValid = true;
  requiredFields.forEach(field => {
    const fieldName = field.getAttribute('name');
    const fieldValue = field.value.trim();

    if (!fieldValue) {
      isValid = false;
      // Display an error message or style the field to indicate it's required
      // field.style.border = '1px solid red';
    } else {
      // If the field has a value, remove any previous error styling
      field.style.border = '';
    }

    formObject[fieldName] = fieldValue;
  });

  // If any required field is empty, don't proceed with the submission
  if (!isValid) {
    return;
  }

  const url = 'https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formObject).toString()
  })
    .then(response => response.json())
    .then(data => {
      console.log('Form data sent successfully', data);
      // Assuming your server responds with a JSON containing success message
      // You can customize the logic to display a success message or redirect
      // For example: displaySuccessMessage(data.message);
      leadForm.reset();
      closePopup();
    })
    .catch(error => {
      console.error('Error sending form data:', error);
      // Handle the error, show an error message, etc.
    });
}

*/

// this is code for all requried

function submitForm() {
  const leadForm = document.getElementById("leadForm");
  const requiredFields = leadForm.querySelectorAll("[required]");
  const formObject = {};

  // Check if all required fields have values
  let isValid = true;

  requiredFields.forEach((field) => {
    const fieldName = field.getAttribute("name");
    const fieldValue = field.value.trim();

    if (!fieldValue) {
      isValid = false;
      // Display an error message or style the field to indicate it's required
      // For example: field.style.border = '1px solid red';
    } else {
      // If the field has a value, remove any previous error styling
      field.style.border = "";
    }

    formObject[fieldName] = fieldValue;
  });

  // If any required field is empty, don't proceed with the submission
  if (!isValid) {
    return;
  }

  const url =
    "https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec";

  // Use FormData to handle form data and headers
  const formData = new FormData(leadForm);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Form data sent successfully", data);
      // Assuming your server responds with a JSON containing success message
      // You can customize the logic to display a success message or redirect
      // For example: displaySuccessMessage(data.message);
      leadForm.reset();
      closePopup();
    })
    .catch((error) => {
      console.error("Error sending form data:", error);
      // Handle the error, show an error message, etc.
    });
}

/*

function submitForm() {
  const leadForm = document.getElementById('leadForm');
  const requiredFields = leadForm.querySelectorAll('[required]');
  const mobileNumberField = document.getElementById('mobileNumber'); // assuming your mobile number field has the id 'mobileNumber'
  const formObject = {};

  // Remove existing error message, if any
  removeError();

  // Check if all required fields have values
  let isValid = true;

  requiredFields.forEach(field => {
    const fieldName = field.getAttribute('name');
    const fieldValue = field.value.trim();

    if (!fieldValue) {
      isValid = false;
      // Display an error message or style the field to indicate it's required
      displayError(field, 'This field is required.');
    } else {
      // If the field has a value, remove any previous error styling
      field.style.border = '';
    }

    formObject[fieldName] = fieldValue;
  });

  // Validate mobile number
  const mobileNumberValue = mobileNumberField.value.trim();
  if (!isValidMobileNumber(mobileNumberValue)) {
    isValid = false;
    // Display an error message or style the field to indicate it's invalid
    displayError(mobileNumberField, 'Invalid mobile number. Please enter a valid 10-digit number.');
  } else {
    mobileNumberField.style.border = '';
  }

  // If any required field is empty or mobile number is invalid, don't proceed with the submission
  if (!isValid) {
    return;
  }

  const url = 'https://script.google.com/macros/s/AKfycbxV2S2SP1qBCvoZB4mQRml_NxhOLipxit40TG-R3hQm-55vle2hjmb8tsVXmnfmoJo/exec';

  // Use FormData to handle form data and headers
  const formData = new FormData(leadForm);

  fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log('Form data sent successfully', data);
      // Assuming your server responds with a JSON containing success message
      // You can customize the logic to display a success message or redirect
      // For example: displaySuccessMessage(data.message);
      leadForm.reset();
      closePopup();
    })
    .catch(error => {
      console.error('Error sending form data:', error);
      // Handle the error, show an error message, etc.
    });
}

function isValidMobileNumber(mobileNumber) {
  // Check if the mobile number is not more than 10 digits and contains only numeric characters
  return /^\d{1,10}$/.test(mobileNumber);
}

function displayError(field, errorMessage) {
  // Create and insert an error element below the field
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = errorMessage;

  // Insert the error element below the field
  field.parentNode.insertBefore(errorElement, field.nextSibling);

  // Style the field to indicate the error
  field.style.border = '1px solid red';
}

function removeError() {
  // Remove any existing error messages and styling
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(errorElement => errorElement.remove());

  const fields = document.querySelectorAll('[required]');
  fields.forEach(field => {
    field.style.border = '';
  });
}
*/

// faq start

// document.addEventListener('DOMContentLoaded', function () {
//   const faqItems = document.querySelectorAll('.faq-item');

//   document.addEventListener('click', function (event) {
//     // Close any opened FAQ item when clicking outside
//     if (!event.target.closest('.faq-item')) {
//       closeAllFAQItems();
//     }
//   });

//   faqItems.forEach(item => {
//     const question = item.querySelector('.question');
//     const answer = item.querySelector('.answer');

//     question.addEventListener('click', function (event) {
//       event.stopPropagation(); // Prevent the click event from reaching the document listener

//       closeAllFAQItems(); // Close any opened FAQ item

//       item.classList.toggle('open');
//       answer.style.display = item.classList.contains('open') ? 'block' : 'none';
//       answer.style.height="auto";
//     });
//   });

//   function closeAllFAQItems() {
//     faqItems.forEach(item => {
//       item.classList.remove('open');
//       const answer = item.querySelector('.answer');
//       answer.style.display = 'none';
//       answer.style.height = '0'; // Smooth collapse
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  // Open the first FAQ item by default
  const firstItem = faqItems[0];
  const firstAnswer = firstItem.querySelector(".answer");
  firstItem.classList.add("open");
  firstAnswer.style.display = "block";
  firstAnswer.style.height = "auto";

  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", function () {
      const isOpen = item.classList.toggle("open");
      answer.style.display = isOpen ? "block" : "none";
      answer.style.height = isOpen ? "auto" : "0";

      // Close other FAQ items when opening a new one
      if (isOpen) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("open")) {
            otherItem.classList.remove("open");
            otherItem.querySelector(".answer").style.display = "none";
            otherItem.querySelector(".answer").style.height = "0";
          }
        });
      }
    });
  });
});

// banner
// document.addEventListener('DOMContentLoaded', function () {
//   const images = [
//     'http://127.0.0.1:58458/Assets/sliderVitjpg.jpg',
//     'http://127.0.0.1:58458/Assets/slide%20img/mukeshpael.png',
//     'http://127.0.0.1:58458/Assets/slide%20img/manipal.png'
//   ];

//   const bannerImg = document.querySelector('.bannerImg');

//   if (!bannerImg) {
//     console.error('Element with class "bannerImg" not found.');
//     return;
//   }

//   let currentIndex = 0;

//   function changeBackground() {
//     currentIndex = (currentIndex + 1) % images.length;
//     bannerImg.style.transition = 'background-position 0.8s ease-in-out';
//     bannerImg.style.backgroundPosition = '100% 50%'; // Slide from right to left
//     setTimeout(function () {
//       bannerImg.style.backgroundImage = `url('${images[currentIndex]}')`;
//       bannerImg.style.backgroundPosition = '0 50%'; // Reset position to start
//     }, 800); // 800 milliseconds for slide transition
//   }

//   // Set initial background image
//   bannerImg.style.backgroundImage = `url('${images[currentIndex]}')`;

//   setInterval(changeBackground, 3000); // Change image every 3 seconds
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const images = [
//     'assets/manipal banner.png',
//     'assets/rorkee banner.png',
//     'assets/amrita vidhyapeeth banner.png'
//     // 'http://127.0.0.1:58458/Assets/slide%20img/manipal.png'
//   ];

//   const bannerImg = document.querySelector('.bannerImg');

//   if (!bannerImg) {
//     console.error('Element with class "bannerImg" not found.');
//     return;
//   }

//   // Set initial background image
//   bannerImg.style.backgroundImage = `url('${images[2]}')`; // Display only the third image

//   // Remove the slider on screens with a width of 768 pixels or less
//   if (window.innerWidth <= 768) {
//     return; // Exit the function without setting up the interval
//   }

//   let currentIndex = 0;

//   function changeBackground() {
//     currentIndex = (currentIndex + 1) % images.length;
//     bannerImg.style.backgroundImage = `url('${images[currentIndex]}')`;
//   }

//   var intervalId = setInterval(changeBackground, 4000); // Change image every 3 seconds on larger screens
// });

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "assets/manipal banner.png",
    "assets/rorkee banner.png",
    "assets/amrita vidhyapeeth banner.png",
  ];

  const bannerImg = document.querySelector(".bannerImg");

  if (!bannerImg) {
    console.error('Element with class "bannerImg" not found.');
    return;
  }

  // Set initial background image
  bannerImg.style.backgroundImage = `url('${images[2]}')`; // Display only the third image

  // Remove the slider on screens with a width of 768 pixels or less
  if (window.innerWidth <= 768) {
    return; // Exit the function without setting up the interval
  }

  let currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    bannerImg.style.transition = "background-image 0.8s ease-in-out";
    bannerImg.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  var intervalId = setInterval(changeBackground, 2000); // Change image every 4 seconds on larger screens
});

