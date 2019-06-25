//create .map() in a function
const mapFunction = ((arr, callback) => {
  let mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArray[i] = callback(arr[i]);
  }
  return mappedArray;
});

//create .filter() in a function
const filterFunction = ((arr, callback) => {
  let filteredArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) {
      filteredArray[filteredArray.length] = arr[i];
    }
  }
  return filteredArray;
});

//create .findIndex() in a function
const findIndexFunction = ((arr, callback) => {
  return arr[1];
});

/*in the findIndex function: I might need to use break in order to stop it
from going through all the array*/

/*in the reduce function, I need to write some logic to set the accumulator to
the first index[0] or the initial value*/

module.exports = {
  mapFunction,
  filterFunction,
  findIndexFunction
};
