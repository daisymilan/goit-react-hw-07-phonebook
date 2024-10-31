// src/redux/actions.js
import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set');
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsFailure = createAction('contacts/fetchContactsFailure');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFailure = createAction('contacts/addContactFailure');
export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactFailure = createAction('contacts/deleteContactFailure');
