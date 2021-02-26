import React from 'react';
// import FormInput from './FormInput';
import { v4 as uuidv4 } from 'uuid';
import { form, label, input, button } from './Form.module.scss';

const Form = ({ name, contacts, setContacts, setName, onSubmit }) => {
  // Записывает значение инпута в стейт
  const handleInputChange = e => setName(e.target.value);

  const handleAddContact = e => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: name,
    };

    onSubmit(newContact);
    setName('');
  };

  return (
    <form className={form}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <button className={button} tupe="submit" onClick={handleAddContact}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
