function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let errorFirstName = document.getElementById("first-name-error");
let errorLastName = document.getElementById("last-name-error");
let errorEmail = document.getElementById("email-error");
let errorPassword = document.getElementById("password-error");

let firstNameField = document.getElementById("firstNameField");
let lastNameField = document.getElementById("lastNameField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");

document.getElementById("form-fields").addEventListener("submit", e => {
  e.preventDefault();

  console.log(e.target.elements);

  if (e.target.elements[0].value === "") {
    errorFirstName.style.display = "block";
    firstNameField.style.background =
      'url("images/icon-error.svg") 97% no-repeat';
  } else {
    errorFirstName.style.display = "none";
    firstNameField.style.background = "none";
  }

  if (e.target.elements[1].value === "") {
    errorLastName.style.display = "block";
    lastNameField.style.background =
      'url("images/icon-error.svg") 97% no-repeat';
  } else {
    errorLastName.style.display = "none";
    lastNameField.style.background = "none";
  }

  if (e.target.elements[2].value === "") {
    errorEmail.innerHTML = "Email cannot be empty";
    errorEmail.style.display = "block";
    emailField.style.background = 'url("images/icon-error.svg") 97% no-repeat';
  } else {
    if (!validateEmail(e.target.elements[2].value)) {
      errorEmail.innerHTML = "Looks like this is not an email";
      errorEmail.style.display = "block";
      emailField.style.background =
        'url("images/icon-error.svg") 97% no-repeat';
    } else {
      errorEmail.style.display = "none";
      emailField.style.background = "none";
    }
  }

  if (e.target.elements[3].value === "") {
    errorPassword.style.display = "block";
    passwordField.style.background =
      'url("images/icon-error.svg") 97% no-repeat';
  } else {
    errorPassword.style.display = "none";
    passwordField.style.background = "none";
  }
});
