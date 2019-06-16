import React from 'react';
import './index.css';

export default class Auth extends React.Component {
    render() {
        return (
            <div id="auth" className="auth">
                <div className="auth-form">
                    <div className="auth-headline">
                        <h2 className="auth-caption">Авторизация</h2>
                        <a href="#" className="auth-close">✖</a>
                    </div>
                    <input type="login" className="textfield login" placeholder="Имя пользователя" />
                    <input type="password" className="textfield password" placeholder="Пароль" />
                    <span className='error'></span>
                    <div className="buttons">
                        <button type='button' className="button login" onClick={this.props.logIn}>Войти</button>
                        <button type='button' className="button signup" onClick={this.props.toRegister}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>

        );
    }
}