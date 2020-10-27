const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    const numbers = line.split(' ')
    const reverseNum = numbers.map(x => x.split('').reverse().join('')).map(x => +x).sort()

    console.log(reverseNum[1])

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });
