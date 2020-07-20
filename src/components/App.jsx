import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import ScreenLoader from './ScreenLoader/ScreenLoader';
import {ToastContainer, toast} from 'react-toastify';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import '../styles/animations.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import AuthRoute from '../hoc/AuthRoute';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.checkAuth();
  }

  render() {
    const {
      user,
    } = this.props;
    if (user.authInProgress) {
      return <ScreenLoader />
    }

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Route render={({location}) => (
            <div className="app">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  enter={true}
                  exit={false}
                  timeout={300}
                  classNames='fade'>
                  <Switch location={location}>
                    <AuthRoute path="/" exact={true}>
                      <Home />
                    </AuthRoute>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
            </div>
          )}/>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
