import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth';
import { storeSlice } from 'features/stores/store';
import { employeeSlice } from 'features/employee';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    store: storeSlice.reducer,
    employee: employeeSlice.reducer,
  },
});

export default store;
