import { getDate } from "../component/commons/date";
import API from '../API/API'
import space1 from './../asets/image/slider/1.jpg';
import space2 from './../asets/image/slider/2.jpg';
import space3 from './../asets/image/slider/3.jpg';
import space4 from './../asets/image/slider/4.jpg';
import space5 from './../asets/image/slider/5.jpg';

let initialState = {
    posts: [],
    isToggleShowPostForm: false
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS_POSTS":
            return {
                ...state,
                posts: action.payload
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
            dispatch(getNews())
        })
}
export const removeNews = (id) => (dispatch) => {
    API.removeNews(id)
    .then(response => {
        dispatch(getNews())
    })
}
export const updateNews = (id, newsTheme, newsText, date) => (dispatch) => {
    API.updateNews(id, newsTheme, newsText, date)
        .then(response => {
            dispatch(getNews())
        })
}