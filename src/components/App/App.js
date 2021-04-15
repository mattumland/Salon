import { Route } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { shuffleItems, terms } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails';
import SalonContext from '../../context/SalonContext'
import './App.scss';

const initialState = {
  searchTerms: terms,
  ids: [],
  wallDisplay: [],
  artDisplay: {},
  favorites: [],
  error:''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_IDS':
      return {...state, ids: action.ids}
    case 'UPDATE_WALL':
      return {...state, wallDisplay: [...state.wallDisplay, action.newArt]}
  default:
    return state
  }
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchTerm = 'q=tree'; //shuffleItems(state.terms) then use the first 2, these first two can be rendered as the title
  const artIdSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`)
    .then(response => response.json())
    .catch(error => setError(error.message))

  const getIDs = async () => {
    const artIDs = await artIdSearch;
    // setError('');
    const shuffledIDs  = shuffleItems(artIDs.objectIDs);
    const action = { type: 'UPDATE_IDS', ids: shuffledIDs }
    dispatch(action);
  }


  const getSingleArtPiece = async (index) => {
      const art = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      const response = await art;
      const artResponse = await response.json();
      const action = { type: 'UPDATE_WALL', newArt: artResponse }
      dispatch(action)
    }

  const getArtwork = async () => {
    const idSelection = state.ids.filter((id, index) => {
      if (index < 7) {
        return id;
      }
    })
    idSelection.forEach(id => {
      getSingleArtPiece(id);
    })
  }

  const updateError = (errorMessage) => {

  }


  useEffect(() => {
    getIDs();
  }, [])

  useEffect(() => {
    getArtwork();
  }, [state.ids])

  return (
    <SalonContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Header />
        <Route
          exact path="/"
          render={() => <Wall />} />
        <Route
          exact path='/:artPieceID'
          render={({ match }) => {
            return <ArtDetails id={match.params.artPieceID} />}}
          />
      </div>
    </SalonContext.Provider>
  );
}

export default App;
