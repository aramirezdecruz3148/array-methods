const { mapFunction } = require('./index.js');

describe('creating my own array method functions', () => {
  it('map function: returns the mapped new array', () => {
    const array = [1, 2, 3, 4];
    const mapping = mapFunction(array, callback => {
      return callback * 5;
    });
    expect(mapping).toEqual([5, 10, 15, 20]);
  });
});
