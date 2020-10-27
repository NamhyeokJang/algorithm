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
    const checking = input.map(string => {
      let answer = []
      for (let i = 0; i < string.length; i++) {
        if (!answer.includes(string[i])) {
          answer.push(string[i])
        } else if (answer.includes(string[i]) && answer[answer.length - 1] !== string[i]) {
          return false
        }
      }
      return true
    })
    console.log(checking.filter(x => x).length)
    process.exit();
  });

// function a(string) {
//   let answer = []
//   for (let i = 0; i < string.length; i++) {
//     if (!answer.includes(string[i])) {
//       answer.push(string[i])
//     } else if (answer.includes(string[i]) && answer[answer.length - 1] !== string[i]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(a('a'))