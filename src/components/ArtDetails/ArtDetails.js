import React, { useContext, useEffect, useState } from 'react';
import SalonContext from '../../context/SalonContext'
import './ArtDetails.scss';

const ArtDetails = ({ id }) => {
  const [isFav, setFav] = useState(false)

  //check if this is favorite and update dynamic
  //this needs to be dynmallly checked on render
  // let isFav = false; //✓
  /*
  @Matt try throwing this in before the favorite
{' '}
Like <tag>{' '} favorite</tag>
You could also try <tag><span> </span>favorite</tag>*/

  const [state, dispatch] = useContext(SalonContext);

  const singleArtwork = state.wallDisplay.filter(art => {
    return art.objectID === parseInt(id)
  });

  const updateFav = () => {
    if (isFav) {
        setFav(false)
      } else {
        setFav(true)
      }
  }

  const updateFavList = (artwork) => {
    const newFavList = state.favorites;
    const artIndex = newFavList.indexOf(artwork)
    if (artIndex === -1) {
      newFavList.push(artwork);
    } else {
      newFavList.splice(artIndex, 1);
    }
    const action = { type: 'UPDATE_FAVORITE', newFavorites: newFavList}
  }

  useEffect(() => {
    updateFavList(singleArtwork[0]);
  }, [isFav])

  return (
    <>
      <section className="art-details">
        <img className="details-image" src={singleArtwork[0].primaryImage}
              alt={`${singleArtwork[0].title} by ${singleArtwork[0].artistDisplayName}`}/>
        <div className="details-content">
          <aside>
            <h3>"{singleArtwork[0].title}"</h3>
            <p>c. {singleArtwork[0].objectBeginDate}-{singleArtwork[0].objectEndDate}</p>
            <p>{singleArtwork[0].artistDisplayName}</p>
            <p>{singleArtwork[0].medium}</p>
          </aside>
            <div className="fav-box">
            {isFav ? <button onClick={updateFav} className='favorite'>✓ favorite</button> :
                      <button onClick={updateFav} className='not-favorite'>+ favorite</button>}
            </div>
        </div>
      </section>
    </>
  )
}

export default ArtDetails;
