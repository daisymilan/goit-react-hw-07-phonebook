import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './ContactSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
