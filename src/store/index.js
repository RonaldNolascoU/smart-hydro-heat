import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './generalReducer';

export const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    state: generalReducer,
  },
});
