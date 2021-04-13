import React from 'react';
import './Header.scss';

const Header = () => {

  return (
    <header>
      <button className="logo-container">
        <h1>Salon</h1>
      </button>
      <button className="user-buttons">
        <h2>favorites</h2>
      </button>
    </header>
  )
}

export default Header;
