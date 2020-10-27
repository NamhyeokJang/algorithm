const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    let num = +line
    let count = 0
    while (line !== 0) {
      if (num % 5 === 0) {
        console.log(num / 5 + count)
        break;
      } else if (num <= 0) {
        console.log(-1)
        break;
      }
      num = num - 3
      count++
    }
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });