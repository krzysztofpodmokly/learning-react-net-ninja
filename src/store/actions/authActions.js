// Logging in
export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch(err => {
        dispatch({ type: 'LOGIN_ERROR', payload: err })
    });
}

// Loggin out
export const signOut = () => (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        });
}

// Creating new user and adding to database
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstname: newUser.firstname, // must be the same as it is in SIGNUP state
          lastname: newUser.lastname,
          initials: newUser.firstname[0] + newUser.lastname[0]
        });
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', payload: err});
      });
    }
  }