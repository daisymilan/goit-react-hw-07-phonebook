import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import './ContactListItem.module.css';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="contact-list-item">
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;
