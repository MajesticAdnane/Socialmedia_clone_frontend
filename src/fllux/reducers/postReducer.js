import { GET_POSTS, GET_USER_POSTS, ADD_POST, DELETE_POST, ADD_COMMENT, SET_POSTS_USER } from '../actions/types';

const initialState = {
    posts: [],
    userID: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS_USER:
            return {
                ...state,
                userID: action.payload.userID
            };
        case GET_POSTS:
            return {
                ...state,
                ...action.payload
            };
        case GET_USER_POSTS:
            return {
                ...state,
                posts: state.posts.filter((post) => post.user_id === state.userID)
            };
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.push(action.payload)
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload.id)
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id === action.payload.id) post.comments.push(action.payload.comment)
                })
            };
    
        default:
            return state;
    }
}
