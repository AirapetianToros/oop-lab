const Array = require("../Array");

describe("bubble sort", () => {
  test("works on default array", () => {
    const arr = new Array([1, 4, 6, 3, 1, 3, 7]);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([1, 1, 3, 3, 4, 6, 7]);
  });

  test("works on empty array", () => {
    const arr = new Array();
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual([]);
  });

  test("works on string array", () => {
    const arr = new Array(["b", "a", "c", "d"]);
    arr.bubbleSort();

    expect(arr.getArray()).toStrictEqual(["a", "b", "c", "d"]);
  });
});
