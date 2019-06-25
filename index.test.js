const { mapFunction, filterFunction } = require('./index.js');

describe('creating my own array method functions', () => {
  it('map function: returns the mapped new array with the values * 5', () => {
    const array = [1, 2, 3, 4];
    const mapping = mapFunction(array, callback => {
      return callback * 5;
    });
    expect(mapping).toEqual([5, 10, 15, 20]);
  });

  it('map function: returns the mapped new array with all uppercase strings', () => {
    const array = ['testing', 'this', 'again'];
    const mapping = mapFunction(array, callback => {
      return callback.toUpperCase();
    });
    expect(mapping).toEqual(['TESTING', 'THIS', 'AGAIN']);
  });

  it('filter function: returns the filtered new array with numbers greater than 2', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, callback => {
      return callback > 2;
    });
    expect(filtering).toEqual([3, 4]);
  });

  it('filter function: returns the filtered new array with only even numbers', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, callback => {
      return callback % 2 === 0;
    });
    expect(filtering).toEqual([2, 4]);
  });

  it('filter function: returns the filtered new array of strings with letter i', () => {
    const array = ['hi', 'world', 'stuff', 'pix'];
    const filtering = filterFunction(array, callback => {
      return callback.includes('i');
    });
    expect(filtering).toEqual(['hi', 'pix']);
  });

  // it('findIndex function: returns the ')
});
