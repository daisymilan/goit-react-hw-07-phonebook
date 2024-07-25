import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const duplicateContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (duplicateContact) {
      alert(`${newContact.name} is already in your contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      <ContactList deleteContact={handleDeleteContact} contacts={filteredContacts} />
    </div>
  );
};
