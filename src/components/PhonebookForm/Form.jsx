import React from 'react';
// import FormInput from './FormInput';
import { v4 as uuidv4 } from 'uuid';
import { form, label, input, button } from './Form.module.scss';

const Form = ({ name, number, setName, setNumber, onSubmit }) => {
  // Записывает значение инпута в стейт
  const handleInputChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form className={form}>
      <label className={label}>
        Name
        <input
          className={input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={label}>
        Number
        <input
          className={input}
          type="text"
          name="number"
          value={number}
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
