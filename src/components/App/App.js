import { Route } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { shuffleItems, terms, createTerms } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails';
import SalonContext from '../../context/SalonContext'
import './App.scss';

const initialState = {
  searchTerms: terms,
  ids: [],
  wallDisplay: [],
  favorites: [],
  error:''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_IDS':
      return {...state, ids: action.ids}
    case 'UPDATE_WALL':
      return {...state, wallDisplay: [...state.wallDisplay, action.newArt]}
    case 'UPDATE_ERROR':
      return {...state, error: action.error}
  default:
    return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


    // .then(response => response.json())
    // .catch(error => setError(error.message))

  const getIDs = async () => {
    try {
      const searchTerm = 'q=tree'; //shuffleItems(state.terms) then use the first 2, these first two can be rendered as the title
      const artIDSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`)
      const response = await artIDSearch;
      const idResponse = await response.json()
      const shuffledIDs  = shuffleItems(idResponse.objectIDs);
      const action = { type: 'UPDATE_IDS', ids: shuffledIDs }
      dispatch(action);
    } catch(error) {
        const action = { type: 'UPDATE_ERROR', error: error.message}
        dispatch(action);
      }
    }

  const getSingleArtPiece = async (index) => {
    try{
      const art = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      const response = await art;
      const artResponse = await response.json();
      const action = { type: 'UPDATE_WALL', newArt: artResponse }
      dispatch(action)
    } catch(error) {
        const action = { type: 'UPDATE_ERROR', error: error.message}
        dispatch(action);
      }
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

  useEffect(() => {
    getIDs(createTerms(state.searchTerms));
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
