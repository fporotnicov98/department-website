

let initialState = {
    posts: [
        { id: 1, photos: { large: '', small: '' }, author: 'Fedor', theme: 'Открытая лекция', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et. Nullam nec purus justo. Nullam bibendum velit nec viverra faucibus. Cras mauris est, tincidunt vel massa at', datatime: '02.12.2019 09:45' },
        { id: 2, photos: { large: '', small: '' }, author: 'Andrey', theme: 'Митап по информационной безопасности', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie dapibus nulla, ac varius lacus elementum et.', datatime: '23.06.2020 13:23' }
    ]
};

const newsReducer = (state = initialState, action) => {
    return state;
};

export default newsReducer;