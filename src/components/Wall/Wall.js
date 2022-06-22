import React, { useContext, useEffect } from 'react';
import SalonContext from '../../context/SalonContext';
import Artwork from '../Artwork/Artwork';
import './Wall.scss';

const Wall = () => {
  const [state, dispatch] = useContext(SalonContext);

  const artworkToDisplay = state.wallDisplay.map((artwork, index) => {
    if (artwork.primaryImageSmall) {
      return (
        <Artwork
          wallLocation={`div${index+1}`}
          key={artwork.objectID}
          id={artwork.objectID}
          title={artwork.title}
          url={artwork.primaryImageSmall}
        />
      )
    }
  })

  return (
      <>
        {(state.wallDisplay.length < 7) && (
          <h3 className='loading'> Your display is being curated. </h3>
        )}

        <h2 className='display-terms'>{`${state.searchTerms[0]} & ${state.searchTerms[1]}`} </h2>
          <section className='salon-template'>
            {artworkToDisplay}
          </section>
      </>
  )

}

export default Wall;
