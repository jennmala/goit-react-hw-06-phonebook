import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { add, remove, filterChange } = contactsSlise.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items', 'filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlise.reducer
);

// Selectors

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
