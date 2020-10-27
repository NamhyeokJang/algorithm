const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl
  .on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    const number = input[1].split('').map(x => +x).reduce((acc, cur) => acc + cur)

    console.log(number)
    process.exit();
  });