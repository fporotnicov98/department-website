import React from 'react';
import user from './../../../asets/image/user.png'
import style from './NewForum.module.scss'

const NewForum = () => {
    return (
        <div>
            <div className={style['thema-title']}>Тема: <input type="text"/></div>
                <div className={style['body']}>
                    <div className={style['item']}>
                        <div className={style['main-author']}>
                            <div className={style['photo']}><img src={user} alt="" /></div>
                            <p></p>
                        </div>
                        <div className={style['content']}>
                            <div className={style['data']}></div>
                            <div className={style['main-text']}><textarea name="" id=""></textarea></div>
                            <a href='#s'>Ответить</a>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default NewForum;