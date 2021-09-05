/*
Validates Password based on these criteria:

    1. Between 7 - 32 characters
    2. Must contain one digit
    3. Must contain one lower-case letter
    4. Must contain one upper-case letter
    5. Must contain a special character (!@#$%^&*-_)
*/

const ValidatePassword = (inputText) => {
  const passwordFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]{7,32}$/;
  if (inputText.match(passwordFormat)) {
    return true;
  } else {
    return false;
  }
};

module.exports = ValidatePassword;
