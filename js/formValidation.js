/**
 * Handles the validation and submission for the form on the Contact page.
 */


/**
 * Called when the event listener for the contact form's submit button is triggered.
 */
let onSubmit = (event) => {
  let formIsValid = validateForm(event);

  if (formIsValid) {
    submitForm();

    // When the form is submitted, clear the displayed form and show a 'thank you' message in the box
    document.getElementById('contactFormHeader').innerHTML = "Thanks for reaching out!";
    document.getElementById('contactForm').style.display = "none";
    document.getElementById('submissionMessage').style.display = "block";
  }
}

/**
 * Checks each text input for valid values, preventing the submit event from
 * going forward if any criteria is not met.
 * @param {} event The form submit event 
 * @returns true if form was successfully validated, false otherwise.
 */
let validateForm = (event) => {
  let isValid = true;
  let name = document.getElementById("name").value;
  let contactFormErrorMessage = document.getElementById("contactFormErrorMessage");
  contactFormErrorMessage.innerHTML = "";

  if (name.length < 2) {
    contactFormErrorMessage.innerHTML += "*Name must be a minimum of 2 characters in length.<br>";
    isValid = false;
    event.preventDefault();
  }

  if (stringContainsNonAlphabet(name)) {
    contactFormErrorMessage.innerHTML += "*Name must contain only alphabet characters (a-z and A-Z).<br>";
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
let stringContainsNonAlphabet = (stringToValidate) => {
  for (let i = 0; i < stringToValidate.length; i++) {
    if (!(/[a-zA-Z]/).test(stringToValidate.charAt(i))) {
      return true;
    }
  }
}

/**
 * Prepares the content the user submitted to the contact form into an email
 */
let submitForm = () => {
  $(function() {
    body = ("Name: " + $('#name').val() + "  Email: " + $('#email').val() +
            "  How I found your website: " + $('#select').val() +                   
            "  Message: '" + $('#formMessage').val() + "'");
    window.location = "mailto:nataliegracebates@gmail.com?subject=Natalie Bates Contact Form&body=" + body;
  });
}


const form = document.getElementById("contactForm");
form.addEventListener("submit", onSubmit, false);