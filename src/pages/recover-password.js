import React, { useState, useContext } from 'react';

import Context from 'context/Context';
import { Form, Input, ErrorMessage } from 'components/forms/styles';
import useFormValidation from 'components/forms/useFormValidation';

const INITIAL_STATE = {
  email: '',
};

const RecoverPassword = props => {
  const [firebaseError, setFirebaseError] = useState(null);
  const {firebase} = useContext(Context)

  const handleResetPassword = async () => {
    const { email } = values;
    try {
      await firebase.resetPassword(email);
      props.history.push('/');
    } catch (err) {
      console.error('Reset Error', err);
      setFirebaseError(err.message);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, () => {return {}}, handleResetPassword);

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
        {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}
        <button type="submit">RESET PASSWORD</button>
      </Form>
    </div>
  );
};

export default RecoverPassword;
