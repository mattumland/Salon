const getAllIDs = async (term) => {
  const artURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${term}`;
  const response = await fetch(artURL);
  const artIDs = await response.json();
  return artIDs.objectIDs;
}

const fetchArtObject = async (index) => {
  const singlePieceURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${index}`
  const response = await fetch(singlePieceURL);
  const artPiece = await response.json();
  return artPiece;
}

export { getAllIDs, fetchArtObject };