const salonReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_IDS':
      return {...state, ids: action.ids}
    case 'UPDATE_WALL':
      return {...state, wallDisplay: [...state.wallDisplay, action.newArt]}
    case 'UPDATE_ERROR':
      return {...state, error: action.error}
    case 'UPDATE_FAVORITE':
      return {...state, favorites: action.newFavorites}
    case 'UPDATE_TERMS':
      return {...state, searchTerms: action.terms}
    case 'CLEAR_WALL':
      return {...state, wallDisplay: action.clearDisplay}
  default:
    return state
  }
}

export default salonReducer;
