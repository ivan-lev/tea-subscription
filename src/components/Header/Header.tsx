import './Header.scss';

import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <h1 className="header__title">Чайная подписка</h1>
    </header>
  );
}
