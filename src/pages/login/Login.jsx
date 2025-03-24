import React from 'react';
import './Login.css';
import Header from '../../components/Header';


function Login() {
    return (
        <div>
            <Header />
            <div className='login-container'>
                <div className="login-header">
                    <h1>Вход в аккаунт</h1>
                    <p>Добро пожаловать! Пожалуйста, введите свои данные</p>
                </div>
                
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" className='login-input' type="text" placeholder='Введите ваш email' />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Пароль</label>
                        <input id="password" className='login-input' type="password" placeholder='Введите ваш пароль' />
                    </div>
                    
                    <button className='login-button' type="submit">Войти</button>
                    
                    <div className="login-footer">
                        <p>Еще нет аккаунта? <a href="/register" className="register-link">Зарегистрироваться</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
