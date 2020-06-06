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

export const setForumPosts = (post) => ({ type: "SET_FORUM_POSTS", payload: post })

export const getForum = () => (dispatch) => {
    API.getForum()
        .then(response => {
            dispatch(setForumPosts(response.data))
        })
}
export const addForum = (id, theme) => (dispatch) => {
    API.addForum(id, theme)
        .then(response => {
            dispatch(getForum())
        })
}
export const removeForumPost = (id) => (dispatch) => {
    API.removeForumPost(id)
        .then(response => {
            dispatch(getForum())
        })
}
export const updateForum = (id, theme) => {

}

export default forumReducer;