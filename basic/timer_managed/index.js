function on_stop_timer() {
  console.log("Timer stopped...");
  clearInterval(timer);
}
function on_timer() {
  console.log("foo");
}
function run_timer() {
  timer = setInterval(on_timer, 1000);
  setTimeout(on_stop_timer, 5000);
}
run_timer();
