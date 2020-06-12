import React from 'react'
import style from './Forum.module.scss';
// import ForumItem from './ForumItem/ForumItem';
import NewForum from './NewForum/NewForum';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';



class Forum extends React.Component {

    state = {
        isModalOpen: false
    };
    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <div>
                <Header />
                <div className={style['container']}>
                    <div className={style['news']}>
                        {
                            this.props.roleUser === 'admin' || this.props.roleUser === 'moderator'
                                ? !this.state.isModalOpen && <a href='#s' onClick={() => this.openModal()} className={style['btn-add-post']}>Создать новую тему</a>
                                : <div className={style["area"]}></div>
                        }
                        {
                            this.props.posts.map((item) =>
                                <>
                                    <div className={style['themes']}>
                                        <div key={item.id} className={style['item']}>
                                            <div className={style['content']}>
                                                <NavLink to={'/forum/' + item.id} className={style['theme']}>{item.theme}</NavLink>
                                                <div className={style['data']}>{item.datatime}</div>
                                                <p>{item.author}</p>
                                            </div>
                                            <p>Ответов: <span>{item.countMessages}</span></p>
                                            {this.props.roleUser === 'admin' || this.props.roleUser === 'moderator'
                                                ? <button button className={style['basket']} onClick={() => this.props.removeForumPost(item.id)}><i class="fas fa-trash-alt"></i></button>
                                                : null
                                            }
                                        </div>
                                </div>
                                </>)
                        }
                    </div >
                <NewForum addForum={this.props.addForum} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} />
            </div>

            </div >
        );
    }
}

export default Forum;