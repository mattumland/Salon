export const artIDSearch = fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&${searchTerm}`)
  .then(response => response.json())
  .catch(error => setError(error.message))
