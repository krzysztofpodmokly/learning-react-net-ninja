import { log } from "util";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state, authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout complete');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('new account created');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('problems with account creation');
            return {
                ...state,
                authError: action.payload.message
            }
        default:
            return state;
    }
}

export default authReducer;