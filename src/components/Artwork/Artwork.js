import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SalonContext from '../../context/SalonContext';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, wallLocation }) => {
  const [state, dispatch] = useContext(SalonContext)

  return (
    <section className={wallLocation}>
    <Link
      className={`img-container`}
      to={`/${id}`}>
      <img src={url} />
    </Link>
    </section>
  )
}

export default Artwork;
