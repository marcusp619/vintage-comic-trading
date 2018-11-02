import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers/';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
