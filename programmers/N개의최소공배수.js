function solution(arr) {
  arr = arr.sort().reverse()

  return arr.reduce((a, b) => lcm(a, b))
}

function lcm(a, b) {
  return a * b / gcd(a, b)
}

function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

console.log(solution([2, 6, 8, 14]))
console.log(solution([1, 2, 3]))