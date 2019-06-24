const mapFunction = ((arr, callback) => {
  let mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArray[i] = callback(arr[i]);
  }
  return mappedArray;
});

module.exports = {
  mapFunction
};
