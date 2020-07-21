import React from 'react';
import {useHistory} from 'react-router-dom';

import logo from '../assets/logo.png';

const Logo = () => {
  const history = useHistory();

  const navigateToHome = () => {
    const {
      pathname: path,
    } = history.location;

    if (path === '/') return;

    history.push('/');
  };

  return (
    <img src={logo} onClick={navigateToHome} className="app-logo" alt="logo" />
  );
};

export default Logo;
