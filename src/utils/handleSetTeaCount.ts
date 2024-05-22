import { Dispatch } from '@reduxjs/toolkit';

import { setTeaCount } from '../slices/teaSlice';

export const handleSetTeaCount = (dispatch: Dispatch, count: number, id?: number) =>
  dispatch(setTeaCount({ count: count, id: id }));
