

let initialState = {
    posts: [
        { id: 1, author: 'Fedor', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45', answers: [{id: 1, author: 'Viktor', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '12.03.2020 14:43'}] },
        { id: 2, author: 'Sergey', theme: 'Информационная безопасность', text: 'Информационная безопасность — практика предотвращения несанкционированного доступа, использования, раскрытия, искажения, изменения, исследования, записи или уничтожения информации.', datatime: '02.12.2019 09:45', answers: [] },
        { id: 3, author: 'Andrey', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23', answers: [] }
    ],
    isToggleShowPostForm: false
};

const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_POST_FORM":
            return {
                ...state,
                isToggleShowPostForm: action.payload
            }
        default:
            return state;
    }
};

export const toggleShowPostForm = (isShow) => ({ type: "TOGGLE_SHOW_POST_FORM", payload: isShow })

export default forumReducer;