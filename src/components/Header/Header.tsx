import './Header.scss';

// React
import { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { showCalc, showFaq } from '../../slices/mainContentSlice';
import type { RootState } from '../../slices';

// Components
import Logo from '../Logo/Logo';

// Rsuite
import { IconButton } from 'rsuite';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';

// Variables and other
import { NAMES } from '../../variables/variables';

export default function Header() {
  const dispatch = useDispatch();
  const [isDescriptionShowed, setIsDescriptionShowed] = useState<boolean>(false);
  const isFaqShowed = useSelector((state: RootState) => state.content.showFaq);

  return (
    <header className="header">
      <Logo />
      <h1 className="header__title">{NAMES.MAIN_TITLE}</h1>

      <div className="header__info">

        <IconButton
          icon={<HelpOutlineIcon />}
          size="sm"
          onClick={() => dispatch(isFaqShowed ? showCalc() : showFaq())}
        />
        <div>
          <IconButton
          icon={<InfoOutlineIcon />}
          size="sm"
          onClick={() => setIsDescriptionShowed(!isDescriptionShowed)}
          onMouseLeave={() => setIsDescriptionShowed(false)}
        />
          {isDescriptionShowed && <p className="header__description">{NAMES.HEADER_INFO}</p>}
        </div>
        
      </div>
    </header>
  );
}
