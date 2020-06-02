import { getDate } from "../component/commons/date";
import space1 from './../asets/image/slider/1.jpg';
import space2 from './../asets/image/slider/2.jpg';
import space3 from './../asets/image/slider/3.jpg';
import space4 from './../asets/image/slider/4.jpg';
import space5 from './../asets/image/slider/5.jpg';

let initialState = {
    posts: [
        { id: 1, bg: `${space1}`, photos: { large: '', small: '' }, author: 'Федор Поротников', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45' },
        { id: 2, bg: `${space2}`, photos: { large: '', small: '' }, author: 'Сергей Голованов', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23' },
        { id: 3, bg: `${space3}`, photos: { large: '', small: '' }, author: 'Яков Ваймер', theme: 'Кибератака на университетские базы данных', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23' },
        { id: 4, bg: `${space4}`, photos: { large: '', small: '' }, author: 'Всеволод Иванов', theme: 'Приказы об отчислении', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23' },
        { id: 5, bg: `${space5}`, photos: { large: '', small: '' }, author: 'Никита Петров', theme: 'Новый сотрудник', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. ', datatime: '23.06.2020 13:23' }
    ],
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
        case "ADD_POST":
            let newPost = {
                id: 6,
                photos: null,
                author: 'Fedor',
                theme: action.theme,
                text: action.text,
                datatime: getDate()
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
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
export const addPost = (theme, text) => ({ type: "ADD_POST", theme, text })
export const toggleShowPostForm = (isShow) => ({ type: "TOGGLE_SHOW_POST_FORM", payload: isShow })

export default newsReducer;