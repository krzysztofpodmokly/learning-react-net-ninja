export const createProject = (project) => (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', payload: project });
}
