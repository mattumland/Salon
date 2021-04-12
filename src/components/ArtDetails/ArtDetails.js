import React, { useState, useEffect } from 'react';
import './ArtDetails.scss';

const ArtDetails = () => {
  const [ selectedArt, setSelectedArt ] = useState('');

    const getSingleArtPiece = async () => {
      const singleArtURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437329';

      try {
        const response = await fetch(singleArtURL);
        const artPiece = await response.json();
        setSelectedArt(artPiece);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getSingleArtPiece();
    }, [])

  return (
    <>
      <section className="art-details">
        {console.log(selectedArt)}
        <img  src={selectedArt.primaryImage} alt={selectedArt.title}/>
        <aside>
          <h2>Featured Artifact:</h2>
          <h3>"{selectedArt.title}"</h3>
          <p>c. {selectedArt.objectBeginDate}-{selectedArt.objectEndDate}</p>
          <p>{selectedArt.artistDisplayName}</p>
          <p>{selectedArt.medium}</p>
        </aside>
      </section>
    </>
  )
}

export default ArtDetails;