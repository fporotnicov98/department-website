import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import user from './../../asets/image/user.png'



const News = (props) => {
    return (
        <div className={style['news']}>
            <Slider />
            <div className={style['body']}>
                {
                    props.newsPage.posts.map(item =>
                        <div key={item.id} className={style['item']}>
                            <div className={style['author']}>
                                <div className={style['photo']}><img src={user} alt=""/></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['content']}>
                                <div className={style['theme']}>{item.theme}</div>
                                <div className={style['text']}>{item.text}</div>
                                <div className={style['data']}>{item.datatime}</div>
                                <button className={style['btn-comment']}>Комментировать</button>
                                <div className={style['comment']}>
                                    <p>Чтобы комментировать, войдите или зарегистрируйтесь</p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <button className={style['btn-add-post']}>Добавить новость</button>
        </div>

    )
}
export default News