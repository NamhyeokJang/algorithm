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
    input.forEach(str => {
      let total = 0
      let score = 1
      for (let i = 0; i < str.length; i++) {
        if (str[i] === 'X') {
          score = 1
        } else {
          total += score
          score++
        }
      }
      console.log(total)
    })


    process.exit();
  });