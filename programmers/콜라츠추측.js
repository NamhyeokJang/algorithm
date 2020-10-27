function solution(num) {
  let cnt = 0

  while (num !== 1) {
    cnt++
    if (num % 2 === 0) {
      num = num / 2
    } else (
      num = num * 3 + 1
    )
    if (cnt === 500) {
      return -1
    }
  }
  return cnt
}


console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))