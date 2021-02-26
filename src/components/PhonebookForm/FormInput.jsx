import React from 'react';

const FormInput = ({ onAddContact }) => {
  return <input type="text" value="value" onChange={onAddContact} />;
};

export default FormInput;
