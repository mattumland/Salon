import React, { useContext, useEffect, useState } from 'react';
import { addToFavList, removeFromFavList } from '../../utilities';
import Favorite from '../Favorite/Favorite';
import SalonContext from '../../context/SalonContext';
import './FavoriteList.scss';

const FavoriteList = () => {
  const [state, dispatch] = useContext(SalonContext);

  let favsToDisplay = [];

  if (state.favorites.length) {
    favsToDisplay = state.favorites.map(fav => {
      return (
        <Favorite
        key={fav.objectID}
        artwork={fav}
        />
      )
    })
  }

  return(
    <>
      <section className="fav-grid-header">
        <h3 className="artwork">Artwork</h3>
        <h3 className="title">Title</h3>
        <h3 className="date">Date</h3>
        <h3 className="artist">Artist</h3>
        <h3 className="medium">Medium</h3>
      </section>
      <section className="fav-list">
        {!favsToDisplay.length && (<p className='error'>No favorites have been saved.</p>)}
        {favsToDisplay}
      </section>
    </>
  )
}

export default FavoriteList;
