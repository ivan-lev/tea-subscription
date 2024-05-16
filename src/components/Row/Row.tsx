import './Row.scss';

import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Tea } from '../../types/teas';
import { Teas } from '../../types/teas';

export default function Row({
  tea,
  teaList,
  setTeaList
}: {
  tea: Tea;
  teaList: Teas;
  setTeaList: Dispatch<SetStateAction<Teas>>;
}) {
  const [currentCount, setCurrentCount] = useState(tea.count);

  useEffect(() => {
    updateTeaList();
  }, [currentCount]);

  const addTea = () => {
    setCurrentCount(currentCount + 1);
  };

  const removeTea = () => {
    if (currentCount === 0) {
      return;
    }
    setCurrentCount(currentCount - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Number(event.target.value);
    setCurrentCount(value);
  };

  const updateTeaList = () => {
    const newTeaList: Teas = [];
    teaList.forEach(teaElement => {
      if (teaElement.id !== tea.id) {
        newTeaList.push(teaElement);
      } else {
        const updatedTeaElement: Tea = {
          id: tea.id,
          name: tea.name,
          price: tea.price,
          count: currentCount
        };
        newTeaList.push(updatedTeaElement);
      }
    });
    setTeaList(newTeaList);
  };

  return (
    <>
      <span>{tea.name}</span>
      <span className="row__price">{tea.price}р</span>
      <button className="row__button row__button_minus" onClick={removeTea}></button>
      <input
        className="row__input"
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        value={currentCount}
        onChange={handleChange}
      ></input>
      <button className="row__button row__button_plus" onClick={addTea}></button>
    </>
  );
}
