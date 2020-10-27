function solution(s) {
  let answer = []
  const toArr = s.split('},{').map(value => value.replace(/{|}/gi, '').split(',').map(v => v / 1)).sort((a, b) => a.length - b.length)

  for (let arr of toArr) {
    for (let el of arr) {
      if (!answer.includes(el)) answer.push(el)
    }
  }
  return answer
}


console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
console.log(solution("{{20,111},{111}}"))
console.log(solution("{{123}}"))
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))