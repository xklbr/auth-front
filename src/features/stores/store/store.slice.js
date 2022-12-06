import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
  name: 'store',
  initialState: {
    status: null,
    stores: [],
  },
  reducers: {
    checkingStores: (state) => {
      state.status = 'checking-stores';
    },
    errorLoadingStores: (state) => {
      state.status = 'failed-load';
    },
    loadedStores: (state, action) => {
      state.stores.push(action.payload);
      state.status = 'store-loaded';
    },
  },
});

export const { checkingStores, errorLoadingStores, loadedStores } =
  storeSlice.actions;
