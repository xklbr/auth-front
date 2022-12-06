import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    status: null,
    id: null,
    email: null,
    fullName: null,
    employeeStatus: null,
    errorMessage: null,
  },
  reducers: {
    checkingEmployee: (state) => {
      state.status = 'checking-employee';
    },
    errorFindingEmployee: (state, action) => {
      state.status = 'employee-not-found';
      state.errorMessage = action.payload;
    },
    foundEmployee: (state, { payload }) => {
      state.status = 'employee-found';
      state.id = payload.id;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.employeeStatus = payload.status;
      state.errorMessage = null;
    },
  },
});

export const { checkingEmployee, errorFindingEmployee, foundEmployee } =
  employeeSlice.actions;
