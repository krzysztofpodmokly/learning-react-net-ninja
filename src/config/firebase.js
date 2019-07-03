import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB4UPbSMQYttdtmnLrTy7cOvhUmF88nlbU",
    authDomain: "net-ninja-firebase-app.firebaseapp.com",
    databaseURL: "https://net-ninja-firebase-app.firebaseio.com",
    projectId: "net-ninja-firebase-app",
    storageBucket: "",
    messagingSenderId: "717604032610",
    appId: "1:717604032610:web:f08e635332a50dd3"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;