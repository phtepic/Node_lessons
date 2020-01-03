const delay = require("delay");

async function task_1() {
  console.log("Task 1");
}
async function task_2() {
  console.log("Task 2");
}
function task_3() {
  console.log("Task 3");
}
async function do_work() {
  await task_1();
  await delay(1000);
  await task_2();
  await delay(1000);
  await task_3();
  await delay(1000);
}
do_work();
