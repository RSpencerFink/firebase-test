const validateRegister = (values, targetName) => {
  let errors = {};
  const { name, email, password1, password2 } = values;

  const checkName = () => {
    if (!name) {
      errors.name = 'NAME REQUIRED';
    }
  };

  const checkEmail = () => {
    if (!email) {
      errors.email = 'EMAIL REQUIRED';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'INVALID EMAIL';
    }
  };

  const checkPassword = () => {
    if (!password1) {
      errors.password = 'PASSWORD REQUIRED';
    } else if (password1.length < 6) {
      errors.password = 'PASSWORD MUST BE AT LEAST 6 CHARACTERS';
    } else if (password1 !== password2) {
      errors.password = 'PASSWORDS DO NOT MATCH';
    }
  };

  if (!targetName) {
    checkName();
    checkEmail();
    checkPassword();
  } else if (targetName === 'name') {
    checkName();
  } else if (targetName === 'email') {
    checkEmail();
  } else if (targetName === 'password1' || targetName === 'password2') {
    checkPassword();
  }

  return errors;
};

export default validateRegister;
