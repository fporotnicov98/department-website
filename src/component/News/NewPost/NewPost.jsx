import React from 'react';
import style from './NewPost.module.scss'
import user from './../../../asets/image/user.png'

const NewPost = (props) => {
    return (
        <div className={style['item']}>
            <div className={style['author']}>
                <div className={style['photo']}><img src={user} alt="" /></div>
                <p>{/* автор поста */}</p>
            </div>
            <div className={style['body__content']}>
                <div className={style['content']}>

                    <div className={style['theme']}>Тема:<input type="text" name="" id="" /></div>
                    <div className={style['text']}><textarea name="" id=""></textarea></div>
                    <div className={style['data']}>{/* здесь надо показать время публикации */}</div>
                    <button className={style['btn-public']}>Опубликовать</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;