const timer_interval = 1000;
const timeout = 5000;

function on_stop_timer() {
  console.log("Timer stopped...");
  clearInterval(timer);
}
function on_timer() {
  console.log("foo");
}
function run_timer() {
  console.log("Timer started...");
  timer = setInterval(on_timer, timer_interval);
  setTimeout(on_stop_timer, timeout);
}
run_timer();
