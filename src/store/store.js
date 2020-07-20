import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
