import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import user from './../../asets/image/user.png'
import NewPost from './NewPost/NewPost';

const Comment = (props) => {
    return (
        <>
            {
                props.comment.map(item =>
                    <div key={item.id} className={style['comment_item']}>
                        <div className={style['comment__author']}>
                            <div className={style['comment__photo']}><img src={user} alt="" /></div>
                            <p>{item.author}</p>
                        </div>
                        <div className={style['comment__content']}>
                            <div className={style['comment__text']}>{item.text}</div>
                            <div className={style['comment__data']}>{item.datatime}</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}


const News = (props) => {
    return (
        <div className={style['news']}>
            <Slider />
            <div className={style['body']}>
                {
                    props.newsPage.posts.map(item =>
                        <div key={item.id} className={style['item']}>
                            <div className={style['author']}>
                                <div className={style['photo']}><img src={user} alt="" /></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['body__content']}>
                                <div className={style['content']}>
                                    <div className={style['theme']}>{item.theme}</div>
                                    <div className={style['text']}>{item.text}</div>
                                    <div className={style['data']}>{item.datatime}</div>
                                    <button className={style['btn-comment']}>Комментировать</button>
                                    {/* <div className={style['comment']}>
                                    <p>Чтобы комментировать, войдите или зарегистрируйтесь</p>
                                </div> */}
                                </div>
                                <div className={style['comment']}>
                                    <Comment comment={item.comment} />
                                </div>
                            </div>
                        </div>
                    )
                }
                <NewPost />
            </div>
            <button className={style['btn-add-post']}>Добавить новость</button>
        </div>

    )
}
export default News