import React from 'react'
import style from './Survey.module.scss';
import user from './../../asets/image/user.png'
import NewSurvey from './NewSurvey/NewSurvey';


const Survey = (props) => {
    return (
        <div className={style['news']}>
            <div className={style['body']}>
                {
                    props.surveyPage.survey.map(item =>
                        <div key={item.id} className={style['item']}>
                            <div className={style['author']}>
                                <div className={style['photo']}><img src={user} alt="" /></div>
                                <p>{item.author}</p>
                            </div>
                            <div className={style['content']}>
                                <div className={style['data']}>{item.datatime}</div>
                                <div className={style['theme']}>{item.theme}</div>
                                <form action="" method="post">
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Вариант 1</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Вариант 2</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Вариант 3</label>
                                    <label htmlFor=""><input type="checkbox" name="" id="" />Вариант 4</label>
                                </form>
                            </div>
                        </div>
                    )
                }
                <NewSurvey />
            </div>
            <button className={style['btn-add-survey']}>Добавить опрос</button>
        </div>

    )
}
export default Survey