import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Trello from './components/trello';
import reducer from './reducers/index';
import { createStore } from 'redux';
import { addList, addCard } from './actions/index';
import { Provider } from 'react-redux';

let store = createStore(reducer);
// store.dispatch(addList(2, 'New List 2'));

ReactDOM.render(
    <Provider store={store}>
        <Trello />
    </Provider>
    , document.getElementById('main'));
