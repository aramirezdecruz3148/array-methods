const { mapFunction, filterFunction, findIndexFunction, everyFunction } = require('./index.js');

describe('mapped function', () => {
  it('returns the mapped new array with the values * 5', () => {
    const array = [1, 2, 3, 4];
    const mapping = mapFunction(array, callback => {
      return callback * 5;
    });
    expect(mapping).toEqual([5, 10, 15, 20]);
  });

  it('returns the mapped new array with all uppercase strings', () => {
    const array = ['testing', 'this', 'again'];
    const mapping = mapFunction(array, callback => {
      return callback.toUpperCase();
    });
    expect(mapping).toEqual(['TESTING', 'THIS', 'AGAIN']);
  });
});

describe('filter function', () => {
  it('returns the filtered new array with numbers greater than 2', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, callback => {
      return callback > 2;
    });
    expect(filtering).toEqual([3, 4]);
  });

  it('returns the filtered new array with only even numbers', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, callback => {
      return callback % 2 === 0;
    });
    expect(filtering).toEqual([2, 4]);
  });

  it('returns the filtered new array of strings with letter i', () => {
    const array = ['hi', 'world', 'stuff', 'pix'];
    const filtering = filterFunction(array, callback => {
      return callback.includes('i');
    });
    expect(filtering).toEqual(['hi', 'pix']);
  });
});

describe('indexOf function', () => {
  it('the function returns an index of the array that includes letter d', () => {
    const array = ['dude', 'hey', 'dog'];
    const indexOf = findIndexFunction(array, callback => {
      return callback.includes('d');
    });
    expect(indexOf).toEqual(0);
  });

  it('the function returns the index of first item in array that if true', () => {
    const array = [1, 2, 3];
    const indexOf = findIndexFunction(array, callback => {
      return callback % 2 === 0;
    });
    expect(indexOf).toEqual(1);
  });

  it('the function returns -1', () => {
    const array = [1, 7, 3];
    const indexOf = findIndexFunction(array, callback => {
      return callback % 2 === 0;
    });
    expect(indexOf).toEqual(-1);
  });
});

describe('every function', () => {
  it('the function returns true', () => {
    const array = [4, 2, 8];
    const every = everyFunction(array, callback => {
      return callback % 2 === 0;
    });
    expect(every).toBe(true);
  });
});
