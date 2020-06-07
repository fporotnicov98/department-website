import React from 'react';
import style from './../News/News.module.scss'

const ShowModalConfirmDeletePost = (props) => {
    debugger
    let close = (e) => {
        e.preventDefault();
        if (props.onClose) {
            props.onClose();
        }
    }
    if (props.isOpen === false) return null;
    return (
        <div className={style['wrapper']}>
            <div className={style['modal']}>
                <div className={style['title']}>Вы действительно хотите удалить пост?</div>
                <div className={style['buttons']}>
                    <a className={style['yes']} onClick={(e) => {
                        props.removeNews(props.removeId)
                        close(e)
                    }}>Да</a>
                    <a className={style['no']} onClick={(e) => close(e)} href="#s">Отмена</a>
                </div>

            </div>
        </div>
    )
}

export default ShowModalConfirmDeletePost