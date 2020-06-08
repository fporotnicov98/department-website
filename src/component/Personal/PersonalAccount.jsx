import React from 'react';
import Header from '../Header/Header';
import style from './PersonalAccount.module.scss';

class PersonalAccount extends React.Component {
    state = {
        isClick: false
    }
    showEditPassword() {
        this.setState({ isClick: !this.state.isClick })
    }
    render() {
        return (
            <div>
                <Header />
                <div className={style['container']}>
                    <div className={style["personal"]}>
                        <div className={style['title']}>Личный кабинет</div>
                        <div className={style["body"]}>
                            <div className={style['user-data']}>
                                <div className={style['sub-title']}>Личные данные</div>
                                <ul className={style['info']}>
                                    <li>Ваш ФИО:  <span style = {{fontWeight : "bold"}}>{this.props.auth.fio}</span></li>
                                    <li>Ваша электронная почта:  <span style = {{fontWeight : "bold"}}>{this.props.auth.email}</span></li>
                                </ul>
                                <div className={style['edit-password']}>
                                    <div onClick={() => this.showEditPassword()} className={style['sub-title']}>Изменение пароля</div>
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
                                this.props.auth.roleUser === 'admin'
                                    ? <div className={style['users']}>
                                        <div className={style['sub-title']}>Управление пользователями</div>
                                        <div className={style['users-wrapper']}>
                                            {
                                                this.props.users.map((user) =>
                                                    <div className={style['user']}>
                                                        <div className={style['id']}>#{user.id}</div>
                                                        <div className={style['fio']}>{user.fio}</div>
                                                        <button disabled = {user.roleUser === "admin"} onClick = {() => this.props.updateUserRole(user.id,"admin")} href='#s' className={style['role']} style = {user.roleUser === "admin" ? {color: "red"} : null}>Администратор</button>
                                                        <button  disabled = {user.roleUser === "moderator"} onClick = {() => this.props.updateUserRole(user.id,"moderator")}  href='#s' className={style['role']} style = {user.roleUser === "moderator"  ? {color: "red"} : null}>Модератор</button>
                                                        <button  disabled = {user.roleUser === "user"} href='#s' onClick = {() => this.props.updateUserRole(user.id,"user")}  className={style['role']} style = {user.roleUser === "user"  ? {color: "red"} : null}>Пользователь</button>
                                                        <a href="#s" onClick = {() => {this.props.removeUser(user.id)}}className={style['delete']}><i class="fas fa-trash-alt"></i></a>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                               : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default PersonalAccount;