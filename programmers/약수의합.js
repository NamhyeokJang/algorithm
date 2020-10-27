function solution(n) {
  if (n === 0) return 0
  let answer = []
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i)
  }
  return answer.reduce((acc, cur) => acc + cur)
}

console.log(solution(12));
console.log(solution(5));