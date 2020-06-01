import React from 'react'
import style from './Forum.module.scss';
import up from './../../asets/image/up.svg'
import ForumItem from './ForumItem/ForumItem';
import NewForum from './NewForum/NewForum';



const Forum = (props) => {

    return (
        <>
        <div className={style['news']}>
            {
                props.posts.map((item) => <>
                    <div className={style['themes']}>
                        <div key={item.id} className={style['item']}>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <p>{item.author}</p>
                                <div className={style['theme']}>{item.theme}</div>
                            </div>
                            <p>Ответов: <span>{/* количество ответов */}</span></p>
                            <div className={style['more']}>Подробнее<img src={up} alt="" /></div>
                        </div>
                    </div>
                </>)
            }
            {   !props.isToggleShowPostForm
                ? <button  onClick={() => props.toggleShowPostForm(true)}  className={style['btn-add-post']}>Создать новую тему</button>
                : <button onClick={() => props.toggleShowPostForm(false)}  className={style['btn-add-post']}>Отмена</button>
            }
            
        </div >
        {props.isToggleShowPostForm && <NewForum />}
        </>

    )
}
export default Forum;