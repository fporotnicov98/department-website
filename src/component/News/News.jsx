import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import user from './../../asets/image/user.png'
import more from './../../asets/image/more.svg'
import NewPost from './NewPost/NewPost';

const Comment = (props) => {
    return (
        <>
            {
                props.comment.map(item =>
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

// Toggle's надо переносить в основной стейт для того, чтобы закрыть форму после добавления поста


class News extends React.Component {
    state = {
        isToggleAddNewPost: false,
        isToggleShowComment: false,
    };
    addNewPost = () => {
        this.setState({
            isToggleAddNewPost: !this.state.isToggleAddNewPost
        })
    }
    showComment = () => {
        this.setState({
            isToggleShowComment: !this.state.isToggleShowComment,
        })
    }
    render() {
        return (
            <div>
                <div className={style['news']}>
                    <Slider />
                    <div className={style['body']}>
                        {
                            this.props.posts.map(post =>
                                <div key={post.id} className={style['item']}>
                                    <div className={style['author']}>
                                        <div className={style['photo']}><img src={user} alt="" /></div>
                                        <p>{post.author}</p>
                                    </div>
                                    <div className={style['body__content']}>
                                        <div className={style['content']}>
                                            <div className={style['theme']}>{post.theme}</div>
                                            <div className={style['text']}>{post.text}</div>
                                            <div className={style['data']}>{post.datatime}</div>
                                            <button onClick={() => this.showComment()} className={style['btn-comment']}>Комментировать<img className={style['more']} src={more} alt="" /></button>
                                        </div>
                                        <div className={style['comment']}>
                                            {this.state.isToggleShowComment ? <Comment comment = {post.comment} /> : null}
                                        </div>
                                    </div>
                                </div>
                            )}
                        {this.state.isToggleAddNewPost ? <NewPost /> : null}
                    </div>
                    <button onClick={() => this.addNewPost()} className={style['btn-add-post']}> {this.state.isToggleAddNewPost ? "Отмена" : "Добавить новость"}</button>
                </div>
            </div>
        );
    }
}

export default News;