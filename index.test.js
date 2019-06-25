const { mapFunction, filterFunction, findIndexFunction, everyFunction } = require('./index.js');

describe('mapped function', () => {
  it('returns the mapped new array with the values * 5', () => {
    const array = [1, 2, 3, 4];
    const mapping = mapFunction(array, (item) => {
      return item * 5;
    });
    expect(mapping).toEqual([5, 10, 15, 20]);
  });

  it('returns the mapped new array with all uppercase strings', () => {
    const array = ['testing', 'this', 'again'];
    const mapping = mapFunction(array, (item) => {
      return item.toUpperCase();
    });
    expect(mapping).toEqual(['TESTING', 'THIS', 'AGAIN']);
  });
});

describe('filter function', () => {
  it('returns the filtered new array with numbers greater than 2', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, (item) => {
      return item > 2;
    });
    expect(filtering).toEqual([3, 4]);
  });

  it('returns the filtered new array with only even numbers', () => {
    const array = [1, 2, 3, 4];
    const filtering = filterFunction(array, (item) => {
      return item % 2 === 0;
    });
    expect(filtering).toEqual([2, 4]);
  });

  it('returns the filtered new array of strings with letter i', () => {
    const array = ['hi', 'world', 'stuff', 'pix'];
    const filtering = filterFunction(array, (item) => {
      return item.includes('i');
    });
    expect(filtering).toEqual(['hi', 'pix']);
  });
});

describe('indexOf function', () => {
  it('the function returns the first index of the array that includes letter d', () => {
    const array = ['dude', 'hey', 'dog'];
    const indexOf = findIndexFunction(array, (item) => {
      return item.includes('d');
    });
    expect(indexOf).toEqual(0);
  });

  it('the function returns -1', () => {
    const array = ['sup', 'hey', 'coolio'];
    const indexOf = findIndexFunction(array, (item) => {
      return item.includes('d');
    });
    expect(indexOf).toEqual(-1);
  });

  it('the function returns index[1] of array', () => {
    const array = [1, 2, 3];
    const indexOf = findIndexFunction(array, (item) => {
      return item % 2 === 0;
    });
    expect(indexOf).toEqual(1);
  });

  it('the function returns -1', () => {
    const array = [1, 7, 3];
    const indexOf = findIndexFunction(array, (item) => {
      return item % 2 === 0;
    });
    expect(indexOf).toEqual(-1);
  });
});

describe('every function', () => {
  it('the function returns true', () => {
    const array = [4, 2, 8];
    const every = everyFunction(array, (item) => {
      return item % 2 === 0;
    });
    expect(every).toBe(true);
  });

  it('the function returns false', () => {
    const array = [7, 5, 9];
    const every = everyFunction(array, (item) => {
      return item % 2 === 0;
    });
    expect(every).toBe(false);
  });

  it('the function returns true', () => {
    const array = ['sure', 'sublime', 'super'];
    const every = everyFunction(array, (item) => {
      return item.includes('s');
    });
    expect(every).toBe(true);
  });

  it('the function returns false', () => {
    const array = ['sure', 'fine', 'super'];
    const every = everyFunction(array, (item) => {
      return item.includes('q');
    });
    expect(every).toBe(false);
  });
});
