// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};


// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = ()=> {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = ()=> {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = ()=> {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmPasswordInput.onkeyup = ()=> {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};


// add callback function for submit button.
let isFirstNameOk = false;
let isLastNameOk = false;
let isEmailOk = false;
let isPasswordOk = false;
let isConfirmPasswordOk = false;



submitBtn.onclick = () => {
  console.log(validateEmail(emailInput.value));

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
    firstNameInput.classList.remove("is-valid");
    isFirstNameOk = false;
  } else {
    firstNameInput.classList.add("is-valid");
    firstNameInput.classList.remove("is-invalid");
    isFirstNameOk = true;
  }

  // validate last name
  
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
    lastNameInput.classList.remove("is-valid");
    isLastNameOk = false;
  } else {
    lastNameInput.classList.add("is-valid");
    lastNameInput.classList.remove("is-invalid");

    islastNameOk = true;
  }


  // validate email
  
  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    isEmailOk = false;
  } else {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    isEmailOk = true;
  }

  // validate password
 
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    isPasswordOk = false;
  } else {
    passwordInput.classList.add("is-valid");    
    passwordInput.classList.remove("is-invalid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value || passwordInput.value === "") {
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordInput.classList.remove("is-valid");
    isConfirmPasswordOk = false;
  } else {
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordInput.classList.remove("is-invalid");
    isConfirmPasswordOk = true;
  }

  if (isFirstNameOk && islastNameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";

  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};