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
    const data = input.map(x => x.split(' '))
    data.forEach(x => {
      let answer = ''
      const num = x[0]
      const str = x[1].split('')
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < num; j++) {
          answer = answer + str[i]
        }
      }
      console.log(answer)
    })
    process.exit();
  });