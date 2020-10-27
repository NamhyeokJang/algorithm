const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = line
      .replace(/[A-C]/gi, 2)
      .replace(/[D-F]/gi, 3)
      .replace(/[G-I]/gi, 4)
      .replace(/[J-L]/gi, 5)
      .replace(/[M-O]/gi, 6)
      .replace(/[P-S]/gi, 7)
      .replace(/[T-V]/gi, 8)
      .replace(/[W-Z]/gi, 9)
      .split('').map(x => +x + 1).reduce((acc, cur) => acc + cur)

    console.log(line)

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });

/* local
function sol(line) {
  line = line
    .replace(/[A-C]/gi, 2)
    .replace(/[D-F]/gi, 3)
    .replace(/[G-I]/gi, 4)
    .replace(/[J-L]/gi, 5)
    .replace(/[M-O]/gi, 6)
    .replace(/[P-S]/gi, 7)
    .replace(/[T-V]/gi, 8)
    .replace(/[W-Z]/gi, 9)
    .split('').map(x => +x + 1).reduce((acc, cur) => acc + cur)

  console.log(line)
}

console.log(sol('UNUCIC'))
*/