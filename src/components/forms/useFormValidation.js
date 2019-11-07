import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate, authenticate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticate();
      }
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleChange = e => {
    e.persist();
    setValues(previousValues => ({
      ...previousValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleBlur = e => {
    const validationErrors = validate(values, e.target.name);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);
    console.log(values);
  };

  return { handleChange, handleBlur, handleSubmit, values, errors };
};

export default useFormValidation;
