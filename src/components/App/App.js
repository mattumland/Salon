import './App.scss';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { shuffleItems } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails.js';

function App() {
  const [artPieces, setArtPieces] = useState([]);
  const [ids, setIDs] = useState([]);
  const [error, setError] = useState('');
  // const [ favorites, setFavorites ] = useState([]);
  //const [ searchTerms, setSearchTerms ] = useState([]);
  const searchTerm = 'q=sunflower'; // search terms that we made to state


  const getIDs = async () => {
    const artURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`;
    setError('');

    try {
      const response = await fetch(artURL);
      const artIDs = await response.json();
      setIDs(artIDs.objectIDs);
    } catch (error) {
      setError(error)
    }
  }

  const collectArtPieces = () => {
    const shuffledPieces = shuffleItems(ids);
    const wall = [];

    for (var i = 0; i < 7; i++) {
      const artPiece = getSingleArtPiece(shuffledPieces[i])
      wall.push(artPiece);
    }
    Promise.all(wall).then(collectedPieces => setArtPieces(collectedPieces))
  }

  const getSingleArtPiece = async (index) => {
    try {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      const artPiece = await response.json();
      return artPiece;
    } catch (error) {
      setError(error)
    }
  }

  useEffect( async () => {
    getIDs();
    // await ids.length && collectArtPieces();
  }, [])

  useEffect(() => {
    ids.length && collectArtPieces();
  }, [ids])



  return (
    <div className="App">
      <Header />
      <Route 
        exact path="/"
        render={() => (
          <section className='wall-container'>
            <Wall artworks={artPieces} />
          </section>
        )}
        /> 
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
