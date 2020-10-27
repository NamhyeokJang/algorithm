// function sol(n) {
//   let prefix = '666'
// if (n <= 1) {
//   console.log(prefix)
// } else {
//   console.log((n - 1) + prefix)
// }
// }

// console.log(sol(2))

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = +line
    let prefix = '666'
    if (line <= 1) {
      console.log(prefix)
    } else {
      console.log((line - 1) + prefix)
    }

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });