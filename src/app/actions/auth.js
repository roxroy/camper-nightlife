// We import constants to name our actions' type
import {
  LOGIN,
  LOGOUT,
} from './constants'

export const login = (username, password) => {
    return {
        type: LOGIN,
        username: username,
        password: password
    };
};
 
export const logout = () => {
    return {
        type: LOGOUT
    };
};
 
export const signup = (username, password) => {
    return (dispatch) => {
        console.log('signup Rox 3', username );
    };
};