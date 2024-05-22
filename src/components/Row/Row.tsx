import './Row.scss';

// React components
import { ChangeEvent } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Types
import { Tea } from '../../types/teas';

// Utils
import { handleSetTeaCount } from '../../utils/handleSetTeaCount';
import { handleChangeTeaCount } from '../../utils/handleChangeTeaCount';

// Variables
import { VARIABLES } from '../../variables/variables';

export default function Row({ tea }: { tea: Tea }) {
  const dispatch = useDispatch();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    if (event.target.value[0] === '0') {
      event.target.value = value.toString();
    }
    handleSetTeaCount(dispatch, value, tea.id);
  };

  return (
    <>
      <span>{tea.name}</span>
      <span className="row__price">{tea.price}р</span>
      <button
        className="row__button row__button_minus"
        onClick={() => handleChangeTeaCount(dispatch, -VARIABLES.MIN_WEIGHT, tea.id)}
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
        onClick={() => handleChangeTeaCount(dispatch, VARIABLES.MIN_WEIGHT, tea.id)}
      ></button>
    </>
  );
}
