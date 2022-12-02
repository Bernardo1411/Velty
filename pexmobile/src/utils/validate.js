// Regex to validate an email: value@value.com
export const validateEmail = (email) => {
  // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Regex to validate an password.
// It must contain upper and lower case letters, numbers and special characters
export const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
  return re.test(String(password));
};

export const validateName = (name) => {
  const re = /^[a-zA-Z0-9]{3,}/;
  return re.test(String(name));
};

export const validatePhone = (phone) => {
  const re = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
  return re.test(String(phone));
};

export const validateDate = (date) => {
  const re = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  return re.test(String(date));
};
