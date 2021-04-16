const salonReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_IDS':
      return {...state, ids: action.ids}
    case 'UPDATE_WALL':
      return {...state, wallDisplay: [...state.wallDisplay, action.newArt]}
    case 'UPDATE_ERROR':
      return {...state, error: action.error}
    case 'ADD_FAVORITE':
      return {...state, favorites: [...state.favorites, action.favorite]}
  default:
    return state
  }
}

export default salonReducer;
