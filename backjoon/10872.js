const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fac(n) {
  if (n <= 0) return 1
  return n * fac(n - 1)
}

rl
  .on('line', function (line) {
    line = parseInt(line)

    console.log(fac(line))

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });





/* local
function fac(n) {
  console.log(n)
  if (n <= 0) return 1
  return n * fac(n - 1)
}

console.log(fac(10))
*/