/* 한줄 입력 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = line
      .replace(/c=/gi, 'a')
      .replace(/c-/gi, 'a')
      .replace(/dz=/gi, 'a')
      .replace(/d-/gi, 'a')
      .replace(/lj/gi, 'a')
      .replace(/nj/gi, 'a')
      .replace(/s=/gi, 'a')
      .replace(/z=/gi, 'a')

    console.log(line)
    rl.close();
  })
  .on("close", function () {
    process.exit();
  });


/*local
function sol(line) {
  line = line
    .replace('c=', 'a')
    .replace('c-', 'a')
    .replace('dz=', 'a')
    .replace('d-', 'a')
    .replace('lj', 'a')
    .replace('nj', 'a')
    .replace('s=', 'a')
    .replace('z=', 'a')

  console.log(line.length)
}

sol('ljes=njak')
sol('ddz=z=')
*/