// Additional parameters are coming from thunk.withExtraArguments => index.js
export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore(); // creating reference to database
    const profile = getState().firebase.profile; // getState grabs current state displayed in this case in CreateProject component
    const authorId = getState().firebase.auth.uid
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authorId,
        createdAt: new Date()
    }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', payload: project });
    }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
    })
}
