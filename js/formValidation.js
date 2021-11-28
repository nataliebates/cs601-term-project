const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

/**
 * Checks each text input for valid valid values, preventing the submit event from
 * going forward if any criteria is not met.
 * @param {} event The form submit event 
 */
function validateForm(event) {
  document.getElementById("textInputMessage").innerHTML = "";
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let facilitatorName = document.getElementById("facilitator").value;

  if (firstName.length < 2 || lastName.length < 2) {
    // alert("Student's first and last names must each be a minimum of 2 characters in length.");
    document.getElementById("textInputMessage").innerHTML = "*Student's first and last names must each be a minimum of 2 characters in length.";
    event.preventDefault();
  }

  if (stringContainsNonAlphabet(firstName) || stringContainsNonAlphabet(lastName)) {
    document.getElementById("textInputMessage").innerHTML = "*Student's first and last names must contain only alphabet characters (a-z and A-Z).";
    event.preventDefault();
  }

  const facilitatorNames = ["Josh", "Chris", "Christian", "Fazil"];
  if (!facilitatorNames.includes(facilitatorName)) {
    document.getElementById("textInputMessage").innerHTML = "*Facilitator's first name must be one of the following: Josh, Chris, Fazil, or Christian.";
    event.preventDefault();
  }

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


