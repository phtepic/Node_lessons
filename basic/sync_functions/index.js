////////////////////SYNC FUNCTIONS///////////////////
function f1() {
  console.log("foo");
}
function f2(text) {
  console.log(text);
}
function f3(number) {
  return ++number;
}

f1();
f2("Hello");
let number = f3(1);
console.log(number);
