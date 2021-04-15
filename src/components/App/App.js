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
  favorites: [],
  error:''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_IDS':
      return {...state, ids: action.ids}
  default:
    return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [wall, setWall] = useState([]);
  // const [error, setError] = useState('');

  const searchTerm = 'q=sunflower';
  const artIdSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`)
    .then(response => response.json())
    .catch(error => setError(error.message))


  const getIDs = async () => {
    const artIDs = await artIdSearch;
    // setError('');
    const action = { type: 'UPDATE_IDS', ids: artIDs.objectIDs }
    dispatch(action);
  }


  const getSingleArtPiece = async (index) => {
    try {
      const item = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`)
      const response = await item;
      const artPiece = await response.json();
      setWall(wall => [...wall, artPiece]);
    } catch (error) {
      // setError(error)
    }
  }

  useEffect(() => {
    getIDs();
  }, [])

  useEffect(() => {
    // getIDs();

    state.ids.length && getSingleArtPiece(shuffleItems(state.ids)[0]);
    state.ids.length && getSingleArtPiece(state.ids[1]);
    state.ids.length && getSingleArtPiece(state.ids[2]);
    state.ids.length && getSingleArtPiece(state.ids[3]);
    state.ids.length && getSingleArtPiece(state.ids[4]);
    state.ids.length && getSingleArtPiece(state.ids[5]);
    state.ids.length && getSingleArtPiece(state.ids[6]);
  }, [state.ids])

  return (
    <div className="App">
      <Header />
  {/*    <Route
        exact path="/"
        render={() =>
          <Wall
            className='wall-container'
            artworks={ wall } />}
      />    */}
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
