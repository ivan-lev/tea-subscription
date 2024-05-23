import './Row.scss';

// React components
import { ChangeEvent, useState } from 'react';

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
  const [isDescriptionShowed, setIsDescriptionShowed] = useState<boolean>(false);

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
      <div className="row__tea-info">
        <p
          onMouseEnter={() => setIsDescriptionShowed(true)}
          onMouseLeave={() => setIsDescriptionShowed(false)}
        >
          {tea.name}
        </p>
        {isDescriptionShowed && <p className="row__tea-description">{tea.description}</p>}
      </div>

      <span className="row__price">{tea.price}р</span>
      <button
        className="button button__minus"
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
        className="button button__plus"
        onClick={() => handleChangeTeaCount(dispatch, VARIABLES.MIN_WEIGHT, tea.id)}
      ></button>
    </>
  );
}
