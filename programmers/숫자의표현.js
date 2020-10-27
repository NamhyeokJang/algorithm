function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i++) {
    let sum = 0
    for (let j = i; j <= n; j++) {
      sum = sum + j
      if (sum === n) {
        answer++
        break
      }
      if (sum > n) {
        break
      }
    }
  }
  return answer
}

// function expressions(num) {
//   var answer = 0;

//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0 && i % 2 == 1) {
//       console.log(i)
//       answer++
//     }
//   }
//   return answer;
// }

// console.log(expressions(10000))