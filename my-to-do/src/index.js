import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/user-reducers.js';
import  updateUser from './action/user-action';
let reducer =  combineReducers(
    {
        user : userReducer
    }
);
const store = createStore(reducer,
    window.devToolsExtension && window.devToolsExtension()
);




const updateUserAction = {
    type : 'updateUser',
    payload : {
        user:"john"
    }
}
const adduser = {
    type : "addUser",
    payload : "I'm new User"
}
store.dispatch(adduser);
// store.dispatch(updateUserAction);
console.log(store.getState());
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
