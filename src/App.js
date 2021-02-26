import React, { useState } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';

// const state = {
//   contacts: [],
//   name: '',
// };

const App = () => {
  // eslint-disable-next-line
  const [contacts, setContacts] = useState([]);
  // eslint-disable-next-line
  const [name, setName] = useState('ee');

  return (
    <div>
      <h1>Phonebook</h1>
      <Form name={name} contacts={contacts} />
      <h2>Contacts</h2>
      <ContactList
      // contacts={contacts}
      // onDelete={handleDeleteContact}
      // onToggle={handleToggleContact}
      />
    </div>
  );
};

export default App;
