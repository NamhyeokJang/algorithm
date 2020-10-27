const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibo(n) {
  if (n <= 1) return n
  return fibo(n - 2) + fibo(n - 1)
}

rl
  .on('line', function (line) {
    line = +line

    console.log(fibo(line))

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });









/*
function fibo(n) {
  if (n <= 1) return n
  return fibo(n - 2) + fibo(n - 1)
}

console.log(fibo(10))
*/