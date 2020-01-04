const timer_interval = 1000;
function on_timer() {
  console.log("foo");
}

function run_timer() {
  console.log("Timer started...");
  setInterval(on_timer, timer_interval);
}

run_timer();
