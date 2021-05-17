import axios from 'axios';
import { returnErrors, clearErrors } from './errorActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ERRORS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER,
    LOGOUT_SUCCESS
  } from './types';

export const register = (newUser) => dispatch => {
    // Headers
    const config = {
        headers: {
        'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify(newUser);

    axios
        .post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(
                clearErrors()
            );
        })
        .catch(err => {
            dispatch(           
                returnErrors(err.response.data.msg, err.response.status)
            )
        });
};

export const login = (userData, keepConnection) => dispatch => {
    // Headers
    const config = {
        headers: {
        'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify(userData);

    axios
        .post('/api/auth/login', body, config)
        .then(res =>{
                if (keepConnection) localStorage.setItem('token', res.data.token);
                //else window.addEventListener('onunload', () => delete localStorage.removeItem('token'));
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
                dispatch(clearErrors());
        })
        .catch(err => {
            dispatch(           
                returnErrors(err.response.data.msg, err.response.status)
            )
        });

};

export const loadUser = () => dispatch => {
  
    axios
      .get('/api/auth/user', tokenConfig(localStorage.getItem('token')))
      .then(res =>
        dispatch({
          type: LOAD_USER,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };

const tokenConfig = (token) => {
      // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
};

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({type: LOGOUT_SUCCESS});
    window.location.href = "/login"
};