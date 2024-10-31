// src/redux/reducers.js
import { createReducer } from '@reduxjs/toolkit';
import {
  setFilter,
  fetchContactsRequest, fetchContactsSuccess, fetchContactsFailure,
  addContactRequest, addContactSuccess, addContactFailure,
  deleteContactRequest, deleteContactSuccess, deleteContactFailure
} from './actions';

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsReducer = createReducer(contactsInitialState, (builder) => {
  builder
    .addCase(fetchContactsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchContactsSuccess, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addCase(fetchContactsFailure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContactSuccess, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContactSuccess, (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    });
});

const filterReducer = createReducer('', (builder) => {
  builder.addCase(setFilter, (_, action) => action.payload);
});

export { contactsReducer, filterReducer };
