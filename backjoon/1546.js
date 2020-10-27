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
    const num = input[0]
    const scores = input[1].split(' ').map(x => +x)
    const total = scores.reduce((acc, cur) => acc + cur)
    const max = Math.max.apply(null, scores)
    console.log(100 * (total / scores.length) / max)
    process.exit();
  });