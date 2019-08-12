import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';
import Register from './pages/register';
import Login from './pages/login';
import logo from './logo.svg';
import { ToastProvider } from 'react-toast-notifications';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastProvider placement="bottom-right" autoDismissTimeout="5000">
          <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
            </div>
          </Router>
        </ToastProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
