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
    input.forEach(x => {
      const params = x.split(' ').map(x => +x)
      const H = params.shift()
      params.shift()
      const N = params.shift()

      let floor = N % H
      let room = parseInt(N / H) + 1
      if (N % H === 0) {
        floor = H
        room = N / H
      }
      console.log(floor * 100 + room)
    })
    process.exit();
  });


// const input = ['1', '10 10 1']
// const T = parseInt(input.shift())

// for (let i = 0; i < T; i++) {
//   const HWN = input[i].split(' ')
//   let H = parseInt(HWN.shift())
//   HWN.shift()
//   let N = parseInt(HWN.shift())
//   let roomCnt = 1

//   while (N > H) {
//     roomCnt++
//     N = N - H
//   }
//   if (roomCnt < 10) {
//     console.log(`${N}0${roomCnt}`)
//   } else {
//     console.log(`${N}${roomCnt}`)
//   }

// }