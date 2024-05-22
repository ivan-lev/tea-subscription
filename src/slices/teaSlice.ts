import { createSlice } from '@reduxjs/toolkit';

import { teas } from '../variables/teas';

const initialState = teas;

const teaSlice = createSlice({
  name: 'teas',
  initialState,
  reducers: {
    consoleTea: state => {
      state.forEach(tea => console.log(tea.name, ': ', tea.count));
    },
    // in reducers below we provide object in payload with count field and optional id field
    // if no id is provided, the count will be set/added to all teas
    setTeaCount: (state, action) => {
      const { count, id } = action.payload;

      if (!id) {
        state.forEach(tea => {
          count < 0 ? (tea.count = 0) : (tea.count = count);
        });
      }

      if (id) {
        state.forEach(tea => {
          if (tea.id === id) {
            tea.count = count;
          }
        });
      }
    },
    changeTeaCount: (state, action) => {
      const { count, id } = action.payload;

      if (!id) {
        state.forEach(tea => {
          tea.count + count < 0 ? (tea.count = 0) : (tea.count += count);
        });
      }

      if (id) {
        state.forEach(tea => {
          if (tea.id === id) {
            tea.count + count < 0 ? (tea.count = 0) : (tea.count += count);
          }
        });
      }
    }
  }
});

export const { consoleTea, setTeaCount, changeTeaCount } = teaSlice.actions;

const teaReducer = teaSlice.reducer;
export default teaReducer;
