import React from 'react';
import style from './Login.module.scss'
import logo from './../../../asets/image/logo.png'
import { reduxForm, Field } from 'redux-form';

let ConfirmForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['form']}>
            <div className={style['error']}>{props.error}</div>
            <label htmlFor="code">Код подтверждения?</label>
            <Field
                name='code'
                component='input'
                type='text'
                required='required'
                id='code'
            />
            <button className={style['logup']} type="submit" ><span>Подтвердить</span></button>
        </form>
    )
}
const ConfirmFormRedux = reduxForm({ form: 'confirmForm' })(ConfirmForm)

export class Confirm extends React.Component {

    render() {
        if (this.props.isOpen === false) return null;
        return (
            <div className={style['bg']}>
                <div className={style['frame']}>
                    <button onClick={e => this.close(e)} className={style["close-auth"]}><span>x</span></button>
                    <div className={style['logo']}><img src={logo} alt="" /></div>
                    <div className={style['confirm']}>
                        <div className={style['title']}>Подтверждение кода</div>
                        <ConfirmFormRedux onSubmit={this.onSubmitConfirm} />
                    </div>
                </div>
            </div>
        );
    }
    close(e) {
        e.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}