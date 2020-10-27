const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    let answer = []
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
      answer.push(line.indexOf(String.fromCharCode(i)))
    }
    console.log(answer.join(' '))
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });
