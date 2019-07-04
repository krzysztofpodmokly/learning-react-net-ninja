import { FETCH_POSTS, DELETE_POST } from './types';
import jsonplaceholder from '../config/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data })
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}