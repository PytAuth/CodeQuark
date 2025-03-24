import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
const Error = () => {
  return (
    <div>
        <Header />
        <h1 className='error-text'>Error<br></br>Page not found</h1>
        <p className='error-link'><Link to="/" className='error-link'>Go to home</Link></p>
    </div>
  );
};

export default Error;

