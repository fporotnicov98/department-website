import React from 'react';
import style from './NewSurvey.module.scss';
import user from './../../../asets/image/user.png'


const NewSurvey = () => {
    return (
        <div className={style['item']}>
            <div className={style['author']}>
                <div className={style['photo']}><img src={user} alt="" /></div>
                <p></p>
            </div>
            <div className={style['content']}>
                <div className={style['data']}>23.06.2020 14:54{/* время публикации опроса */}</div>
                <div className={style['theme']}>Тема: <input type="text" /></div>
                <button className={style['option']}><i class="fas fa-plus"></i>Добавить вариант</button>
                <div className={style['variant']}>
                    <input className={style['add-option']} type="text" placeholder='Добавить вариант' />
                </div>
            </div>
        </div>
    );
};

export default NewSurvey;