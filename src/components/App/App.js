import './App.css';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { shuffleItems } from '../../utilities.js';

function App() {
  const [wall, setWall] = useState([]);
  const [ids, setIDs] = useState([]);
  const [error, setError] = useState('');
  // const [ artDetail, setArtDetail ] = useState({});
  // const [ favorites, setFavorites ] = useState([]);
  //const [ searchTerms, setSearchTerms ] = useState([]);

  const artIdSearch = fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers')
    .then(response => response.json())
    .catch(error => setError(error.message))


  const getIDs = async () => {
    const idMatch = await artIdSearch;
    setError('');
    setIDs(idMatch.objectIDs);
  }


  const getSingleArtPiece = async (index) => {
    const itemStock = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      .then(response => response.json());
    try {
      const artPiece = await itemStock;
      setWall(wall => [...wall, artPiece]);
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getIDs();
  }, [])

  useEffect(() => {
    ids.length && getSingleArtPiece(shuffleItems(ids)[0]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[1]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[2]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[3]);
    ids.length && getSingleArtPiece(shuffleItems(ids)[4]);
  }, [ids])

  return (
    <div className="App">Salon
      {/* {ids.length && console.log('Rendering IDs: ', ids)}
      {wall.length && console.log('WALL: ', wall)} */}
      {wall.length && <img src={wall[0].primaryImageSmall} />}
      {wall[1] && <img src={wall[1].primaryImageSmall} />}
      {wall[2] && <img src={wall[2].primaryImageSmall} />}
      {wall[3] && <img src={wall[3].primaryImageSmall} />}
      {wall[4] && <img src={wall[4].primaryImageSmall} />}
    </div>
  );
}

export default App;
