import { Route } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { shuffleItems, terms } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails';
import SalonContext from '../../SalonContext'
import './App.scss';

const initialState = {
    searchTerms: terms,
    ids: [],
    wallDisplay: [],
    artDisplay: {},
    favorites: []
  }

const reducer = (state, action) => {
    switch(action.type) {
      case 'UPDATE_IDS':

    default:
      return state
    }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchTerm = 'q=sunflower'; 
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
      <Route
        exact path="/"
        render={() =>
          <Wall
            className='wall-container'
            artworks={ wall } />}
      />
      <Route
        exact path='/:artPieceID'
        render={({ match }) => {
          const { artPieceID } = match.params;
          return <ArtDetails artPieceID={artPieceID} />}}
        />
    </div>
  );
}

export default App;
