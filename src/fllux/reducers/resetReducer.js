import { QUESTION_LOADED, SET_RESETMAIL, RESPONSE_CONFIRMED, CLEAR_RESETDATA } from '../actions/types';
 
const initialState = {
    email: null,
    secretQuestion: null,
    responseValidated: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case QUESTION_LOADED:
            return {
                ...state,
                ...action.payload
            };
        case SET_RESETMAIL:
            return {
                ...state,
                ...action.payload
            }; 
        case RESPONSE_CONFIRMED:
            return {
                ...state,
                responseValidated: true
            };
        case CLEAR_RESETDATA:
            return {
                email: null,
                secretQuestion: null,
                responseValidated: false
            };

        default:
            return state;
    }
}