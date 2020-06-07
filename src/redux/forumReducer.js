import { forumAPI } from '../API/API'


let initialState = {
    posts: [
        { answers: [] }
    ]
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORUM_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        case "SET_FORUM_ITEM_POSTS":
            return {
                ...state,
                posts: [state.posts.map(item => {
                    
                })]
            }
        default:
            return state;
    }
};

export const setForumPosts = (post) => ({ type: "SET_FORUM_POSTS", payload: post })

export const getForum = () => (dispatch) => {
    forumAPI.getForum()
        .then(response => {
            dispatch(setForumPosts(response.data))
        })
}
export const getForumItem = () => (dispatch) => {
    forumAPI.getForumItem()
        .then(response => {
            dispatch(getForumItem())
        })
}
export const addForum = (id, theme, date) => (dispatch) => {
    forumAPI.addForum(id, theme, date)
        .then(response => {
            dispatch(getForum())
        })
}
export const removeForumPost = (id) => (dispatch) => {
    forumAPI.removeForumPost(id)
        .then(response => {
            dispatch(getForum())
        })
}
export const updateForum = (id, theme) => {

}
export default forumReducer;