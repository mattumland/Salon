import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return (
    <header>
      <Link
        to='/'>
        <button className="logo-container">
          <h1>Salon</h1>
        </button>
      </Link>
      <Link
        to='/favorites'>
        <button className="user-buttons">
            <h2>favorites</h2>
        </button>
      </Link>
    </header>
  )
}

export default Header;
