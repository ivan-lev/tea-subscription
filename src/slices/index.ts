import { configureStore } from '@reduxjs/toolkit';

import teaReducer from './teaSlice';

const store = configureStore({
  reducer: {
    teas: teaReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
