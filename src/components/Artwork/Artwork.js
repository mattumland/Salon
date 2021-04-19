import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SalonContext from '../../context/SalonContext';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, wallLocation, title }) => {
  const [state, dispatch] = useContext(SalonContext)

  return (
    <section className={wallLocation}>
    <Link
      to={`/${id}`}>
      <img className="wall-img" src={url} alt={title} />
    </Link>
    </section>
  )
}

export default Artwork;
