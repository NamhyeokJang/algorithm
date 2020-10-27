function solution(p) {
  const toArr = p.split('')
  let answer = []
  let right = 0
  let left = 0


  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === '(') right++
    else left++

    if (right === left) {
      for (let j = 0; j < i; j++) {
        answer.push(toArr[j])
      }
    }
  }

  return answer
}


console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));