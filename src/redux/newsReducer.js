import { getDate } from "../component/commons/date";

let initialState = {
    posts: [
        { id: 1, photos: null, author: 'Fedor', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Viktor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }, { id: 1, photos: { large: '', small: '' }, author: 'Alexey', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '02.12.2019 09:45' }] },
        { id: 2, photos: { large: '', small: '' }, author: 'Andrey', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Nikolay', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }] }
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
            };
        case "ADD_COMMENT":
            let newComment = {
                id: 3,
                photos: {},
                author: 'Andrey',
                text: action.payload,
                datatime: getDate()
            }
            return {
                ...state,
                posts: [...state.posts.comment, newComment]
            }
        case "ADD_POST":
            let newPost = {
                id: 3,
                photos: null,
                author: 'Fedor',
                theme: action.theme,
                text: action.text,
                datatime: getDate(),
                comment: []
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
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
export const addComment = (text) => ({ type: "ADD_COMMENT", payload: text })
export const addPost = (theme, text) => ({ type: "ADD_POST", theme, text })
export const toggleShowPostForm = (isShow) => ({ type: "TOGGLE_SHOW_POST_FORM", payload: isShow })

export default newsReducer;