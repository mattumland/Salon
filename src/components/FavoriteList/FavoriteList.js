import React, { useContext, useEffect, useState } from 'react';
import { addToFavList, removeFromFavList } from '../../utilities'
import SalonContext from '../../context/SalonContext'

const FavoriteList = () => {
  const [state, dispatch] = useContext(SalonContext);


  //fav list head built on same title, date, artist, medium
  //a bunch of favorite blocks in an array

  return(

  )
}

export default FavoriteList;
