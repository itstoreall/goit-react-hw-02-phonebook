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
  const [name, setName] = useState('');

  const handleSubmit = newContact => {
    console.log(newContact);
    setContacts(prevState => [newContact, ...prevState]);
  };

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form
        // className={}
        name={name}
        setContacts={setContacts}
        setName={setName}
        onSubmit={handleSubmit}
      />
      <h2 className={subtitle}>Contacts</h2>
      <ContactList
        contacts={contacts}
        // onDelete={handleDeleteContact}
        // onToggle={handleToggleContact}
      />
    </div>
  );
};

export default App;
