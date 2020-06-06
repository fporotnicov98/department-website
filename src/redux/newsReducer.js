// import { getDate } from "../component/commons/date";
import API from '../API/API'
// import space1 from './../asets/image/slider/1.jpg';
// import space2 from './../asets/image/slider/2.jpg';
// import space3 from './../asets/image/slider/3.jpg';
// import space4 from './../asets/image/slider/4.jpg';
// import space5 from './../asets/image/slider/5.jpg';

let initialState = {
    posts: [],
    sliderNews: [],

};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS_POSTS":
            return {
                ...state,
                posts: action.payload
            }
        case "SET_SLIDER_NEWS":
            return {
                ...state,
                sliderNews: state.posts.filter(item => item.isImportant === true)
            }
        default:
            return state;
    }

};

export const setNewsPosts = (post) => ({ type: "SET_NEWS_POSTS", payload: post })
export const setSliderNews = () => ({ type: "SET_SLIDER_NEWS" })

export default newsReducer;

export const getNews = () => (dispatch) => {
    API.getNews()
        .then(response => {
            dispatch(setNewsPosts((response.data)))
            dispatch(setSliderNews())
        })
}
export const addNews = (authorId, newsTheme, newsText, date) => (dispatch) => {
    API.addNews(authorId, newsTheme, newsText, date)
        .then(response => {
            dispatch(getNews())
        })
}
export const toggleImportantNews = (id, isImportant) => (dispatch) => {
    API.toggleImportantNews(id, isImportant)
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