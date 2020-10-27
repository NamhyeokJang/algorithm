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
    const max = input[0].split(' ')[1]
    const cards = input[1].split(' ').map(x => +x)
    let answer = 0
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          if (cards[i] + cards[j] + cards[k] <= +max) {
            if (answer < cards[i] + cards[j] + cards[k]) {
              answer = cards[i] + cards[j] + cards[k]
            }
          }
        }
      }
    }
    console.log(answer)

    process.exit();
  });


/* local */
// function solution(cards, max) {
//   let cardSet = []

//   for (let i = 0; i < cards.length; i++) {
//     const firstSet = cards.filter(x => x !== cards[i])
//     for (let j = 0; j < firstSet.length; j++) {
//       const secondSet = firstSet.filter(x => x !== firstSet[j])
//       for (let k = 0; k < secondSet.length; k++) {
//         if (cards[i] + firstSet[j] + secondSet[k] <= max) {
//           cardSet.push([cards[i], firstSet[j], secondSet[k]])
//         }
//       }
//     }
//   }
//   return Math.max.apply(null, cardSet.map(x => x.reduce((acc, cur) => acc + cur)))
// }


// console.log(solution([5, 6, 7, 8, 9], 21))  => 21
// console.log(solution([93, 181, 245, 214, 315, 36, 185, 138, 216, 295], 500)) => 497