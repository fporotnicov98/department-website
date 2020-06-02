

let initialState = {
    survey: [
        { id: 1, question: 'Открытая лекция', answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 0 }] },
        { id: 2, question: 'Митап по информационной безопасности', answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 0 }] },
        { id: 3, question: 'Остаться дома', answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 0 }] },
    ],
    isToggleShowNewSurvey: false
};

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEW_ANSWERS":
            return {
                ...state,
                survey: state.survey.map(item => {
                    if (item.id === action.id) {
                        item.answers = action.answer
                        return { ...item }
                    }
                    return item
                })
            }
        case 'ADD_NEW_SURVEY':
            return {
                ...state,
                survey: [{ id: 4, question: action.payload, answers: [{ option: 'Да', votes: 0 }, { option: 'Нет', votes: 0 }] }, ...state.survey]
            }
        case 'TOGGLE_SHOW_NEW_SURVEY':
        return {
            ...state,
            isToggleShowNewSurvey: action.payload
        }
        default:
            return state;
    }

};

export const toggleShowNewSurvey = (isToggleShow) => ({type: 'TOGGLE_SHOW_NEW_SURVEY', payload: isToggleShow})
export const setNewAnswers = (answer, id) => ({ type: "SET_NEW_ANSWERS", answer, id });
export const addNewSurvey = (question) => ({ type: "ADD_NEW_SURVEY", payload: question });

export default surveyReducer;