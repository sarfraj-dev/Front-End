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
    arrows: false,
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
/*

const date = new Date();
const dd = date.getDate();
const mm = date.getMonth() + 1;
const yyyy = date.getFullYear();
const newDate = dd + "-" + mm + "-" + yyyy;
const p = document.getElementById("currentDate");
p.innerHTML = newDate;
*/


/*

const date = new Date();
const dd = date.getDate();
const mm = date.getMonth() + 1;
const yyyy = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const newDate = `${dd}-${mm}-${yyyy} ${hours}:${minutes}`;

const p = document.getElementById("currentDate");
p.innerHTML = newDate;
*/
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



// news section start


// var multiItemSlider = (function () {
//   return function (selector, config) {
//     var
//       _mainElement = document.querySelector(selector), // основный элемент блока
//       _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//       _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//       _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//       _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//       _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
//       _positionLeftItem = 0, // позиция левого активного элемента
//       _transform = 0, // значение транфсофрмации .slider_wrapper
//       _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//       _items = []; // массив элементов

//     // наполнение массива _items
//     _sliderItems.forEach(function (item, index) {
//       _items.push({ item: item, position: index, transform: 0 });
//     });

//     var position = {
//       getItemMin: function () {
//         var indexItem = 0;
//         _items.forEach(function (item, index) {
//           if (item.position < _items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getItemMax: function () {
//         var indexItem = 0;
//         _items.forEach(function (item, index) {
//           if (item.position > _items[indexItem].position) {
//             indexItem = index;
//           }
//         });
//         return indexItem;
//       },
//       getMin: function () {
//         return _items[position.getItemMin()].position;
//       },
//       getMax: function () {
//         return _items[position.getItemMax()].position;
//       }
//     }

//     var _transformItem = function (direction) {
//       var nextItem;
//       if (direction === 'right') {
//         _positionLeftItem++;
//         if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
//           nextItem = position.getItemMin();
//           _items[nextItem].position = position.getMax() + 1;
//           _items[nextItem].transform += _items.length * 100;
//           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//         }
//         _transform -= _step;
//       }
//       if (direction === 'left') {
//         _positionLeftItem--;
//         if (_positionLeftItem < position.getMin()) {
//           nextItem = position.getItemMax();
//           _items[nextItem].position = position.getMin() - 1;
//           _items[nextItem].transform -= _items.length * 100;
//           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
//         }
//         _transform += _step;
//       }
//       _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//     }

//     // обработчик события click для кнопок "назад" и "вперед"
//     var _controlClick = function (e) {
//       var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
//       e.preventDefault();
//       _transformItem(direction);
//     };

//     var _setUpListeners = function () {
//       // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
//       _sliderControls.forEach(function (item) {
//         item.addEventListener('click', _controlClick);
//       });
//     }

//     // инициализация
//     _setUpListeners();

//     return {
//       right: function () { // метод right
//         _transformItem('right');
//       },
//       left: function () { // метод left
//         _transformItem('left');
//       }
//     }

//   }
// }());

// var slider = multiItemSlider('.slider')








/*
$(document).ready(function () {
  var itemsMainDiv = ('.MultiCarousel');
  var itemsDiv = ('.MultiCarousel-inner');
  var itemWidth = "";

  $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
          click(0, this);
      else
          click(1, this)
  });

  ResCarouselSize();




  $(window).resize(function () {
      ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
      var incno = 0;
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr("id", "MultiCarousel" + id);


          if (bodyWidth >= 1200) {
              incno = itemsSplit[3];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 992) {
              incno = itemsSplit[2];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 768) {
              incno = itemsSplit[1];
              itemWidth = sampwidth / incno;
          }
          else {
              incno = itemsSplit[0];
              itemWidth = sampwidth / incno;
          }
          $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
          $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);
          });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");

      });
  }


  //this function used to move the items
  function ResCarousel(e, el, s) {
      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + ' ' + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
              translateXval = 0;
              $(el + ' ' + leftBtn).addClass("over");
          }
      }
      else if (e == 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + ' ' + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
              translateXval = itemsCondition;
              $(el + ' ' + rightBtn).addClass("over");
          }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
  }

});
*/


$(document).ready(function () {
  $(".my-slider-second").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 1000,
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

