function solution(people, limit) {
  people = people.sort((a, b) => a - b)
  let answer = 0
  let start = 0
  let end = people.length - 1

  while (start < end) {
    const sum = people[start] + people[end]
    if (sum <= limit) {
      answer++
      start++
      end--
    } else {
      end--
      answer++
    }
  }
  if (start === end) {
    return answer + 1
  }
  return answer
}
console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 80, 50], 100))