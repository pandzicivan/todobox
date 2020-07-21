import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
  {
    isAuthenticated: !!state.user.authenticated,
  }
);

const GuestRoute = (props) => {
  const {isAuthenticated} = props;
  if (!isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default connect(mapStateToProps)(GuestRoute);
