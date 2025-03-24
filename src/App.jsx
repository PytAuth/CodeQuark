import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <>
    <Header />

    <h1 className='text-center first-text'>CodeQuark - это удобная<br></br> онлайн-платформа</h1>
    <p className='text-center second-text'>где разработчики могут делиться отрывками своего кода
       <br></br>с другими пользователями,
        получать обратную связь и находить вдохновение в проектах сообщества.<br></br>
        Здесь приветствуется обмен знаниями: от небольших сниппетов до готовых решений для типовых задач.</p>
    </>
  )
}

export default App
