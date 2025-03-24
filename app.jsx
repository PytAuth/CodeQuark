import React from 'react';
import './styles.css'; // Предполагаем, что у вас есть файл стилей

function App() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <h1 className="welcome-title">
            Добро пожаловать в наше приложение
          </h1>
        </div>
        
        <p className="welcome-subtitle">
          Мы рады видеть вас здесь. Это платформа для реализации ваших идей и проектов.
        </p>
        
        <div className="welcome-features">
          <div className="feature">
            <h3 className="feature-title">Простой интерфейс</h3>
            <p className="feature-description">Интуитивно понятная навигация и дизайн</p>
          </div>
          
          <div className="feature">
            <h3 className="feature-title">Полезный функционал</h3>
            <p className="feature-description">Все необходимые инструменты в одном месте</p>
          </div>
          
          <div className="feature">
            <h3 className="feature-title">Надежная работа</h3>
            <p className="feature-description">Стабильная производительность в любое время</p>
          </div>
        </div>
        
        <div className="welcome-actions">
          <button className="btn-start">Начать работу</button>
          <button className="btn-info">Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default App; 