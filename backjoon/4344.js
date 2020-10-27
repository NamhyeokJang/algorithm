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
    input.shift()
    const lines = input.map(line => {
      line = line.split(' ')
      line.shift()
      return line
    })
    lines.forEach(line => {
      const avg = line.map(x => +x).reduce((acc, cur) => acc + cur) / line.length
      const percent = (line.filter(x => +x > avg).length / line.length) * 100
      console.log(`${percent.toFixed(3)}%`)
    });
    process.exit();
  });