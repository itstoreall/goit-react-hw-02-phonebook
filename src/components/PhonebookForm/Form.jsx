import React from 'react';
// import FormInput from './FormInput';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ name, contacts }) => {
  console.log(name);
  console.log(contacts);

  const handleAddContact = e => {
    e.preventDefault();

    console.log('name:', e.target.value);
    console.log('id', uuidv4());

    return {
      name: e.target,
      id: uuidv4(),
      useState: 'useState',
    };
  };

  return (
    <form>
      {/* <FormInput onAddContact={handleAddContact} /> */}
      <input type="text" />
      <button tupe="submit" onClick={handleAddContact}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
