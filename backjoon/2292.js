const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = +line
    let count = 0
    let number = 1
    while (number < line) {
      count++
      number = number + count * 6
    }

    console.log(count + 1)

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });

/*
function sol(n) {
  let count = 0
  let number = 1
  while (number < n) {
    count++
    number = number + count * 6
  }
  console.log(count + 1)
}

console.log(sol(13))
*/