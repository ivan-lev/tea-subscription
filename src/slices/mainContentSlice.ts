import { createSlice } from '@reduxjs/toolkit';

interface storeState {
  showFaq: boolean
}

const initialState: storeState = {
  showFaq: false
};

const mainContentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    showCalc: (state) => {
      state.showFaq = false;
    },
    showFaq: (state) => {
      state.showFaq = true;
    }
  }
});

export const { showCalc, showFaq } = mainContentSlice.actions;

const mainReducer = mainContentSlice.reducer;
export default mainReducer;
