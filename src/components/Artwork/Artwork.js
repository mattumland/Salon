import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SalonContext from '../../context/SalonContext';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, wallLocation }) => {
  const [state, dispatch] = useContext(SalonContext)


  return (
    <Link to={`/${id}`} className={`img-container ${wallLocation}`}>
      <img src={url} />
    </Link>
  )
}

export default Artwork;
