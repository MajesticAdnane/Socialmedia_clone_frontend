import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import resetReducer from './resetReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    reset: resetReducer
});