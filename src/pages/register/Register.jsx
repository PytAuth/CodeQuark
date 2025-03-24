import React from 'react';
import './Register.css';
import Header from '../../components/Header';


function Register() {
    return (
        <div>
            <Header />
            <div className='login-container'>
                <div className="login-header">
                    <h1>Регистрация</h1>
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
                    <div className="input-group">
                        <label htmlFor="password">Подтвердите пароль</label>
                        <input id="password" className='login-input' type="password" placeholder='Введите ваш пароль' />
                    </div>
                    <button className='login-button' type="submit">Войти</button>
                    
                    <div className="login-footer">
                        <p>Есть аккаунт? <a href="/login" className="register-link">Войти</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
