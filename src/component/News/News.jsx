import React from 'react'
import Slider from './../Slider/Slider'
import style from './News.module.scss';
import NewPost from './NewPost/NewPost';
// import { getDate } from "../commons/date";

let date = new Date().toDateString();

class News extends React.Component {

    state = {
        newsText: this.props.posts.newsText,
        newsTheme: this.props.posts.theme,
        updateId: [],
        updateThemeId: [],
        detailId: [],
        isToggleShowPostForm: false
    }
    updateText = (e) => {
        this.setState({ newsText: e.currentTarget.value })
    }
    updateTheme = (e) => {
        this.setState({ newsTheme: e.currentTarget.value })
    }
    setUpdateId = (id) => {
        this.setState({ updateId: [...this.state.updateId, id] })
    }
    removeUpdateId = (id) => {
        this.setState({ updateId: [...this.state.updateId.filter(o => o !== id)] })
    }
    setUpdateThemeId = (id) => {
        this.setState({ updateThemeId: [...this.state.updateThemeId, id] })
    }
    removeUpdateThemeId = (id) => {
        this.setState({ updateThemeId: [...this.state.updateThemeId.filter(o => o !== id)] })
    }
    setDetailId = (id) => {
        this.setState({ detailId: [...this.state.detailId, id] })
    }
    removeDetailId = (id) => {
        this.setState({ detailId: [...this.state.detailId.filter(o => o !== id)] })
    }
    setText = (text) => {
        this.setState({ newsText: text })
    }
    setTheme = (theme) => {
        this.setState({ newsTheme: theme })
    }
    toggleShowPostForm = (isShow) => {
        this.setState({ isToggleShowPostForm: isShow })
    }

    render() {
        return (
            <div className={style['container']}>
                <Slider />
                <div className={style['news']}>
                    {
                        !this.state.isToggleShowPostForm
                            ? <button onClick={() => this.toggleShowPostForm(true)} className={style['btn-add-post']}>Добавить новость</button>
                            : <button onClick={() => this.toggleShowPostForm(false)} className={style['btn-add-post']}>Отмена</button>
                    }
                    <div className={style['body']}>
                        {this.state.isToggleShowPostForm && <NewPost toggleShowPostForm={this.toggleShowPostForm} />}
                        {
                            this.props.posts.map(post =>
                                <div key={post.id} className={style['item']}>
                                    <div className={style['body__content']}>
                                        <div className={style['buttons']}>
                                            {/* {
                                                this.state.updateThemeId.some(item => item === post.id)
                                                && <button onClick={() => {
                                                    this.removeUpdateThemeId(post.id)
                                                    this.props.updateNews(post.id, this.state.newsTheme, this.state.newsText, date)
                                                }
                                                } className={style['edit']}><i class="fas fa-check"></i></button>
                                            } */}
                                            {
                                                this.state.updateId.some(item => item === post.id)
                                                && <button onClick={() => {
                                                    this.removeUpdateId(post.id)
                                                    this.props.updateNews(post.id, this.state.newsTheme, this.state.newsText, date)
                                                }
                                                } className={style['edit']}><i class="fas fa-check"></i></button>
                                            }
                                            <button onClick={() => this.props.removeNews(post.id)} className={style['delete']}><i class="fas fa-trash-alt"></i></button>
                                        </div>
                                        {
                                            this.state.updateId.some(item => item === post.id)
                                                ? <div className={style['content']}>
                                                    <input onChange={this.updateTheme} value={this.state.newsTheme}></input>
                                                    <textarea onChange={this.updateText} value={this.state.newsText}></textarea>
                                                </div>
                                                : <div className={style['content']}>
                                                    <div className={style['theme']}>{post.theme}<button onClick={() => {
                                                        this.setTheme(post.theme)
                                                        this.setText(post.newsText)
                                                        this.setUpdateId(post.id)
                                                    }} className={style['edit']}><i class="fas fa-pencil-alt"></i></button></div>
                                                    <div className={style['text']}>{post.newsText.length < 100 || this.state.detailId.some(item => item === post.id) ? post.newsText : post.newsText.slice(0, 99) + ' ...'}<button onClick={() => {
                                                        this.setText(post.newsText)
                                                        this.setTheme(post.theme)
                                                        this.setUpdateId(post.id)
                                                    }} className={style['edit']}><i class="fas fa-pencil-alt"></i></button></div>
                                                </div>
                                        }
                                        <div className={style['data']}>{post.newsDate}</div>
                                        <div className={style['footer']}>
                                            <div className={style['author']}>{post.author}</div>
                                            {this.state.detailId.some(item => item === post.id)
                                                ? <button onClick={() => this.removeDetailId(post.id)} style={post.newsText.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Свернуть</button>
                                                : <button onClick={() => this.setDetailId(post.id)} style={post.newsText.length < 100 ? { display: 'none' } : null} className={style['show-more']}>Подробнее</button>
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