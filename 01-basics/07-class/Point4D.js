"use strict";
module.exports = class Point4D {
  constructor(x, y, z, t) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
  }
  print() {
    console.log(
      "[" + this.x + ", " + this.y + ", " + this.z + ", " + this.t + "]"
    );
  }
};
