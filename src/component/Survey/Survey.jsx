import React from 'react'
import style from './Survey.module.scss';
import user from './../../asets/image/user.png'
import NewSurvey from './NewSurvey/NewSurvey';
import Polls from 'react-polls'

const pollQuestion = 'Is react-polls useful?'
const pollAnswers = [
  { option: 'Yes', votes: 8 },
  { option: 'No', votes: 2 }
]

class Survey extends React.Component {
    render(){
        return (
            
             <NewSurvey />
                
        )
    }
    
}
export default Survey