import React, { useState } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import baseData from './components/Data/baseData.json';
import { wrapper, title, subtitle } from './App.module.scss';

const App = () => {
  const [contacts, setContacts] = useState(baseData);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Записывает значения инпута в стейт
  const handleInputChange = e => {
    const { name, value } = e.target;

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

  // Добавление нового контакта в стате
  const handleSubmit = newContact => {
    setContacts(prevState => [newContact, ...prevState]);
  };

  // Фильтрация контактов
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

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
