import React from 'react';
import style from './Login.module.scss'
import logo from './../../../asets/image/logo.png'
import { reduxForm, Field } from 'redux-form';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['form']}>
            <label htmlFor="email">Введите email</label>
            <Field
                name='email'
                component='input'
                type='email'
                required='required'
                id='email'
            />
            <label htmlFor="password">Введите пароль</label>
            <Field
                name='password'
                component='input'
                type='password'
                required='required'
                id='password'
            />
            <div className={style['remember']}>
                <Field
                    name='rememberMe'
                    component='input'
                    type='checkbox'
                    id='rememberMe'
                />
                <label htmlFor="rememberMe" className={style['save']}>Запомнить меня</label>
            </div>
            <button className={style['login']} type="submit" ><span>Войти</span></button>
            <button className={style['clear']} type="button" onClick={props.reset}><span>Очистить поля</span></button>
        </form>
    )
}
LoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

let LogupForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['form']}>
            <label htmlFor="fio">ФИО</label>
            <Field
                name='fio'
                component='input'
                type='text'
                required='required'
                id='fio'
            />
            <label htmlFor="email">Email</label>
            <Field
                name='email'
                component='input'
                type='email'
                required='required'
                id='email'
            />
            <label htmlFor="password">Пароль</label>
            <Field
                name='password'
                component='input'
                type='password'
                required='required'
                id='password'
            />
            <label htmlFor="password">Повторите пароль</label>
            <Field
                name='password'
                component='input'
                type='password'
                required='required'
                id='password'
            />
            <button className={style['logup']} type="submit" ><span>Зарегистрироваться</span></button>
            <button className={style['clear']} type="button" onClick={props.reset}><span>Очистить поля</span></button>
        </form>
    )
}
LogupForm = reduxForm({ form: 'loginForm' })(LogupForm)

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false, isActive: false };
    }
    toggleAuth() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    openModal() {
        this.setState({ isModalOpen: true });
    }
    closeModal() {
        this.setState({ isModalOpen: false });
    }
    onSubmit = (formData) => {
        console.log(formData);
    }
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <>
                <div className={style['bg']}>
                    <div className={this.state.isActive ? style['frame'] + " " + style['frame-long'] : style['frame']}>
                        <button onClick={e => this.close(e)} className={style["close-auth"]}>&times;</button>
                        <div className={style['logo']}><img src={logo} alt="" /></div>
                        <div className={this.state.isActive ? style['signin'] + " " + style['signin-left'] : style['signin']}>
                            <div className={style['title']}>Вход</div>
                            <LoginForm onSubmit={this.onSubmit} />
                            <div className={style['signin-active']}>Еще не зарегистрированы?<button onClick={() => this.toggleAuth()}>Регистрация</button></div>
                        </div>
                        <div className={this.state.isActive ? style['signup'] + ' ' + style['signup-left'] : style['signup']}>
                            <div className={style['title']}>Регистрация</div>
                            <LogupForm onSubmit={this.onSubmit} />
                            <div className={style['signin-active']}>Уже зарегистрированы? <button onClick={() => this.toggleAuth()}>Войти</button></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    close(e) {
        e.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
};

export default Login;