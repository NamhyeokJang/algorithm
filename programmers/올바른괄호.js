function solution(s) {
  const toArr = s.split('')
  const right = toArr.filter(value => value === '(')
  const left = toArr.filter(value => value === ')')

  if (toArr[toArr.length - 1] === '(') return false
  if (toArr[0] === ')') return false
  if (right.length !== left.length) return false

  let check = 0
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === '(') check++
    if (toArr[i] === ')') check--

    if (check < 0) return false

  }

  return true
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('()))((()')) //false
'(()(()))'