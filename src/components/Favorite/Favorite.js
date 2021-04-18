import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { removeFromFavList } from '../../utilities'
import SalonContext from '../../context/SalonContext';
import './Favorite.scss';

const Favorite = ({ artwork }) => {
  const [state, dispatch] = useContext(SalonContext);

  return (
    <section className="fav-grid-entry">
      <div className="artwork">
        <img className="fav-img" src={artwork.primaryImageSmall} />
      </div>
      <h5 className="title">{artwork.title}</h5>
      <h5 className="date">{artwork.objectEndDate}</h5>
      <h5 className="artist">{artwork.artistDisplayName}</h5>
      <h5 className="medium">{artwork.medium}</h5>
      <div className="remove"><button>remove</button></div>
    </section>
  )
}

export default Favorite
