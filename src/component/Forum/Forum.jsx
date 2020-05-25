import React from 'react'
import style from './Forum.module.scss';
import user from './../../asets/image/user.png'
import more from './../../asets/image/more.png'



const Forum = (props) => {
    return (
        <div className={style['news']}>
            {
                props.forumPage.posts.map(item => <>
                    <div className={style['themes']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <p>{item.author}</p>
                                <div className={style['theme']}>{item.theme}</div>
                            </div>
                            <p>Ответов: <span>{item.answers}</span></p>
                            <div className={style['more']}>Подробнее<img src={more} alt="" /></div>
                        </div>
                    </div>
                    <div className={style['body']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['author']}>
                                <div className={style['photo']}><img src={user} alt="" /></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <div className={style['theme']}>{item.theme}</div>
                                <div className={style['text']}>{item.text}</div>
                            </div>
                        </div>
                    </div>
                </>)
            }

            <button className={style['btn-add-post']}>Создать новую тему</button>
        </div >

    )
}
export default Forum;