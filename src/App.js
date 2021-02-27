import React, { useState } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import dataBase from './components/dataBase/dataBase.json';
import { wrapper, title, subtitle } from './App.module.scss';

const App = () => {
  const [contacts, setContacts] = useState(dataBase);
  const [filter, setFilter] = useState('');

  // Записывает значения инпута в стейт
  const handleInputFilter = e => setFilter(e.target.value);

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
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleInputFilter} />
      <ContactList
        contacts={filteredContacts}
        filter={filter}
        onInputChange={handleInputFilter}
      />
    </div>
  );
};

export default App;
