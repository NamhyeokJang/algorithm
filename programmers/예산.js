function solution(d, budget) {
  d.sort()
  let total = 0
  let count = 0
  for (let i = 0; i < d.length; i++) {
    count++
    total += d[i]

    if (total > budget) {
      count--
      break
    }
  }
  return count
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));