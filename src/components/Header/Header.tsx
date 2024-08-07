import './Header.scss';

import { useState } from 'react';

import Logo from '../Logo/Logo';

import { NAMES } from '../../variables/variables';

export default function Header() {
  const [isDescriptionShowed, setIsDescriptionShowed] = useState<boolean>(false);

  return (
    <header className="header">
      <Logo />
      <h1 className="header__title">{NAMES.MAIN_TITLE}</h1>

      <div className="header__info">
        <button
          className="button button__info"
          onClick={() => setIsDescriptionShowed(!isDescriptionShowed)}
          onMouseLeave={() => setIsDescriptionShowed(false)}
        ></button>
        {isDescriptionShowed && <p className="header__description">{NAMES.HEADER_INFO}</p>}
      </div>
    </header>
  );
}
