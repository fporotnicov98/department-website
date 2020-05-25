import React from 'react'
import { connect } from 'react-redux'
import Survey from './Survey'


class SurveyContainer extends React.Component {
    render() {
        return <>
            <Survey {...this.props} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        surveyPage: state.surveyPage
    }
}

export default connect(mapStateToProps)(SurveyContainer)