const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = +line
    for (let i = 1; i <= line; i++) {
      const num = i.toString().split('').map(x => +x).reduce((acc, cur) => acc + cur)
      if (num + i === line) {
        console.log(i)
        return
      }
    }
    console.log(0)
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });




// function solution(n) {
//   for (let i = 1; i <= n; i++) {
//     const num = i.toString().split('').map(x => +x).reduce((acc, cur) => acc + cur)
//     if (num + i === n) {
//       console.log(i)
//       return
//     }
//   }
//   return 0
// }

// console.log(solution(216))