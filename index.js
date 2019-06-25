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
    if(arr[i] === true) {
      filteredArray[i] = callback(arr[i]);
    }
  }
});

module.exports = {
  mapFunction,
  filterFunction
};
