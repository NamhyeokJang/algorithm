const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    const words = line.trim()
    console.log(words.split(' ').filter(x => x !== '').length)
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });