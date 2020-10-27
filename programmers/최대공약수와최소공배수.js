function solution(n, m) {
  return [gcd(n, m), n * m / gcd(n, m)]
}

function gcd(n, m) {
  return m === 0 ? n : gcd(m, n % m)
}

console.log(solution(3, 12));
console.log(solution(2, 5));