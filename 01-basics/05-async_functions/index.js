////////////////////ASYNC FUNCTIONS///////////////////
async function task_1() {
  console.log("foo");
}
async function task_2(text) {
  console.log(text);
}
async function task_3(number) {
  return ++number;
}
async function async_functions() {
  await task_1();
  await task_2("Hello");
  const number = await task_3(1);
  console.log(number);
}
async_functions();
