function solution(n) {
  return n.toString().split('').map(n => +n).reduce((acc, cur) => acc + cur)
}

console.log(solution(123))
console.log(solution(987))