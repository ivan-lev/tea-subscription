import { configureStore } from '@reduxjs/toolkit';

import teaReducer from './teaSlice';
import mainReducer from './mainContentSlice';

const store = configureStore({
  reducer: {
    teas: teaReducer,
    content: mainReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
