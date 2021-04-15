import React, { useContext } from 'react';
import SalonContext from '../../context/SalonContext'
import Artwork from '../Artwork/Artwork';
import './Wall.scss';

const Wall = () => {

  const [state, dispatch] = useContext(SalonContext);

  // const salonTemplates = []; This will eventually contain multiple templates to choose from.

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
      <section className='salonTemplate'>
        {artworkToDisplay}
      </section>
  )

}

export default Wall;
