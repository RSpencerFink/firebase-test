import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 24px;
  label {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
  border: ${props => (props.error ? '1px solid red' : '1px solid #000')};
`;

const ErrorMessage = styled.span`
  color: red;
`;

export { Form, Input, ErrorMessage };
