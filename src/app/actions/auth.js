// We import constants to name our actions' type
import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from './constants'

export const login = (username, password) => {
    return {
        type: LOGIN,
        username: username,
        password: password
    };
};

export const signup = (id, username) => {
    return {
        type: SIGNUP,
        userid: id,
        username: username
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};
 
export const signup_success = (username, password) => {
    return (dispatch) => {
        console.log('signup_success', username );
    };
};

export const login_success = (username, password) => {
    return (dispatch) => {
        console.log('login_success', username );
    };
};