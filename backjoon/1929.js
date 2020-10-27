const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = line.split(' ').map(x => +x)
    const max = line[1]
    let arr = Array(max + 1).fill(true).fill(false, 0, 2)
    for (let i = 2; i * i <= max; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= max; j += i) {
          arr[j] = false;
        }
      }
    }
    for (let i = line[0]; i <= max; i++) {
      if (arr[i]) console.log(i)
    }
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });
