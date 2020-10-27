function solution(s) {
  let temp = []

  for (let i = 0; i < s.length; i++) {
    if (temp.length === 0 || s[i] !== temp[temp.length - 1]) {
      temp.push(s[i])
    } else {
      temp.pop()
    }

  }
  return temp.length === 0 ? 1 : 0
}

console.log(solution('baabaa'))
console.log(solution('baaabaa'))
console.log(solution('cdcd'))