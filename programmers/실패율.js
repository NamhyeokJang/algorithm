function solution(N, stages) {
  let stageState = []
  for (let i = 1; i <= N; i++) {
    const stage = {
      state: i,
      rate: stages.filter(x => x === i).length / stages.filter(x => x >= i).length
    }
    stageState.push(stage)
  }

  return stageState.sort((a, b) => b.rate - a.rate).map(a => a.state)
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))