import React from 'react'
import style from './Survey.module.scss';
import NewSurvey from './NewSurvey/NewSurvey';
import Poll from 'react-polls'

let customStyles = {
    questionSeparatorWidth: 'poll',
    theme: 'black',
    questionSeparator: true,
    questionBold: true,
    questionColor: '#303030',
}


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
            <div className={style['survey']}>
                {
                    this.props.survey.map(poll =>
                        <div className={style['item']}>
                            <Poll customStyles={customStyles} question={poll.question} answers={poll.answers} onVote={voteAnswer => this.handleVote(voteAnswer, poll.answers, poll.id)} noStorage />
                        </div>
                    )
                }
                {this.props.isToggleShowNewSurvey && <NewSurvey toggleShowNewSurvey={this.toggleShowNewSurvey} addNewSurvey={this.props.addNewSurvey} />}
                {
                    !this.props.isToggleShowNewSurvey
                        ? <button onClick={() => this.props.toggleShowNewSurvey(true)} className={style['btn-add-post']}>Добавить новость</button>
                        : <button onClick={() => this.props.toggleShowNewSurvey(false)} className={style['btn-add-post']}>Отмена</button>
                }
            </div>
        )
    }

}
export default Survey