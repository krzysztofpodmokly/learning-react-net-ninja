import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './store/reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import dbConfig from './config/firebase';

const store = createStore(reducers, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))),
        reduxFirestore(dbConfig),
        reactReduxFirebase(dbConfig)
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);