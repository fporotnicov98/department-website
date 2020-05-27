import React from 'react'
import style from './Forum.module.scss';
import more from './../../asets/image/more.svg'
import ForumItem from './ForumItem/ForumItem';
import NewForum from './NewForum/NewForum';



const Forum = (props) => {
    debugger
    return (
        <>
        <div className={style['news']}>
            {
                props.forumPage.posts.map((item) => <>
                    <div className={style['themes']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <p>{item.author}</p>
                                <div className={style['theme']}>{item.theme}</div>
                            </div>
                            <p>Ответов: <span>{/* количество ответов */}</span></p>
                            <div className={style['more']}>Подробнее<img src={more} alt="" /></div>
                        </div>
                    </div>
                </>)
            }
            <button className={style['btn-add-post']}>Создать новую тему</button>
        </div >
        <ForumItem {...props} answers={props.forumPage.posts[0]}/>
        <NewForum />
        </>

    )
}
export default Forum;