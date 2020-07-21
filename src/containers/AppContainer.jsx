import {connect} from 'react-redux';
import App from '../components/App/App';
import {checkAuth} from '../store/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth() {
      dispatch(checkAuth());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
