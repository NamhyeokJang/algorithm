const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    const input = line.split(' ').map(x => +x)

    if (input[2] <= input[1]) {
      console.log(-1)
    } else {
      console.log(Math.floor(input[0] / (input[2] - input[1]) + 1))
    }
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });