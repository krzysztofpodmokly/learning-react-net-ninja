import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'; // firestoreReducer used for fetching data from DB
import { firebaseReducer } from 'react-redux-firebase'; // firebaseReducer used for authentication

export default combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});