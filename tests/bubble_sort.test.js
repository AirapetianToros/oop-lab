const Array = require('../Array');

describe('bubble sort', () => {
  test('works on default array', () => {
    const arr = new Array([1, 4, 6, 3, 1, 3, 7]);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([1, 1, 3, 3, 4, 6, 7]);
  });

  test('works on array with negative numbers', () => {
    const arr = new Array([-1, -2, 4, -5]);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([-5, -2, -1, 4]);
  });

  test('works on same numbers', () => {
    const arr = new Array([1, 1, 1, 1]);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([1, 1, 1, 1]);
  });

  test('works on empty array', () => {
    const arr = new Array();
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([]);
  });

  test('works on string array', () => {
    const arr = new Array(['b', 'a', 'c', 'd']);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual(['a', 'b', 'c', 'd']);
  });

  test('throws on mixed array', () => {
    const arr = new Array(['b', 1, 'w', 7]);
    expect(() => {
      arr.bubbleSort();
    }).toThrow("Can't sort mixed array");
  });
});
