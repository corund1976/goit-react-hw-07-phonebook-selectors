export const getItems = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const visibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.trim().toLowerCase();

  return items.filter(({ name, number }) =>
    name.toLowerCase().includes(normalizedFilter) ||
    number.includes(filter.trim())
  );
};