
import axios from 'axios';
import { setAlert } from '../alert/alertAction';
import * as settings from '../../backend';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types';
import { cartEmpty } from '../../containers/helper/CartHelper';

const SESSION_DURATION = settings.SESSION_DURATION


export const logout  = () => dispatch => {
    dispatch(setAlert('Logout successful.', 'success'));
    dispatch({type: LOGOUT});
    cartEmpty(() => {});
};

// //This sets a timer, which would automatically logout the user after a specified time
export const authCheckTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime)
    }
};

export const login = (username, password, email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    

    try {
        const res = await axios.post(`${settings.API}user/auth/login/`, {
                        "username": username,
                        "password": password,
                        "email": email
                    }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.key
        });

        dispatch(setAlert('Authenticated successfully', 'success'));
        dispatch(authCheckTimeout(SESSION_DURATION));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
}

export const signup = (username, password1, password2, email) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }


    try {
        const res = await axios.post(`${settings.API}user/auth/registration/`, {
            "username": username,
            "password1": password1,
            "password2": password2,
            "email": email
        }, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(username, password1, email));
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
};


