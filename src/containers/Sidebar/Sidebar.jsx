import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import style from './style.module.scss';
import WithTranslations from '../../hoc/WithTranslations';

import {logout} from '../../store/actions';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={style.sidebar}>
        <div className={style.profile}>
          <h1>Hehe</h1>
        </div>
        <div className={style.logout}>
          <Button size="large"
            onClick={() => this.props.logout()}
            disableRipple={true}
            startIcon={<span className="material-icons">exit_to_app</span>}>
            {this.props.translate('sidebar_logout_btn')}
          </Button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(logout());
    },
  }
}

export default connect(null, mapDispatchToProps)(WithTranslations(Sidebar));

