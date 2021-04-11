import './App.css';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getRandomIndex } from '../../utilities.js';

function App() {
  const [ wall, setWall ] = useState([]);
  const [ ids, setIDs ] = useState({});
  const [ error, setError ] = useState('');
  // const [ artDetail, setArtDetail ] = useState({});
  // const [ favorites, setFavorites ] = useState([]);
  //const [ searchTerms, setSearchTerms ] = useState([]);

  const getIDs = async () => {
    const idPath = await 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers';
    setError('');

    try {
      const response = await fetch(idPath);
      const responseIDs = await response.json();
      setIDs(responseIDs.objectIDs);
      // console.log(ids)
    } catch (error) {
      setError(error)
    }
  }

  const getSingleArtPiece = async () => {
    const randomIndex = await getRandomIndex(ids);
    console.log(randomIndex);
    const idPath = await `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[randomIndex]}`;

    try {
      const response = await fetch(idPath);
      const artPiece = await response.json();
      setWall(wall => [...wall, artPiece]);
    } catch (error) {
      setError(error)
    }
  }


  useEffect(() => {
    getIDs();
    console.log(ids.objectIDs)
    if (!ids.objectIDs) {
      getSingleArtPiece();
    }
  }, [])

  return (
    <div className="App">
      {/* {Object.keys(ids).length && console.log(ids)} */}
      {wall.length && console.log(wall)} 
    </div>
  );
}

export default App;
