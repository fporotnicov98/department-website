import { getDate } from "../component/commons/date";

const SHOW_COMMENT = 'SHOW_COMMENT';
const ON_SEND_POST = 'ON_SEND_POST';

let initialState = {
    posts: [
        { id: 1, photos: { large: '', small: '' }, author: 'Fedor', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Viktor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }, { id: 1, photos: { large: '', small: '' }, author: 'Alexey', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '02.12.2019 09:45' }] },
        { id: 2, photos: { large: '', small: '' }, author: 'Andrey', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23', comment: [{ id: 0, photos: { large: '', small: '' }, author: 'Nikolay', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at.', datatime: '02.12.2019 09:45' }] }
    ],
    isToggleShowComment: false,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_COMMENT:
            return {
                ...state,
                posts: [...state.posts.map(item => {
                    if (item.id === action.postId) {
                        return { ...item }
                    } else return item
                })],
                isToggleShowComment: true
            }
        case ON_SEND_POST:
            let newPost = {
                id: 0,
                photos: {},
                author: 'Fedor',
                theme: action.enteredText,
                text: '',
                datatime: getDate(),
                comment: []
            }
            return {
                ...state,
                posts: [...state.posts.map(item => { item.id++; return { ...item } }), newPost]
            }
        default:
            return state;
    }

};

export const showComment = (postId) => ({ type: SHOW_COMMENT, payload: postId })
export const onSendPost = (enteredTheme) => ({ type: ON_SEND_POST, enteredTheme })

export default newsReducer;