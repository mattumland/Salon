import './App.css';
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [ wall, setWall ] = useState([]);
  const [ ids, setIDs ] = useState({});
  const [ error, setError ] = useState('');
  // const [ artDetail, setArtDetail ] = useState({});
  // const [ favorites, setFavorites ] = useState([]);
  //const [ searchTerms, setSearchTerms ] = useState([]);

  const getIDs = async () => {
    const idPath = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers';
    setError('');

    try {
      const response = await fetch(idPath);
      const responseIDs = await response.json();
      setIDs(responseIDs);
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getIDs();
  }, [])

  return (
    <div className="App">
      {console.log(ids)}
    </div>
  );
}

export default App;
