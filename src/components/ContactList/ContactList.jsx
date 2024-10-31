import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
