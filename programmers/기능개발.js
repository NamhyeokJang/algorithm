function solution(progresses, speeds) {
  const answer = []
  let lastDate = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))

  for (let i = 0; i < lastDate.length; i++) {
    const currentJob = lastDate[i]

    let j = i + 1
    let count = 1
    while (currentJob >= lastDate[j]) {
      count++
      j++
      i++
    }
    answer.push(count)
  }

  return answer
}

console.log(solution([93, 30, 55], [1, 30, 5])) // [2,1]
console.log('---');
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])) // [1,3,2]