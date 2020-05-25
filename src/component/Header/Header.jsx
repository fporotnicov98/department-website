import React from 'react'
import style from './Header.module.scss'
import logo from './../../asets/image/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className={style['container']}>
                <div className={style['header__row']}>
                    <a className={style['logo']} href="#s"><img src={logo} alt="" /></a>
                    <a href="#s" className={style['title']}>Кафедра информационной безопасности</a>
                    <ul className={style['buttons-menu']}>
                        <li><NavLink to='/news' activeClassName={style['active-link']}>Новости</NavLink></li>
                        <li><NavLink to='/survey' activeClassName={style['active-link']}>Опросы</NavLink></li>
                        <li><NavLink to='/forum' activeClassName={style['active-link']}>Форум</NavLink></li>
                        <li><NavLink to='/info' activeClassName={style['active-link']}>Информация</NavLink></li>
                        <li id='auth'>Вход</li>
                        <li style={{ display: 'none' }} id='account'>Личный кабинет</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;