let timeout = 5000;
function on_timeout() {
  console.log("Elapsed " + timeout + " seconds...");
}

function run_timeout() {
  console.log("Timeout started for " + 5000 + " ms");
  setTimeout(on_timeout, timeout);
}

run_timeout();
