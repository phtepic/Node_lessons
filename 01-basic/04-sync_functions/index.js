////////////////////SYNC FUNCTIONS///////////////////
function task_1() {
  console.log("foo");
}
function task_2(text) {
  console.log(text);
}
function task_3(number) {
  return ++number;
}
task_1();
task_2("Hello");
const number = task_3(1);
console.log(number);
