const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl
  .on('line', function (line) {
    const upperCase = line.toUpperCase()
    let objects = {}
    let maxChar = ''
    let check = 0

    for (let i = 0; i < line.length; i++) {
      objects[upperCase[i]] = objects[upperCase[i]] ? objects[upperCase[i]] + 1 : 1
    }
    const max = Math.max.apply(null, Object.values(objects))
    for (key in objects) {
      if (objects[key] === max) {
        maxChar = key
        check++
      }
      if (check > 1) {
        console.log('?')
        return
      }
    }
    console.log(maxChar)

    rl.close();
  })
  .on("close", function () {
    process.exit();
  });
/* local
function solution(string) {
  const upperCase = string.toUpperCase()
  let objects = {}
  let maxChar = ''
  let check = 0

  for (let i = 0; i < string.length; i++) {
    objects[upperCase[i]] = objects[upperCase[i]] ? objects[upperCase[i]] + 1 : 1
  }
  const max = Math.max.apply(null, Object.values(objects))
  for (key in objects) {
    if (objects[key] === max) {
      maxChar = key
      check++
    }
    if (check > 1) {
      console.log('?')
      break
    }
  }
  console.log(maxChar)
}

console.log(solution('Mississipi'))
console.log(solution('zZa'))
*/