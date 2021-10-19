export const passwordValidation = (password, setMessage) => {
  if (password.search(/[a-z]/) < 0) {
    setMessage("Your password must contain at least one lowercase.");
  } else if (password.search(/[A-Z]/) < 0) {
    setMessage("Your password must contain at least one uppercase.");
  } else if (password.search(/[0-9]/) < 0) {
    setMessage("Your password must contain at least one digit.");
  } else if (password.length < 8) {
    setMessage("Your password must be at least 8 characters");
  } else {
    setMessage("");
  }
};
export const emailValidation = (email, setMessage) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setMessage("Email not valid.");
  } else {
    setMessage("");
  }
};
