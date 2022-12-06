import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    statusRegister: null,
    id: null,
    email: null,
    fullName: null,
    roles: [],
    statusCompany: null,
    errorMessage: null,
  },
  reducers: {
    statusRegister: (state, action) => {
      state.statusRegister = action.payload;
    },
    register: (state, { payload }) => {
      state.status = 'authenticated';
      state.id = payload.id;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.statusCompany = 'Active';
      state.roles.push('User');
      state.errorMessage = null;
    },
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.id = payload.id;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.statusCompany = payload.status;
      state.roles = payload.roles;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state.id = null;
      state.email = null;
      state.fullName = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { statusRegister, register, login, logout, checkingCredentials } =
  authSlice.actions;
