

let initialState = {
    survey: [
        { id: 1, question: 'Открытая лекция', answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 0 }] },
        { id: 2, question: 'Пойти нахуй', answers: [{ option: 'Да', votes: 4 }, { option: 'Нет', votes: 0 }] },
        { id: 3, question: 'Остаться дома', answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 5 }] },

    ]
};

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEW_ANSWERS":
            return {
                ...state,
                survey: state.survey.map(item => {
                    if(item.id === action.id){
                        item.answers = action.answer
                        return {...item }
                    }
                    return item
                })
            }
        default:
            return state;
    }

};

export const setNewAnswers = (answer, id) => ({ type: "SET_NEW_ANSWERS", answer, id })

export default surveyReducer;