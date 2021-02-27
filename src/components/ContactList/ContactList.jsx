import React from 'react';
import ContactItem from './ContactItem';
import { contactList } from './Contacts.module.scss';

const ContactList = ({ contacts }) => {
  return (
    <ul className={contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
