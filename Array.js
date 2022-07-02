const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

module.exports = class Array {
  constructor(arr = []) {
    this.arr = arr;
  }

  fillArray = (length) => {
    for (let i = 0; i < length; i++) {
      this.arr.append(between(-100, 101));
    }
  };

  bubbleSort = () => {
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
