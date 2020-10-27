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
    input.forEach(x => {
      const max = +x * 2
      let arr = Array(max + 1).fill(true).fill(false, 0, 2)
      for (let i = 2; i * i <= max; i++) {
        if (arr[i]) {
          for (let j = i * i; j <= max; j += i) {
            arr[j] = false
          }
        }
      }
      console.log(arr.slice(+x + 1).filter(x => x).length)
    })
    process.exit();
  });