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

  console.log(favsToDisplay);

  return(
    <>
      <section className="fav-grid-header">
        <h4 className="artwork">Artwork</h4>
        <h4 className="title">Title</h4>
        <h4 className="date">Date</h4>
        <h4 className="artist">Artist</h4>
        <h4 className="medium">Medium</h4>
      </section>
      <section className="fav-list">
        {!favsToDisplay.length && (<p className='error'>No favorites have been saved.</p>)}
        {favsToDisplay}
      </section>
    </>
  )
}

export default FavoriteList;
