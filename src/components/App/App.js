import './App.css';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getRandomIndex } from '../../utilities.js';

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
    setIDs(idMatch.objectIDs)
  }


  const getSingleArtPiece = async () => {
    const randomIndex = getRandomIndex(ids);
    const itemStock = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[randomIndex]}`)
      .then(response => response.json());

    try {
      const artPiece = await itemStock;
      setWall(wall => [...wall, artPiece]);
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getIDs()
  }, [])

  useEffect(() => {
    ids && getSingleArtPiece();
  }, [ids])

  return (
    <div className="App">
      {/* {ids.length && console.log('IDs: ', ids)} */}
      {/* {wall.length && console.log('WALL: ', wall)} */}
      {wall.length > 1 && <img src={wall[1].primaryImageSmall} />}
    </div>
  );
}

export default App;
