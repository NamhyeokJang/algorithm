
// function solution(n) {
//     const answer = [2]

//     for (let i = 2; i <= n; i++) {
//         let check = 0
//         for (let j = 0; j < answer.length; j++) {
//             if (i % answer[j] === 0) {
//                 check++
//                 break
//             }
//         }
//         if (!check) answer.push(i)
//     }
//     return answer.length
// }

let solution = (n) => {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);
  console.log('arr', arr)
  for (let i = 2; i * i <= n; i++) {
    console.log(i)
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        console.log("j, i", j, i)
        arr[j] = false;
      }
    }
  }

  return arr
}



solution(20)