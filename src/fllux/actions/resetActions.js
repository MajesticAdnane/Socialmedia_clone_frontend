import axios from 'axios';
import { returnErrors, clearErrors } from './errorActions';
import { QUESTION_LOADED, SET_RESETMAIL, RESPONSE_CONFIRMED, CLEAR_RESETDATA } from './types';

export const loadQuestion = (email) => dispatch => {
    dispatch({
        type: SET_RESETMAIL,
        payload: {email}
    });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email});

    axios
        .post('/api/auth/secretquestion', body, config)
        .then(res => {
            dispatch({
                type: QUESTION_LOADED,
                payload: res.data
            });
            /*dispatch(
                clearErrors()
            );*/
        })
        .catch(err => {
            dispatch(           
                returnErrors(err.response.data.msg, err.response.status)
            )
        });
};

export const verifyResponse = (email, secretResponse) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({
        email,
        secretResponse
    });

    axios
        .post('/api/auth/secretresponse', body, config)
        .then(res => {
            dispatch({
                type: RESPONSE_CONFIRMED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(           
                returnErrors(err.response.data.msg, err.response.status)
            )
        });
};

export const changePassword = (email, newPassword) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({
        email,
        newPassword
    });

    axios
        .post('/api/auth/resetpassword', body, config)
        .then(res => {
            dispatch(clearErrors);
            dispatch({type: CLEAR_RESETDATA});
            window.location.href = "/login";
        })
        .catch(err => {
            dispatch(           
                returnErrors(err.response.data.msg, err.response.status)
            )
        });
};

export const clearResetData = () => dispatch => {
    dispatch({type: CLEAR_RESETDATA});
}