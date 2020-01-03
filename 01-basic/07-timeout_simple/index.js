const timeout = 5000;
function on_timeout() {
  console.log("Timeout stopped after " + timeout + " seconds...");
}

function run_timeout() {
  console.log("Timeout started for " + timeout + " ms");
  setTimeout(on_timeout, timeout);
}

run_timeout();
