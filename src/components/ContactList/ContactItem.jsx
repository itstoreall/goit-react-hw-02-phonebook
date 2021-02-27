import { Fragment } from 'react';
import { contactItem } from './Contacts.module.scss';

const ContactItem = ({ contact }) => {
  return (
    <Fragment>
      <li className={contactItem}>
        {contact.name}: {contact.number}
      </li>
    </Fragment>
  );
};

export default ContactItem;
