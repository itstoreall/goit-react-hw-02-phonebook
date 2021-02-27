import React, { Fragment } from 'react';
import ContactItem from './ContactItem';
import Filter from './Filter';
import { contactList } from './Contacts.module.scss';

const ContactList = ({ contacts, filter, onInputChange }) => {
  return (
    <Fragment>
      <Filter value={filter} onChange={onInputChange} />

      <ul className={contactList}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </Fragment>
  );
};

export default ContactList;
