import React from 'react';
import style from './style.module.scss';
import Logo from '../Logo';

const Header = () => {
  return(
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.profile}>
        <span className={`${style.icon} material-icons`}>
          person
        </span>
      </div>
    </div>
  )
}

export default Header;
