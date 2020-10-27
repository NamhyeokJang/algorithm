const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    line = line.split(' ').map(x => +x)
    const day = line.shift()
    const night = line.shift()
    const height = line.shift()

    if ((height - day) % (day - night) === 0) {
      console.log(parseInt((height - day) / (day - night)) + 1)
    } else {
      console.log(parseInt((height - day) / (day - night)) + 2)
    }

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });

/*
function sol(line) {
  line = line.split(' ').map(x => +x)
  const day = line.shift()
  const night = line.shift()
  const height = line.shift()

  if ((height - day) % (day - night) !== 0) {
    console.log((height - day) / (day - night) + 2)
  } else {
    console.log((height - day) / (day - night) + 1)
  }
}

console.log(sol('2 1 5'))
*/