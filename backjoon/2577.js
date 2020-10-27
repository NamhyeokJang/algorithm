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
    const multi = input.map(v => +v).reduce((acc, cur) => acc * cur).toString().split('')
    for (let i = 0; i < 10; i++) {
      console.log(multi.filter(x => +x === i).length)
    }
    process.exit();
  });