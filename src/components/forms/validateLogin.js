const validateLogin = (values, name) => {
  let errors = {};
  const { email, password } = values;

  const checkEmail = () => {
    if (!email) {
      errors.email = 'EMAIL REQUIRED';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'INVALID EMAIL';
    }
  };

  const checkPassword = () => {
    if (!password) {
      errors.password = 'PASSWORD REQUIRED';
    } else if (password.length < 6) {
      errors.password = 'PASSWORD MUST BE AT LEAST 6 CHARACTERS';
    }
  };

  if (!name) {
    checkEmail();
    checkPassword();
  } else if (name === 'email') {
    checkEmail();
  } else if (name === 'password') {
    checkPassword();
  }

  return errors;
};

export default validateLogin;
