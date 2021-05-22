import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    LOAD_USER
  } from '../actions/types';
  
const initialState = {
    token: null,
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {

        case LOGIN_SUCCESS:
        case LOAD_USER:
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            };

        case LOGOUT_SUCCESS:
            return {
                token: null,
                isAuthenticated: null,
                user: null
            }
        default:
            return state;
    };
}