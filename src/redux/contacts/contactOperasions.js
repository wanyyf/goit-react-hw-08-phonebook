import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactApi,
  addContactApi,
  deleteContactApi,
} from '../../Api/contactApi';

export const getContact = createAsyncThunk(
  'getContact',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (object, thunkApi) => {
    try {
      const renewalContact = await addContactApi(object);
      return renewalContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await deleteContactApi(id);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
