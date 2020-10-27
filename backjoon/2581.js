const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

function isPrime(n) {
  if (n <= 1) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

rl
  .on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    const x = input.shift()
    const y = input.shift()
    let arr = []
    for (let i = +x; i <= +y; i++) {
      arr.push(i)
    }
    const primes = arr.filter(x => isPrime(x))
    if (primes.length === 0) {
      console.log(-1)
    } else {
      console.log(primes.reduce((acc, cur) => acc + cur))
      console.log(primes[0])
    }

    process.exit();
  });
