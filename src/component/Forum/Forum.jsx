import React from 'react'
import style from './Forum.module.scss';
// import ForumItem from './ForumItem/ForumItem';
import NewForum from './NewForum/NewForum';
import Header from '../Header/Header';



class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }
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
                        {!this.state.isModalOpen && <a href='#s' onClick={() => this.openModal()} className={style['btn-add-post']}>Создать новую тему</a>}
                        {
                            this.props.posts.map((item) => <>
                                <div className={style['themes']}>
                                    <div key={item.id} className={style['item']}>
                                        <div className={style['content']}>
                                            <div className={style['theme']}>{item.theme}</div>
                                            <div className={style['data']}>{item.datatime}</div>
                                            <p>{item.author}</p>
                                        </div>
                                        <p>Ответов: <span>{/* количество ответов */}</span></p>
                                        <button className={style['basket']} onClick={() => this.props.removeForumPost(item.id)}><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </>)
                        }
                    </div >
                    <NewForum addForum={this.props.addForum} isOpen={this.state.isModalOpen} onClose={() => this.closeModal()} />
                </div>

            </div>
        );
    }
}

export default Forum;