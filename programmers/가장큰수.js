function solution(numbers) {
  const answer = numbers.map(num => String(num)).sort((a, b) => (b + a) - (a + b)).join('')
  return answer / 1 ? answer : '0'
}


console.log(solution([6, 10, 2]))
console.log(solution([0, 0, 0, 0]))
console.log(solution([3, 30, 34, 5, 9]))