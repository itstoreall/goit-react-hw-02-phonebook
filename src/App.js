import React, { useState } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';

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
    <div>
      <h1>Phonebook</h1>
      <Form
        // className={}
        name={name}
        setContacts={setContacts}
        setName={setName}
        onSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <ContactList
        contacts={contacts}
        // onDelete={handleDeleteContact}
        // onToggle={handleToggleContact}
      />
    </div>
  );
};

export default App;
