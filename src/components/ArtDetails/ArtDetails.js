import React, { useContext } from 'react';
import SalonContext from '../../context/SalonContext'
import './ArtDetails.scss';

const ArtDetails = ({ id }) => {

  const [state, dispatch] = useContext(SalonContext);

  const singleArtwork = state.wallDisplay.filter(art => {
    return art.objectID === parseInt(id)
  });

  return (
    <>
      <section className="art-details">
        <img className="details-image" src={singleArtwork[0].primaryImage} alt={singleArtwork[0].title}/>
        <aside>
          <h2>Featured Artifact:</h2>
          <h3>"{singleArtwork[0].title}"</h3>
          <p>c. {singleArtwork[0].objectBeginDate}-{singleArtwork[0].objectEndDate}</p>
          <p>{singleArtwork[0].artistDisplayName}</p>
          <p>{singleArtwork[0].medium}</p>
        </aside>
      </section>
    </>
  )
}

export default ArtDetails;
