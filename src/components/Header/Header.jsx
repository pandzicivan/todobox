import React, {useState} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import style from './style.module.scss';
import Logo from '../Logo';
import Sidebar from '../../containers/Sidebar/Sidebar';

const Header = () => {
  const [drawer, toggleDrawer] = useState(false);

  return(
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <React.Fragment>
        <div className={style.profile}
          onClick={() => toggleDrawer(!drawer)}>
          <span className={`${style.icon} material-icons`}>
            person
          </span>
        </div>
        <SwipeableDrawer
          anchor={"right"}
          open={drawer}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <Sidebar />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

export default Header;
