/* posted */
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
    const values = input.map(x => x.split(' ').map(x => +x))
    let xs = values.map(x => x[0])
    let ys = values.map(y => y[1])
    let answerX = 0
    let answerY = 0

    for (let x of xs) {
      if (xs.filter(value => value === x).length === 1) {
        answerX = x
      }
    }
    for (let y of ys) {
      if (ys.filter(value => value === y).length === 1) {
        answerY = y
      }
    }
    console.log(answerX, answerY)
    process.exit();
  });