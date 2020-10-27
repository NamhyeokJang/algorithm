const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = line.split(' ').map(x => +x)
    console.log(Math.min.apply(null, [line[0], line[1], line[3] - line[1], line[2] - line[0]]))

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });



/* local
function sol(x, y, w, h) {
  return Math.min.apply(null, [x, y, h - y, w - y])
}

console.log(sol(6, 2, 10, 3))
*/