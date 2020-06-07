import React from 'react';
import user from './../../../asets/image/user.png'
import style from './ForumItem.module.scss';

const ForumItem = (props) => {
    return (
        <div>
            {
                props.forum.map(item =>
                    <div className={style['body']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <div className={style['text']}>{item.text}</div>
                                <a href='#s'>Ответить</a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default ForumItem;