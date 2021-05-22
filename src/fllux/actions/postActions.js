import { GET_POSTS, ADD_POST, DELETE_POST, ADD_COMMENT } from '../actions/types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors, clearErrors } from './errorActions';

export const getPosts = (userPostsOnly) => (dispatch, getState) => {
    
    axios
        .get('/api/posts', tokenConfig(getState().auth.token))
        .then((res) => {
            if (userPostsOnly) {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data.filter((post) => post.user_id === getState().auth.user.id)
                })
            }
            else dispatch({type: GET_POSTS, payload: res.data})
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addPost = (newPost) => (dispatch, getState) => {
    axios
        .post('/api/posts', newPost, tokenConfig(getState().auth.token))
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deletePost = (postID) => (dispatch, getState) => {
    axios
        .delete(`/api/posts/${postID}`, tokenConfig(getState().auth.token))
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addComment = (postID, comment) => (dispatch, getState) => {
    axios
        .post(`/api/posts/${postID}/comments`, {comment}, tokenConfig(getState().auth.token))
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};