const form = document.getElementById("contactForm");

form.addEventListener("submit", function() {
  let formIsValid = validateForm();

  if (formIsValid) {
    submitForm();

    // When the form is submitted, clear the displayed form and show a 'thank you' message in the box
    document.getElementById('contactFormHeader').innerHTML = "Thanks for reaching out!";
    document.getElementById('contactForm').style.display = "none";
    document.getElementById('submissionMessage').style.display = "block";
  }
}, false);

/**
 * Checks each text input for valid values, preventing the submit event from
 * going forward if any criteria is not met.
 * @param {} event The form submit event 
 * @returns true if form was successfully validated, false otherwise.
 */
function validateForm(event) {
  let isValid = true;
  document.getElementById("contactFormErrorMessage").innerHTML = "";
  let name = document.getElementById("name").value;

  if (name.length < 2) {
    document.getElementById("contactFormErrorMessage").innerHTML = "*Name must be a minimum of 2 characters in length.";
    isValid = false;
    event.preventDefault();
  }

  if (stringContainsNonAlphabet(name)) {
    document.getElementById("contactFormErrorMessage").innerHTML = "*Name must contain only alphabet characters (a-z and A-Z).";
    isValid = false;
    event.preventDefault();
  }

  return isValid;
}

/**
 * Checks the provided string for non-alphabet characters.
 * @param {string} stringToValidate 
 * @returns True if the string contains non-alphabet characters, false otherwise.
 */
function stringContainsNonAlphabet(stringToValidate) {
  for (let i = 0; i < stringToValidate.length; i++) {
    if (!(/[a-zA-Z]/).test(stringToValidate.charAt(i))) {
      return true;
    }
  }
}

/**
 * Prepares the content the user submitted to the contact form into an email
 */
function submitForm() {
  $(function() {
    body = ("Name: " + $('#name').val() + "  Email: " + $('#email').val() +
            "  How I found your website: " + $('#select').val() +                   
            "  Message: '" + $('#formMessage').val() + "'");
    window.location = "mailto:nataliegracebates@gmail.com?subject=Natalie Bates Contact Form&body=" + body;
  });
}
