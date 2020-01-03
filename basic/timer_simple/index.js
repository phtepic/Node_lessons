function on_timer() {
  console.log("foo");
}

function run_timer() {
  setInterval(on_timer, 1000);
}

run_timer();
