import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import NewPost from './NewPost/NewPost';


const News = (props) => {
    return (
        <div>
            <div className={style['news']}>
                <Slider />
                <div className={style['body']}>
                    {
                        props.posts.map(post =>
                            <div key={post.id} className={style['item']}>
                                <div className={style['body__content']}>
                                    <div className={style['content']}>
                                        <div className={style['theme']}>{post.theme}</div>
                                        <div className={style['text']}>{post.text.length < 100 || props.postId.some(item => item.id === post.id) ? post.text : post.text.slice(0, 99) + ' . . .'}</div>
                                        <div className={style['data']}>{post.datatime}</div>
                                    </div>
                                    <div className={style['footer']}>
                                        <div className={style['author']}>{post.author}</div>
                                        {props.postId.some(item => item.id === post.id)
                                            ? <button onClick={() => props.removePostId(post.id)} style={post.text.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Свернуть</button>
                                            : <button onClick={() => props.setPostId(post.id)} style={post.text.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Подробнее</button>
                                        }
                                    </div>
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
        </div >
    );
}



export default News;