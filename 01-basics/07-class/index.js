const Point4D = require("./Point4D");

// Usage:
let p4 = new Point4D(1, 1, 1, 20);
p4.print();
p4.x = 2;
p4.z = 3;

console.log("[" + p4.x + ", " + p4.y + ", " + p4.z + ", " + p4.t + "]");
