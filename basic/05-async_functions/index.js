////////////////////ASYNC FUNCTIONS///////////////////
async function f1() {
  console.log("foo");
}
async function f2(text) {
  console.log(text);
}
async function f3(number) {
  return ++number;
}
async function async_functions() {
  await f1();
  await f2("Hello");
  const number = await f3(1);
  console.log(number);
}
async_functions();
