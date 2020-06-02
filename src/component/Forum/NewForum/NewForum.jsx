import React from 'react';
import style from './NewForum.module.scss'
import { reduxForm, Field } from 'redux-form';

let ForumForm = (props) => {debugger
    return (
        <form className={style['form']} onSubmit={props.handleSubmit}>
            <div className={style['theme']}>
                <label htmlFor="newPostTheme">Тема:</label>
                <Field
                    name='newPostTheme'
                    component='input'
                    type='text'
                    id='newPostTheme'
                    required='required'
                />
            </div>
            <div className={style['text']}>
                <Field
                    name='newPostText'
                    component='textarea'
                    id='newPostText'
                    required='required'
                />
            </div>
            <button className={style['btn']}>Опубликовать</button>
        </form>
    )
}

ForumForm = reduxForm({ form: 'forumForm' })(ForumForm)

class NewForum extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }

    onSubmit = (values) => {
        this.props.addNewPostForum(values.newPostTheme, values.newPostText)
        this.props.onClose()
    }

    render() {
        if (this.props.isOpen === false) return null;
        return (
            <div className={style['modal']}>
                <div className={style['body']}>
                    <div className={style['content']}>
                        <a href="#s" onClick={(e) => this.close(e)} className={style['close']}>x</a>
                        <ForumForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        );
    }
    close(e) {
        e.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
};

export default NewForum;