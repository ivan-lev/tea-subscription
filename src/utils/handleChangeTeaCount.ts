import { Dispatch } from '@reduxjs/toolkit';

import { changeTeaCount } from '../slices/teaSlice';

export const handleChangeTeaCount = (dispatch: Dispatch, count: number, id?: number) =>
  dispatch(changeTeaCount({ count: count, id: id }));
