import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SalonContext from '../../context/SalonContext';
import { shuffleItems, terms2 } from '../../utilities';
import './Header.scss';

const Header = () => {
  const [state, dispatch] = useContext(SalonContext);

  const refresh = () => {
    const newTerms = shuffleItems(terms2);
    const action = { type: 'UPDATE_TERMS', terms: newTerms};
    dispatch(action)
  }

  return (
    <header>
      <Link
        to='/'>
        <button data-cy='home' className="logo-container"><h1>Salon</h1></button>
      </Link>
      <section className="user-buttons">
        <Link
          to='/'>
        <button data-cy='refresh' onClick={refresh}><h2>see a new wall</h2></button>
        </Link>
        <Link
          to='/favorites'>
          <button data-cy='favorites' ><h2>favorites</h2></button>
        </Link>
      </section>
    </header>
  )
}

export default Header;
