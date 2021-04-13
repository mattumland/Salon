import './App.scss';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { shuffleItems } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails.js';

function App() {
  const [wall, setWall] = useState([]);
  const [ids, setIDs] = useState([]);
  const [error, setError] = useState('');
  // const [ artDetail, setArtDetail ] = useState({});
  // const [ favorites, setFavorites ] = useState([]);
  //const [ searchTerms, setSearchTerms ] = useState([]);
  const searchTerm = 'q=sunflower'; // search terms that we made to state
  const artIdSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`)
    .then(response => response.json())
    .catch(error => setError(error.message))


  const getIDs = async () => {
    const idMatch = await artIdSearch;
    setError('');
    setIDs(idMatch.objectIDs);
  }


  const getSingleArtPiece = async (index) => {
    try {
      const item = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      const response = await item;
      const artPiece = await response.json();
      setWall(wall => [...wall, artPiece]);
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getIDs();
  }, [])

  useEffect(() => {
    // getIDs();

    ids.length && getSingleArtPiece(shuffleItems(ids)[0]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[1]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[2]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[3]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[4]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[5]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[6]);
  }, [ids])



  return (
    <div className="App">
      <Header />
      <section className='wall-container'>
        <Wall artworks={wall} />
      </section>

//       <Route 
//         exact path="/"
//         render={() => <Wall artworks={wall} />}
//       />
      <Route exact path='/:artPieceID' render={({ match }) => {
        const { artPieceID } = match.params;
        return <ArtDetails artPieceID={artPieceID} />
      }} />

      {/* // {ids.length && console.log('Rendering IDs: ', ids)}
      // {wall.length && console.log('WALL: ', wall)}
      // {wall.length && <img src={wall[0].primaryImageSmall} />}
      // {wall[1] && <img src={wall[1].primaryImageSmall} />}
      // {wall[2] && <img src={wall[2].primaryImageSmall} />}
      // {wall[3] && <img src={wall[3].primaryImageSmall} />}
      // {wall[4] && <img src={wall[4].primaryImageSmall} />} */}
    </div>
  );
}

export default App;
