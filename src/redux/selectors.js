// src/redux/selectors.js
export const selectFilter = (state) => state.filter;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = (state) => {
  const filter = selectFilter(state);
  const contacts = selectContacts(state);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
