import React from 'react';
import { Link } from 'react-router-dom';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, wallLocation }) => {

  return (
    <Link to={`/${id}`} className={`img-container ${wallLocation}`}>
      <img src={url} />
    </Link>
  )
}

export default Artwork;
