import React from 'react'
import style from './Header.module.scss'
import logo from './../../asets/image/logo.png'
import { NavLink } from 'react-router-dom'
import Login from '../Auth/Login/Login'

class Header extends React.Component {

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
            <header className={style['header']}>
                <div className={style['container']}>
                    <div className={style['header__row']}>
                        <a className={style['logo']} href="/"><img src={logo} alt="" /></a>
                        <a href="/" className={style['title']}>Кафедра информационной безопасности</a>
                        <ul className={style['buttons-menu']}>
                            <li><NavLink exact to='/' activeClassName={style['active-link']}>Новости</NavLink></li>
                            <li><NavLink to='/survey' activeClassName={style['active-link']}>Опросы</NavLink></li>
                            <li><NavLink to='/forums' activeClassName={style['active-link']}>Форум</NavLink></li>
                            <li><NavLink to='/info' activeClassName={style['active-link']}>Информация</NavLink></li>
                            <li  onClick={() => this.openModal()}><a to="#s">Вход</a></li>
                            <Login
                                isOpen={this.state.isModalOpen}
                                onClose={() => this.closeModal()}
                            />
                            <li style={{ display: 'none' }} id='account'>Личный кабинет</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;