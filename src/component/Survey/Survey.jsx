import React from 'react'
import style from './Survey.module.scss';
import user from './../../asets/image/user.png'
import NewSurvey from './NewSurvey/NewSurvey';
import Poll from 'react-polls'


class Survey extends React.Component {

    handleVote = (voteAnswer, pollAnswers, pollNumber) => {
        const newPollAnswers = pollAnswers.map(answer => {
            if (answer.option === voteAnswer) answer.votes++
            return answer
        })
        this.props.setNewAnswers(newPollAnswers, pollNumber)
    }
    
    render() {
        return (
            <>
                {
                    this.props.survey.map(poll =>

                        <Poll question={poll.question} answers={poll.answers} onVote={voteAnswer => this.handleVote(voteAnswer, poll.answers, poll.id)} noStorage />
                    )}
                <NewSurvey addNewSurvey = {this.props.addNewSurvey}/>
            </>
        )
    }

}
export default Survey