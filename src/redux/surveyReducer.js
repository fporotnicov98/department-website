

let initialState = {
    survey: [
        { id: 1, photos: { large: '', small: '' }, author: 'Fedor', theme: 'Открытая лекция', datatime: '02.12.2019 10:21' },
        { id: 2, photos: { large: '', small: '' }, author: 'Andrey', theme: 'Митап по информационной безопасности', datatime: '23.06.2020 14:54' }
    ]
};

const surveyReducer = (state = initialState, action) => {
    return state;
};

export default surveyReducer;