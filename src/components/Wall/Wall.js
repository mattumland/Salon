import React, { useContext } from 'react';
import SalonContext from '../../context/SalonContext';
import Artwork from '../Artwork/Artwork';
import './Wall.scss';

const Wall = () => {
  const [state, dispatch] = useContext(SalonContext);

  const displayTerms = `${state.searchTerms[0]} & ${state.searchTerms[1]}`

  const artworkToDisplay = state.wallDisplay.map((artwork, index) => {
      return (
        <Artwork
          wallLocation={`div${index}`}
          key={artwork.objectID}
          id={artwork.objectID}
          url={artwork.primaryImageSmall}
        />
      )
  })

  return (
      <>
      <h2 className='display-terms'>{displayTerms}</h2>
      <section className='salon-template'>
        {artworkToDisplay}
      </section>
      </>
  )

}

export default Wall;
