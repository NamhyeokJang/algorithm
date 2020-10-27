function solution(n) {
  let result = [[1, 1], [1, 0]]
  for (let i = 1; i <= n; i++) {
    result = pow(result)
  }
  return result
}

function pow(arr) {
  const baseArr = [[1, 1], [1, 0]]
  const x = (baseArr[0][0] * arr[0][0] + baseArr[0][1] * arr[1][0]) % 1234567
  const y = (baseArr[0][0] * arr[0][1] + baseArr[0][1] * arr[1][1]) % 1234567
  const z = (baseArr[1][0] * arr[0][0] + baseArr[1][1] * arr[1][0]) % 1234567
  const k = (baseArr[1][0] * arr[0][1] + baseArr[1][1] * arr[1][1]) % 1234567

  return [[x, y], [z, k]]
}
console.log(solution(10000))

/*
[
  [1, 1],  [1, 1],
  [1, 0],  [1, 0]
]
*/