import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact } from './contactOperasions';

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    onFilterchange(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [getContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

export const { onFilterchange } = contactsSlice.actions;
export default contactsSlice.reducer;
