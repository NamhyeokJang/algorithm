function solution(w, h) {
  return w * h - (w + h - gcd(w, h))
}

function gcd(a, b) {
  return (a % b) === 0 ? b : gcd(b, a % b)
}

console.log(solution(8, 12))