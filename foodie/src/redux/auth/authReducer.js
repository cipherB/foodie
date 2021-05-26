
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types';

import * as settings from '../../backend';

const SESSION_DURATION = settings.SESSION_DURATION
const expirationDate = new Date(new Date().getTime() + SESSION_DURATION);

const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
};



const authReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload);
            localStorage.setItem('session', expirationDate);
            return {
                ...state,
                loading: false,
                token: payload
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('session');
            return {
                ...state,
                token: null,
                loading: false
            }
        default:
            return state
    }
};

export default authReducer;

