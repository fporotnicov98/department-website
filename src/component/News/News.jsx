import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import user from './../../asets/image/user.png'
import up from './../../asets/image/up.svg'
import down from './../../asets/image/down.svg'
import NewPost from './NewPost/NewPost';


const Comment = (props) => {
    return (
        <>
            {
                props.comments.map(item =>
                    <div key={item.id} className={style['comment_item']}>
                        <div className={style['comment__body']}>
                            <div className={style['comment__author']}>
                                <div className={style['comment__photo']}><img src={user} alt="" /></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['comment__content']}>
                                <div className={style['comment__text']}>{item.text}</div>
                                <div className={style['comment__data']}>
                                    {item.datatime}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            <div className={style['response']}>
                <textarea name="" id=""></textarea>
                <button>Ответить</button>
            </div>
        </>
    )
}

const News = (props) => {
    // let truncate = (str, maxlength) => {
    //     return (str.length > maxlength) ?
    //         str.slice(0, maxlength - 1) + ". . ." : str;
    // }
    return (
        <div>
            <div className={style['news']}>
                <Slider />
                <div className={style['body']}>
                    {
                        props.posts.map(post =>
                            <div key={post.id} className={style['item']}>
                                {/* <div className={style['author']}>
                                    <div className={style['photo']}><img src={user} alt="" /></div>
                                    <p>{post.author}</p>
                                </div> */}
                                <div className={style['body__content']}>
                                    <div className={style['content']}>
                                        <div className={style['theme']}>{post.theme}</div>
                                        <div className={style['text']}>{post.text.length > 100 ? post.text.slice(0, 99) + '. . .' : post.text}</div>
                                        <div className={style['data']}>{post.datatime}</div>
                                        {/* <button onClick={() => {
                                            if (props.postId.some(item => item.id === post.id)){
                                                props.removePostId(post.id)
                                            } else {
                                                props.setPostId(post.id)
                                            }
                                        }
                                        } className={style['btn-comment']}>Комментировать<img className={style['more']} src={props.postId.some(item => item.id === post.id) ? down : up} alt="" /></button> */}
                                    </div>
                                    <div className={style['footer']}>
                                        <div className={style['author']}>{post.author}</div>
                                        <button className={style['show-more']}>Подробнее</button>
                                    </div>
                                    {/* <div className={style['comment']}>
                                        {props.postId.some(item => item.id === post.id) && <Comment comments={post.comment} />}

                                    </div> */}
                                </div>
                            </div>
                        )}
                    {props.isToggleShowPostForm && <NewPost />}
                </div>
                {
                    !props.isToggleShowPostForm
                        ? <button onClick={() => props.toggleShowPostForm(true)} className={style['btn-add-post']}>Добавить новость</button>
                        : <button onClick={() => props.toggleShowPostForm(false)} className={style['btn-add-post']}>Отмена</button>
                }
            </div>
        </div>
    );
}

export default News;