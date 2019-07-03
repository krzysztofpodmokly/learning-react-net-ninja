const initState = {
    projects: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
  }

  // Additional parameters are coming from thunk.withExtraArguments => index.js
const projectReducer = (state = initState, action, { getFirebase, getFirestore }) => {
    switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('created project', action.payload);
        break;
      default:
        return state;
    }
}

export default projectReducer;