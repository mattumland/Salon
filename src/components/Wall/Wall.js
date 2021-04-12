import React from 'react';
import './Wall.scss';
import Artwork from '../Artwork/Artwork';

const Wall = ({ artworks }) => {

  // const salonTemplates = []; This will eventually contain multiple templates to choose from.

  const artworksToDisplay = artworks.map((artwork, index) => {
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
        {artworksToDisplay}
      </section>
  )

}

export default Wall;
