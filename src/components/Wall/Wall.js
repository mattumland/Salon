import React from 'react';
import './Wall.scss';
import Artwork from '../Artwork/Artwork';

const Wall = () => {

  // const salonTemplates = []; This will eventually contain multiple templates to choose from.

  const artworks = [
    {objectID: 468350, primaryImageSmall: "https://images.metmuseum.org/CRDImages/md/web-large/DP154235.jpg"},
    {objectID: 206989, primaryImageSmall: "https://images.metmuseum.org/CRDImages/es/web-large/DT8910.jpg"},
    {objectID: 436102, primaryImageSmall: "https://images.metmuseum.org/CRDImages/ep/web-large/DP-1410-001.jpg"},
    {objectID: 2032, primaryImageSmall: "https://images.metmuseum.org/CRDImages/ad/web-large/85I_ACF3100R5.jpg"},
    {objectID: 20141, primaryImageSmall: "https://images.metmuseum.org/CRDImages/ad/web-large/L.2009.22.35.jpg"},
    {objectID: 2019, primaryImageSmall: "https://images.metmuseum.org/CRDImages/ad/web-large/85I_ACF3093R6.jpg"},
    {objectID: 208554, primaryImageSmall: "https://images.metmuseum.org/CRDImages/es/web-large/DT4036.jpg"}
  ]

  const artworksToDisplay = artworks.map((artwork, index) => {
      //create an array of artwork using props
      //eventually we will pass this using context API
      //use index to create dynamic classNames that correspond to locations in the templates
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
