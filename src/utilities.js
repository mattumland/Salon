export const getRandomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
}

export const shuffleItems = (array) => {
  return array.sort(() => 0.5 - Math.random());
}

export const addToFavList = (artwork, favList) => {
  const newFavList = favList;
  newFavList.push(artwork);
  const action = { type: 'UPDATE_FAVORITE', newFavorites: newFavList}
}

export const removeFromFavList = (artwork, favList) => {
  const newFavList = favList;
  const artIndex = newFavList.indexOf(artwork)
  newFavList.splice(artIndex, 1);
  const action = { type: 'UPDATE_FAVORITE', newFavorites: newFavList}
}

export const createTerms = (array) => {
  const shuffledTerms = shuffleItems(array);
  return `q=${shuffledTerms[0]}&q=${shuffledTerms[1]}`;
}

export const terms = [
  'Pain',
  'Sun',
  'Moon',
  'Dog',
  'Cat',
  'Tree',
  'Life',
  'Death',
  'Justice',
  'Injustice',
  'Loss',
  'Gift',
  'Truth',
  'Lie',
  'Child',
  'Parent',
  'Food',
  'Grain',
  'Stone',
  'Earth',
  'Sky',
  'Fantasy',
  'Science',
  'Anger',
  'Peace',
  'Joy',
  'Hurt',
  'Sorrow',
  'Grow',
  'Walk',
  // '1100',
  // '1200',
  // '1300',
  // '1400',
  // '1500',
  // '1600',
  // '1700',
  // '1800',
  // '1900',
  // '2000'
]
