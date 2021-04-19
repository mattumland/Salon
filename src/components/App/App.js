import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from 'react';
import { shuffleItems, terms, createTerms } from '../../utilities.js';
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails';
import FavoriteList from '../FavoriteList/FavoriteList';
import SalonContext from '../../context/SalonContext';
import salonReducer from '../../context/salonReducer';
import './App.scss';

const initialState = {
  searchTerms: shuffleItems(terms),
  ids: [],
  wallDisplay: [],
  favorites: [],
  error:''
}

const App = () => {
  const [state, dispatch] = useReducer(salonReducer, initialState);

  const getIDs = async (searchTerms) => {
    try {
      const artIDSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerms}`)
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
    // shuffleItems(state.searchTerms)
    getIDs(createTerms(state.searchTerms));
  }, [])

  useEffect(() => {
    getArtwork();
  }, [state.ids])

  return (
    <SalonContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Header />

        {state.error && (<p className='error' > {state.error} </p>)}

        <Switch>
          <Route
            exact path="/"
            render={() => <Wall />}
          />
          <Route
          exact path="/favorites"
          render={() => <FavoriteList />}
          />
          <Route
            exact path="/:artPieceID"
            render={({ match }) => {
              return <ArtDetails id={match.params.artPieceID} />}}
          />
        </Switch>
      </div>
    </SalonContext.Provider>
  );
}

export default App;
