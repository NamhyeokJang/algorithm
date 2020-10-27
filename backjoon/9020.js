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
    input.shift()
    input.forEach(x => {
      x = +x
      let primes = []
      let golds = []
      let arr = Array(x + 1).fill(true).fill(false, 0, 2)
      for (let i = 2; i * i <= x; i++) {
        if (arr[i]) {
          for (let j = i * i; j <= x; j += i) {
            arr[j] = false
          }
        }
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          primes.push(i)
        }
      }
      for (prime of primes) {
        if (prime > x - prime) break
        if (primes.includes(x - prime)) {
          golds.push([prime, x - prime])
        }
      }
      const min = golds.map(el => el[1] - el[0])
      const minIndex = min.indexOf(Math.min.apply(null, golds.map(el => el[1] - el[0])))
      console.log(golds[minIndex][0], golds[minIndex][1])
    })
    process.exit();
  });