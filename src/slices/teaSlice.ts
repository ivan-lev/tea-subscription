import { createSlice } from '@reduxjs/toolkit';

import { teas } from '../variables/teas';

import { calculateShippingCost } from '../utils/calculateShippingCost';
import { calculateTeaCost } from '../utils/calculateTeaCost';

import { Teas } from '../types/teas';

interface storeState {
  list: Teas;
  cost: number;
  shipping: number;
  total: number;
}

const initialTeaCost = calculateTeaCost(teas);
const initialShippingCost = calculateShippingCost(initialTeaCost);
const initialTotalCost = initialTeaCost + initialShippingCost;

const initialState: storeState = {
  list: teas,
  cost: initialTeaCost,
  shipping: initialShippingCost,
  total: initialTotalCost
};

const teaSlice = createSlice({
  name: 'teas',
  initialState,
  reducers: {
    // in reducers below we provide object in payload with count field and optional id field
    // if no id is provided, the count will be set/added to all teas
    setTeaCount: (state, action) => {
      const { count, id } = action.payload;

      if (!id) {
        state.list.forEach(tea => {
          count < 0 ? (tea.count = 0) : (tea.count = count);
        });
      }

      if (id) {
        state.list.forEach(tea => {
          if (tea.id === id) {
            tea.count = count;
          }
        });
      }

      state.cost = calculateTeaCost(state.list);
      state.shipping = calculateShippingCost(state.cost);
      state.total = state.cost + state.shipping;
    },
    changeTeaCount: (state, action) => {
      const { count, id } = action.payload;

      if (!id) {
        state.list.forEach(tea => {
          tea.count + count < 0 ? (tea.count = 0) : (tea.count += count);
        });
      }

      if (id) {
        state.list.forEach(tea => {
          if (tea.id === id) {
            tea.count + count < 0 ? (tea.count = 0) : (tea.count += count);
          }
        });
      }
      state.cost = calculateTeaCost(state.list);
      state.shipping = calculateShippingCost(state.cost);
      state.total = state.cost + state.shipping;
    }
  }
});

export const { setTeaCount, changeTeaCount } = teaSlice.actions;

const teaReducer = teaSlice.reducer;
export default teaReducer;
