export const getRandomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
}

export const shuffleItems = array => {
  // const idList = arr.reduce((acc, index) => {
  //   console.log(acc)
  //   // if (!acc.includes(index)) {
  //   acc.push(Math.floor(Math.random() * arr.length))
  //   // }
  // }, [])
  // return idList;

  // using Array sort and Math.random

  return array.sort(() => 0.5 - Math.random());

}


