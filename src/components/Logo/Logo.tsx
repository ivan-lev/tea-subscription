import './Logo.scss';

import logo from '/logo.svg';

export default function Logo() {
  return (
    <a href="#">
      <img className="logo" alt="logo" src={logo}></img>
    </a>
  );
}
