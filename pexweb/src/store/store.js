import { configureStore } from '@reduxjs/toolkit';

import financeReducer from './Slices/financeSlice';

export default configureStore({
  reducer: {
    finance: financeReducer,
  },
});
