import { getDate } from "../component/commons/date";

let initialState = {
    posts: [
        { id: 1, photos: { large: '', small: '' }, author: 'Fedor', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Viktor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }, { id: 1, photos: { large: '', small: '' }, author: 'Alexey', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '02.12.2019 09:45' }] },
        { id: 2, photos: { large: '', small: '' }, author: 'Andrey', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Nikolay', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }] }
    ],
    isToggleShowComment: false,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_COMMENT":
            return {
                ...state,
                posts: [...state.posts.map(item => {
                    if (item.id === action.postId) {
                        return { ...item }
                    } else return item
                })],
                isToggleShowComment: true
            }
        case "ADD_POST":
            let newPost = {
                id: `f${(+new Date).toString(16)}`,
                photos: {},
                author: 'Fedor',
                theme: action.theme,
                text: action.text,
                datatime: getDate(),
                comment: []
            }
            return {
                state,
                posts: [...state.posts, newPost]
            }
        default:
            return state;
    }

};

export const showComment = (postId) => ({ type: "SHOW_COMMENT", payload: postId })
export const addPost = (theme,text) => ({ type: "ADD_POST", theme, text})

export default newsReducer;