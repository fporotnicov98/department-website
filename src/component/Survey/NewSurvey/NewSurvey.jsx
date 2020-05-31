import React from 'react';
import style from './NewSurvey.module.scss';

class NewSurvey extends React.Component {
    state = {
        question : ""
    }
    setTheme = (question) => {
        this.setState({question: question})
    }
    render() {
        return (
            <div className={style['item']}>
                <div className={style['content']}>
                    <div className={style['theme']}>Тема опроса: <input type="text" onChange = {(e => this.setTheme(e.target.value))} /></div>
                    <a onClick = {() => this.props.addNewSurvey(this.state.question)} className={style['btn']} href="#s">Опубликовать</a>
                </div>
            </div>
        );
    }

};

export default NewSurvey;