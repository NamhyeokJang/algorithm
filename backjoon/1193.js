/* *** */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    let n = +line
    let count = 0
    while (n > 0) {
      count++
      n = n - count
    }
    if (count % 2 === 0) {
      console.log(`${count + n}/${1 - n}`)
    } else {
      console.log(`${1 - n}/${count + n}`)
    }

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });


/* local
function sol(n) {
  let count = 0
  while (n > 0) {
    count++
    n = n - count
    console.log(n)
  }
  if (count % 2 === 0) {
    console.log(`${count + n}/${1 - n}`)
  } else {
    console.log(`${1 - n}/${count + n}`)
  }
}
*/