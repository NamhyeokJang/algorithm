function solution(priorities, location) {
  let count = 0

  while (priorities.length > 0) {
    if (priorities.filter(v => v > priorities[0]).length > 0) {
      priorities.push(priorities[0])
      priorities.shift()
      location--
      if (location === 0) return priorities.length - 1
      count++
    } else {
      priorities.shift()
      location += priorities.length - 1
    }
  }
}

console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))