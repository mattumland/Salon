import React from 'react';
import './Header.scss';

const Header = () => {

  return (
    <header>
      <section className="logo-container">
        <h1>Salon</h1>
      </section>
      <button className="user-buttons">
        <h2>favorites</h2>
      </button>
    </header>
  )
}

export default Header;
