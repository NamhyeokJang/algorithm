function solution(s) {
  s = s.toLowerCase().split('')

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && isNaN(s[i] / 1)) {
      s[i] = s[i].toUpperCase()
    }

    if (isNaN(s[i] / 1) && s[i - 1] === ' ') {
      s[i] = s[i].toUpperCase()
    }

  }
  return s.join('')
}


console.log(solution('3people unFollowed me'))
console.log(solution('for the last week'))