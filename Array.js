module.exports = class Array {
  constructor(arr = []) {
    this.arr = arr;
  }

  bubbleSort = () => {
    const typeOfArray = typeof this.arr[0];
    for (let i = 1; i < this.arr.length; i++) {
      if (typeof this.arr[i] !== typeOfArray) {
        throw "Can't sort mixed array";
      }
    }

    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }
  };

  getArray = () => {
    return this.arr;
  };
};
