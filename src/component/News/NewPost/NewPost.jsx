import React from 'react';
import style from './NewPost.module.scss'
import user from './../../../asets/image/user.png'
import { reduxForm, Field } from 'redux-form';

let NewPostForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style['theme']}>
                <label htmlFor="newPostTheme">Тема:</label>
                <Field
                    name='newPostTheme'
                    component='input'
                    type='text'
                    id='newPostTheme'
                    placeholder='Тема поста...'
                />
            </div>
            <div className={style['text']}>
                <Field
                    name='newPostText'
                    component='textarea'
                    id='newPostText'
                    placeholder='Содержание поста...'
                />
            </div>
            <button className={style['btn-public']}>Опубликовать</button>
        </form>
    )
}

NewPostForm = reduxForm({ form: 'newPostForm' })(NewPostForm)

const NewPost = (props) => {

    let addPost = (values) => {
        props.onSendPost(values.newPostTheme)
    }

    return (
        <div className={style['item']}>
            <div className={style['author']}>
                <div className={style['photo']}><img src={user} alt="" /></div>
                <p>{/* автор поста */}</p>
            </div>
            <div className={style['body__content']}>
                <div className={style['content']}>
                    <NewPostForm onSubmit={addPost} />
                </div>
            </div>
        </div>
    );
}

export default NewPost;