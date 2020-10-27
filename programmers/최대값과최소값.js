function solution(s) {
  s = s.split(' ').map(x => +x)
  const max = Math.max.apply(null, s)
  const min = Math.min.apply(null, s)

  return [min, max].join(' ')
}

console.log(solution('1 2 3 4'))
console.log(solution('-1 -2 -3 -4'))
console.log(solution('-1 -1'))