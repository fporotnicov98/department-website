import API from '../API/API'


let initialState = {
    posts: []
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORUM_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
};

export const setForumPosts = (post) => ({ type: "SET_FORUM_POSTS", payload: post})

export const getForum = () => (dispatch) => {
    API.getForum()
        .then(response => {
            dispatch(setForumPosts((response.data)))
        })
}

export default forumReducer;