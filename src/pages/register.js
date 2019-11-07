import React from 'react';

import firebase from '../firebase-db';
import { Form, Input, ErrorMessage } from 'components/forms/styles';
import useFormValidation from 'components/forms/useFormValidation';
import validateRegister from 'components/forms/validateRegister';

const INITIAL_STATE = {
  name: '',
  email: '',
  password1: '',
  password2: ''
};

const Register = () => {
  const authenticateUser = async () => {
    const { name, email, password1 } = values;
    await firebase.register(name, email, password1);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validateRegister, authenticateUser);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          NAME
          <Input
            type="text"
            name="name"
            onBlur={handleBlur}
            error={errors.name}
            value={values.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
            name="password1"
            onBlur={handleBlur}
            error={errors.password}
            value={values.password1}
            onChange={handleChange}
          />
        </label>
        <label>
          CONFIRM PASSWORD
          <Input
            type="password"
            name="password2"
            onBlur={handleBlur}
            error={errors.password}
            value={values.password2}
            onChange={handleChange}
          />
        </label>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <button type="submit">Login</button>
      </Form>
    </div>
  );
};

export default Register;
