const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function recur(k, n) {
  if (n === 0) {
    return 0
  } else if (k === 0) {
    return n
  }
  else {
    return recur(k, n - 1) + recur(k - 1, n)
  }
}

rl
  .on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    input = input.map(x => +x)
    const loop = input.shift()
    for (let i = 0; i < loop; i++) {
      const k = input.shift()
      const n = input.shift()

      console.log(recur(k, n))


    }
    process.exit();
  });
