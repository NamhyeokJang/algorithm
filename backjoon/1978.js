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
    input = input[1].split(' ').map(x => +x)
    const isPrime = input.map(x => {
      if (x === 1) return false
      for (let i = 2; i < x; i++) {
        if (x % i === 0) {
          return false
        }
      }
      return true
    })
    console.log(isPrime.filter(x => x).length)
    process.exit();
  });



// function sol(n) {
//   if (n === 1) return false
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// console.log(sol(1))