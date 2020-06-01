import React from 'react'
import { connect } from 'react-redux'
import Survey from './Survey'
import { setNewAnswers, addNewSurvey, toggleShowNewSurvey } from "../../redux/surveyReducer";


class SurveyContainer extends React.Component {
    render() {
        return <>
            <Survey {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        survey: state.surveyPage.survey,
        isToggleShowNewSurvey: state.surveyPage.isToggleShowNewSurvey
    }
}

export default connect(mapStateToProps, { setNewAnswers, addNewSurvey, toggleShowNewSurvey })(SurveyContainer)