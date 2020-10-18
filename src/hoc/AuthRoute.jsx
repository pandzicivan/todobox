import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => (
  {
    isAuthenticated: !!state.user.authenticated,
  }
);

const AuthRoute = (props) => {
  const {isAuthenticated} = props;
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  } else {
    return <Route component={props.component} {...props} />;
  }
};

export default connect(mapStateToProps)(AuthRoute);
