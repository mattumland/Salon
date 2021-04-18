import React, { useContext, useEffect, useState } from 'react';
import { addToFavList, removeFromFavList } from '../../utilities'
import SalonContext from '../../context/SalonContext'
import './ArtDetails.scss';

const ArtDetails = ({ id }) => {
  const [state, dispatch] = useContext(SalonContext);

  const singleArtwork = state.wallDisplay.filter(art => {
    return art.objectID === parseInt(id)
  });

  const [isFav, setFav] = useState(state.favorites.includes(singleArtwork[0]))

  const toggleFav = () => {
    if (isFav) {
        setFav(false)
      } else {
        setFav(true)
      }
  }

  useEffect(() => {
    if (isFav && !state.favorites.includes(singleArtwork[0])) {
      addToFavList(singleArtwork[0], state.favorites);
    } else if (!isFav && state.favorites.includes(singleArtwork[0])){
      removeFromFavList(singleArtwork[0], state.favorites);
    }
  }, [isFav])

  return (
    <>
      <section className="art-details">
        <img className="details-image" src={singleArtwork[0].primaryImage}
              alt={`${singleArtwork[0].title} by ${singleArtwork[0].artistDisplayName}`}/>
        <div className="details-content">
          <aside>
            <h3>"{singleArtwork[0].title}"</h3>
            <p>{singleArtwork[0].objectDate}</p>
            <p>{singleArtwork[0].artistDisplayName}</p>
            <p>{singleArtwork[0].medium}</p>
          </aside>
            <div className="fav-box">
            {isFav ? <button onClick={toggleFav} className='favorite'>✓ favorite</button> :
                      <button onClick={toggleFav} className='not-favorite'>+ favorite</button>}
            </div>
        </div>
      </section>
    </>
  )
}

export default ArtDetails;
