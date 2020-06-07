import React from 'react';
import user from './../../../asets/image/user.png'
import style from './ForumItem.module.scss';

const ForumItem = (props) => {
    return (
        <div>
            <div className={style['thema-title']}>Тема: {props.answers.theme}</div>
            {
                <div className={style['body']}>
                    <div key={props.answers.id} className={style['item']}>
                        <div className={style['main-author']}>
                            <div className={style['photo']}><img src={user} alt="" /></div>
                            <p>{props.answers.author}</p>
                        </div>
                        <div className={style['content']}>
                            <div className={style['data']}>{props.answers.datatime}</div>
                            <div className={style['main-text']}>{props.answers.text}</div>
                            <a href='#s'>Ответить</a>
                        </div>
                    </div>
                </div>

            }
            {
                props.answers.answers.map(item =>
                    <div className={style['body']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['author']}>
                                <div className={style['photo']}><img src={user} alt="" /></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <div className={style['text']}>{item.text}</div>
                                <a href='#s'>Ответить</a>
                            </div>
                        </div>
                    </div>

                )
            }
            <div className={style['body']}>
                <div className={style['item']}>
                    <div className={style['author']}>
                        <div className={style['photo']}><img src={user} alt="" /></div>
                        <p></p>
                    </div>
                    <div className={style['content']}>
                        <div className={style['data']}></div>
                        <div className={style['text']}><textarea name="" id=""></textarea></div>
                        <a href='#s'>Ответить</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ForumItem;