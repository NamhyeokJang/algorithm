function solution(brown, yellow) {
  const spec = brown + yellow
  let div = []
  for (let i = 3; i <= spec; i++) {
    if (spec % i === 0) div.push(i)
  }

  for (let el of div) {
    const x = el - 2
    const y = spec / el - 2

    if (x * y === yellow) return [el, spec / el].sort((a, b) => b - a)
  }
}

console.log(solution(10, 2))
console.log(solution(8, 1))
console.log(solution(24, 24))