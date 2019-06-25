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
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) {
      return i;
    } 
  }
  return -1;
});

//create .reduce() in a function
/*in the reduce function, I need to write some logic to set the accumulator to
the first index[0]*/

//create .every() in a function
const everyFunction = ((arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) {
      return true;
    }
  }
  return false;
});

module.exports = {
  mapFunction,
  filterFunction,
  findIndexFunction,
  everyFunction
};
