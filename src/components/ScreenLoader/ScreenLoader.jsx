import React from 'react';
import Loader from 'react-loader-spinner'
import style from './style.module.scss';

const ScreenLoader = () => {
  return <Loader className={style.loader}
    type="MutatingDots"
    secondaryColor="#425BD9"
    color="#425BD9" />;
}

export default ScreenLoader;
