const initState = {
    posts: [
        {id: 1, title: 'post no. 1', body: 'This is lorem ipsum'},
        {id: 2, title: 'post no. 2', body: 'This is some random text'},
        {id: 3, title: 'post no. 3', body: 'This text will be displayed'}
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            return {...state, posts: state.posts.filter(post => action.id !== post.id)};
        default:
            return state;
    }
}

export default postReducer;