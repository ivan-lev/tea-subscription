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
    // console.log(newTeaList);
    setTeaList(newTeaList);
  };

  return (
    <>
      <span>{tea.name}</span>
      <span>{tea.price}р</span>
      <button onClick={removeTea}>-</button>
      <input type="text" value={currentCount} onChange={handleChange}></input>
      <button onClick={addTea}>+</button>
    </>
  );
}
