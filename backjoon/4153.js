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
    input.pop()
    input.forEach(line => {
      line = line.split(' ').map(x => +x)
      const x = line[0] * line[0]
      const y = line[1] * line[1]
      const z = line[2] * line[2]
      if (x + y === z) {
        console.log('right')
      } else if (y + z === x) {
        console.log('right')
      } else if (x + z === y) {
        console.log('right')
      } else {
        console.log('wrong')
      }
    })
    process.exit();
  });