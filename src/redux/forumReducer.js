import { getDate } from "../component/commons/date";


let initialState = {
    posts: [
        { id: 1, author: 'Федор Поротников', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45', answers: [{id: 1, author: 'Viktor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '12.03.2020 14:43'}] },
        { id: 2, author: 'Сергей Голованов', theme: 'Информационная безопасность', text: 'Информационная безопасность — практика предотвращения несанкционированного доступа, использования, раскрытия, искажения, изменения, исследования, записи или уничтожения информации.', datatime: '02.12.2019 09:45', answers: [] },
        { id: 3, author: 'Яков Ваймер', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23', answers: [] }
    ]
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_POST_FORUM":
            let newPost = {
                id: 4, 
                author: 'Святополк',
                theme: action.theme,
                text: action.text,
                datatime: getDate(),
                answers: []
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        default:
            return state;
    }
};

export const addNewPostForum = (theme, text) => ({ type: "ADD_NEW_POST_FORUM", theme, text })

export default forumReducer;