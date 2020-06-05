import { getDate } from "../component/commons/date";
import API from '../API/API'
import space1 from './../asets/image/slider/1.jpg';
import space2 from './../asets/image/slider/2.jpg';
import space3 from './../asets/image/slider/3.jpg';
import space4 from './../asets/image/slider/4.jpg';
import space5 from './../asets/image/slider/5.jpg';

let initialState = {
    posts: [],
    postId: [],
    isToggleShowPostForm: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST_ID":
            let newId = {
                id: action.payload
            }
            return {
                ...state,
                postId: [...state.postId, newId]
            }
        case "REMOVE_POST_ID":
            return {
                ...state,
                postId: state.postId.filter(o => o.id !== action.payload)
            }
        case "SET_NEWS_POSTS":
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case "TOGGLE_SHOW_POST_FORM":
            return {
                ...state,
                isToggleShowPostForm: action.payload
            }
        default:
            return state;
    }

};

export const setPostId = (id) => ({ type: "SET_POST_ID", payload: id })
export const removePostId = (id) => ({ type: "REMOVE_POST_ID", payload: id })

export const addNewsPost = (post) => ({ type: "ADD_NEWS_POST", payload: post })
export const setNewsPosts = (post) => ({ type: "SET_NEWS_POSTS", payload: post })

export const toggleShowPostForm = (isShow) => ({ type: "TOGGLE_SHOW_POST_FORM", payload: isShow })

export default newsReducer;


export const getNews = () => (dispatch) => {
    API.getNews()
        .then(response => {
            dispatch(setNewsPosts((response.data)))
        })
}
export const addNews = (authorId, newsTheme, newsText, date) => (dispatch) => {
    API.addNews(authorId, newsTheme, newsText, date)
        .then(response => {
            return response.data
        })

}
export const removeNews = (id) => (dispatch) => {
    API.removeNews(id)

}