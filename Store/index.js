import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import LoginReducer from '../Reducers/LoginReducer';
import thunk from 'redux-thunk';

var store = createStore(LoginReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;