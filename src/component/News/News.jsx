import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import NewPost from './NewPost/NewPost';
import { getDate } from "../commons/date";

let date = new Date().toDateString();

class News extends React.Component {
    state = {
        newsText: this.props.posts.newsText,
        updateId: [],
        detailId: [],
    }

    updateText = (e) => {
        this.setState({ newsText: e.currentTarget.value })
    }
    setUpdateId = (id) => {
        this.setState({ updateId: [...this.state.updateId, id ] })
    }
    removeUpdateId = (id) => {
        this.setState({ updateId: [...this.state.updateId.filter(o => o !== id) ] })
    }
    setDetailId = (id) => {
        this.setState({ detailId: [...this.state.detailId, id ] })
    }
    removeDetailId = (id) => {
        this.setState({ detailId: [...this.state.detailId.filter(o => o !== id) ] })
    }
    setText = (text) => {
        this.setState({ newsText: text })
    }

    render() {
        return (
            <div>
                <div className={style['news']}>
                    <Slider />
                    {
                        !this.props.isToggleShowPostForm
                            ? <button onClick={() => this.props.toggleShowPostForm(true)} className={style['btn-add-post']}>Добавить новость</button>
                            : <button onClick={() => this.props.toggleShowPostForm(false)} className={style['btn-add-post']}>Отмена</button>
                    }
                    <div className={style['body']}>
                        {this.props.isToggleShowPostForm && <NewPost />}
                        {
                            this.props.posts.map(post =>
                                <div key={post.id} className={style['item']}>
                                    <div className={style['body__content']}>
                                        <div className={style['content']}>
                                            <div className={style['theme']}>{post.theme}</div>
                                            {this.state.updateId.some(item => item=== post.id)
                                                ? <textarea onChange={this.updateText} className={style['text']} value={this.state.newsText}></textarea>
                                                : <div className={style['text']}>{post.newsText.length < 100 || this.state.detailId.some(item => item === post.id) ? post.newsText : post.newsText.slice(0, 99) + ' . . .'}</div>
                                            }
                                            <div className={style['data']}>{post.newsDate}</div>
                                        </div>
                                        <div className={style['footer']}>
                                            <div className={style['author']}>{post.author}</div>
                                            {this.state.detailId.some(item => item=== post.id)
                                                ? <button onClick={() => this.removeDetailId (post.id)} style={post.newsText.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Свернуть</button>
                                                : <button onClick={() => this.setDetailId (post.id)} style={post.newsText.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Подробнее</button>
                                            }
                                            <button onClick={() => this.props.removeNews(post.id)} className={style['show-more']}>Удалить</button>
                                            {this.state.updateId.some(item => item === post.id)
                                            ?<button onClick={() => {
                                                this.removeUpdateId(post.id)
                                                this.props.updateNews(post.id,post.theme,this.state.newsText,date)
                                            }
                                            } className={style['show-more']}>Готов</button>
                                            :<button onClick={() => {
                                                this.setText(post.newsText)
                                                this.setUpdateId(post.id)
                                                
                                            }
                                            } className={style['show-more']}>Редактировать</button>
                                        }
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div >
        );
    }

}



export default News;