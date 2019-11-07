import React, { useState } from 'react';

import firebase from '../firebase-db';
import { Form, Input, ErrorMessage } from 'components/forms/styles';
import useFormValidation from 'components/forms/useFormValidation';
import validateLogin from 'components/forms/validateLogin';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const Login = props => {
  const [firebaseError, setFirebaseError] = useState(null);

  const authenticateUser = async () => {
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      props.history.push('/');
    } catch (err) {
      console.error('Authentication Error', err);
      setFirebaseError(err.message);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          EMAIL
          <Input
            type="email"
            name="email"
            onBlur={handleBlur}
            error={errors.email}
            value={values.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <label>
          PASSWORD
          <Input
            type="password"
            name="password"
            onBlur={handleBlur}
            error={errors.password}
            value={values.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Login;
