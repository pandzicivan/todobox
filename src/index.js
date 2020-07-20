import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import './styles/global.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
