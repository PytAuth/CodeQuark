import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Feed from './pages/feed/Feed.jsx'
import App from './App.jsx'
import Error from './pages/error/Error.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
