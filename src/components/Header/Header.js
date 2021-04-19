import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  const refresh = () => {
    location.reload();
  }

  return (
    <header>
      <Link
        to='/'>
        <button data-cy='home' className="logo-container"><h1>Salon</h1></button>
      </Link>
      <section className="user-buttons">
        <button data-cy='refresh' onClick={refresh}><h2>see a new wall</h2></button>
        <Link
          to='/favorites'>
          <button data-cy='favorites' ><h2>favorites</h2></button>
        </Link>
      </section>
    </header>
  )
}

export default Header;
