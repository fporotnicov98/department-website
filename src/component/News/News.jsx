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
                                    <button>Ответить</button>
                                </div>
                            </div>
                        </div>
                        <p style={{ display: 'none' }}>Чтобы комментировать, войдите или зарегистрируйтесь</p>
                    </div>
                )
            }
        </>
    )
}


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleAddNewPost: false,
            isToggleShowComment: false,
            postId: ''
        };
    }
    addNewPost() {
        this.setState({
            isToggleAddNewPost: !this.state.isToggleAddNewPost
        })
    }
    showComment() {
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
                            this.props.newsPage.posts.map(item =>
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
                                            <button onClick={() => this.showComment(item.id)} className={style['btn-comment']}>Комментировать<img className={style['more']} src={more} alt="" /></button>
                                        </div>
                                        <div className={style['comment']}>
                                            {this.state.isToggleShowComment ? <Comment comment={item.comment} /> : undefined}
                                        </div>
                                        {this.state.isToggleShowComment ? (
                                            <div className={style['response']}>
                                            <textarea name="" id=""></textarea>
                                            <button>Ответить</button>
                                        </div>
                                        ) : undefined}  
                                    </div>
                                </div>
                            )
                        }
                        {this.state.isToggleAddNewPost ? <NewPost {...this.props} /> : undefined}
                    </div>
                    <button onClick={() => this.addNewPost()} className={style['btn-add-post']}>Добавить новость</button>
                </div>
            </div>
        );
    }
}

export default News;