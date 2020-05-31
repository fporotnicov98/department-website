import React from 'react'
import { connect } from 'react-redux'
import Survey from './Survey'
import { setNewAnswers  } from "../../redux/surveyReducer";


class SurveyContainer extends React.Component {
    render() {
        return <>
            <Survey {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        survey: state.surveyPage.survey
    }
}

export default connect(mapStateToProps,{setNewAnswers })(SurveyContainer)