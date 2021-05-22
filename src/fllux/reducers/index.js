import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import resetReducer from './resetReducer';
import postReducer from './postReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reset: resetReducer,
    posts: postReducer
});