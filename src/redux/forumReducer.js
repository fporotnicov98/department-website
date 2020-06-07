import { forumAPI } from '../API/API'
import { act } from 'react-dom/test-utils';


let initialState = {
    posts: [],
    forum: null
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
                forum: action.payload 
            }
        default:
            return state;
    }
};

export const setForumPosts = (post) => ({ type: "SET_FORUM_POSTS", payload: post })
export const setForumItemPosts = (forum) => ({ type: "SET_FORUM_ITEM_POSTS", payload: forum })

export const getForum = () => (dispatch) => {
    forumAPI.getForum()
        .then(response => {
            dispatch(setForumPosts(response.data))
        })
}
export const getForumItem = (id) => (dispatch) => {
    forumAPI.getForumItem(id)
        .then(response => {
            dispatch(setForumItemPosts(response.data))
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