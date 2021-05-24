import { GET_POSTS, ADD_POST, DELETE_POST, ADD_COMMENT } from '../actions/types';

const initialState = {
    posts: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
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
                    if (post._id === action.payload.id) post.comments.push(action.payload.comment);
                    return post;
                })
            };
    
        default:
            return state;
    }
}
