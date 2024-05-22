import './Row.scss';

// React components
import { ChangeEvent } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { changeTeaCount, setTeaCount } from '../../slices/teaSlice';

// Types
import { Tea } from '../../types/teas';

// Variables
import { MIN_WEIGHT_STEP } from '../../variables/variables';

export default function Row({ tea }: { tea: Tea }) {
  const dispatch = useDispatch();

  const handleChangeTeaCount = (value: number, id: number) =>
    dispatch(changeTeaCount({ count: value, id: id }));

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    if (event.target.value[0] === '0') {
      event.target.value = value.toString();
    }
    dispatch(setTeaCount({ count: value, id: tea.id }));
  };

  return (
    <>
      <span>{tea.name}</span>
      <span className="row__price">{tea.price}р</span>
      <button
        className="row__button row__button_minus"
        onClick={() => handleChangeTeaCount(-MIN_WEIGHT_STEP, tea.id)}
      ></button>
      <input
        className="row__input"
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        value={tea.count}
        onChange={handleChangeInput}
      ></input>
      <button
        className="row__button row__button_plus"
        onClick={() => handleChangeTeaCount(MIN_WEIGHT_STEP, tea.id)}
      ></button>
    </>
  );
}
