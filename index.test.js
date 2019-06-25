const { mapFunction, filterFunction } = require('./index.js');

describe('creating my own array method functions', () => {
  it('map function: returns the mapped new array', () => {
    const array = [1, 2, 3, 4];
    const mapping = mapFunction(array, callback => {
      return callback * 5;
    });
    expect(mapping).toEqual([5, 10, 15, 20]);
  });

  it('filter function: returns the filtered new array', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, callback => {
      return callback > 2;
    });
    expect(filtering).toEqual([3, 4]);
  });

  // it('findIndex function: returns the ')
});
