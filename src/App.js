import React, { useState } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import { wrapper, title, subtitle } from './App.module.scss';

// const state = {
//   contacts: [],
//   name: '',
// };

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Записывает значение инпута в стейт
  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log(value);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  const handleSubmit = newContact => {
    console.log(newContact);
    setContacts(prevState => [newContact, ...prevState]);
  };

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form
        name={name}
        number={number}
        setName={setName}
        setNumber={setNumber}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <h2 className={subtitle}>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        filter={filter}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
