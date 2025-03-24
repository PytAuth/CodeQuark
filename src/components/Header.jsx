import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>

      <div className='header-logo'>
        <Link to="/" className='header-logo text-gradient'>CodeQuark</Link>
        <Link to="/feed" className='items-header'>Feed</Link>
        <div className="dropdown-container">
          <Link to="" className='items-header'>Information</Link>
          <div className="dropdown-content">
            <h3>Правила</h3>
            <ul className='dropdown-content-list'>
           <li className='dropdown-content-item'>1. Не используйте ненормативную лексику</li>
           <li className='dropdown-content-item'>2. Не распростроняйте вредоносный код</li>
           <li className='dropdown-content-item'>3. Уважайте других пользователей</li>
           <li className='dropdown-content-item'>4. Не публикуйте личную информацию</li>
           <li className='dropdown-content-item'>5. Соблюдайте авторские права</li>
           <li className='dropdown-content-item'>6. Не спамьте в комментариях</li>
           </ul>
          </div>
        </div>
      </div>
      {/* <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search..." 
        />
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
      </div>
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
          margin: 0 auto;
          width: 300px;
          position: relative;
        }
        .search-input {
          width: 100%;
          padding: 8px 40px 8px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: all 0.3s ease;
        }
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .search-input:focus {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }
        .search-button {
          position: absolute;
          right: 10px;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style> */}
<div className='item-header'>
  <button className='btn-header' onClick={() => navigate('/login')}>Sign in</button>
  <button className='btn-header border-btn' onClick={() => navigate('/register')}>Sign up</button>
</div>
    </div>
  )
}

export default Header


