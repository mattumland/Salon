import React, { useState, useEffect } from 'react';
import './ArtDetails.scss';

const ArtDetails = () => {
  const [ selectedArt, setSelectedArt ] = useState('');

  //getSingleArtPiece(artPieceID)
    //.then setSelectedArt(repsonse)
    const getSingleArtPiece = async () => {
      const singleArtURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437329';

      try {
        const response = await fetch(singleArtURL);
        const artPiece = await response.json();
        setSelectedArt(artPiece);
        // await console.log(selectedArt)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getSingleArtPiece();
    }, [])

  return (
    <section className="art-details">
      {console.log(selectedArt)}
      <img  src={selectedArt.primaryImage} alt={selectedArt.title}/>
      <caption>
        <p>"{selectedArt.title}"</p>
        <p>{selectedArt.objectBeginDate}-{selectedArt.objectEndDate}</p>
        <p>{selectedArt.artistDisplayName}</p>
        <p>Medium: {selectedArt.medium}</p>
      </caption>
    </section>
  )
}

export default ArtDetails;