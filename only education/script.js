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

// form end


// current date start

const date = new Date(); 
const dd = date.getDate(); 
const mm = date.getMonth() + 1; 
const yyyy = date.getFullYear(); 
const newDate = dd + "-" + mm + "-" +yyyy; 
const p = document.getElementById("currentDate"); 
p.innerHTML = newDate; 

// current date end