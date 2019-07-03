import { FETCH_POSTS, DELETE_POST } from '../actions/types';

// const initState = {
//     posts: []
// }

const postReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case DELETE_POST:
            return [...state, state.filter(post => action.payload !== post.id)];
        default:
            return state;
    }
}

export default postReducer;