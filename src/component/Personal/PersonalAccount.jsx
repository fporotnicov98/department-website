import React from 'react';
import Header from '../Header/Header';
import style from './PersonalAccount.module.scss';

class PersonalAccount extends React.Component {
    state = {
        isClick: false
    }
    showEdirPassword() {
        this.setState({ isClick: !this.state.isClick })
    }
    render() {
        return (
            <div>
                <Header />
                <div className={style['container']}>
                    <div className={style["personal"]}>
                        <div className={style['title']}>Личный кабинет</div>
                        {
                            this.props.roleUser === 'admin'
                                ? <div className={style["body"]}>
                                    <div className={style['user-data']}>
                                        <div className={style['sub-title']}>Личные данные</div>
                                        <ul className={style['info']}>
                                            <li>Пользователь:<span>{this.props.users.fio}</span></li>
                                            <li>Электронная почта:<span></span></li>
                                            <li>Номер телефона<span></span></li>
                                            <li>Роль:<span></span></li>
                                        </ul>
                                        <div className={style['edit-password']}>
                                            <div onClick={() => this.showEdirPassword()} className={style['sub-title']}>Изменение пароля</div>
                                            {
                                                this.state.isClick &&
                                                <form action="">
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Старый пароль</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Новый пароль</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Еще раз</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                </form>
                                            }
                                        </div>
                                    </div>
                                    {
                                        this.props.users.map((user, index) =>
                                            <div className={style['users']}>
                                                <div className={style['sub-title']}>Управление пользователями</div>
                                                <div className={style['users-wrapper']}>
                                                    <div className={style['user']}>
                                                        <div className={style['id']}>#{index}</div>
                                                        <div className={style['fio']}>{user.fio}</div>
                                                        <a href='#s' className={style['role']}>{user.roleUser}</a>
                                                        <a href="#s" className={style['delete']}><i class="fas fa-trash-alt"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    }

                                </div>
                                : <div className={style["body-user"]}>
                                    <div className={style['user-data']}>
                                        <div className={style['sub-title']}>Личные данные</div>
                                        <ul className={style['info']}>
                                            <li>Пользователь:<span></span></li>
                                            <li>Электронная почта:<span></span></li>
                                            <li>Номер телефона:<span></span></li>
                                            <li>Роль:<span></span></li>
                                        </ul>
                                        <div className={style['edit-password']}>
                                            <div onClick={() => this.showEdirPassword()} className={style['sub-title']}>Изменение пароля</div>
                                            {
                                                this.state.isClick &&
                                                <form action="">
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Старый пароль</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Новый пароль</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                    <div className={style['form-item']}>
                                                        <label htmlFor="">Еще раз</label>
                                                        <input type="password" name="" id="" />
                                                    </div>
                                                </form>
                                            }
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

};

export default PersonalAccount;