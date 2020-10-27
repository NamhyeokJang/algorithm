function solution(str1, str2) {
  const K = 65536
  str1 = genArr(str1)
  str2 = genArr(str2)

  const long = str1.length > str2.length ? str1 : str2
  const short = str1.length > str2.length ? str2 : str1

  const longLen = long.length
  const shortLen = short.length

  const inter = short.filter(x => {
    if (long.includes(x)) {
      long.splice(long.indexOf(x), 1)
      return true
    } else return false
  })
  const sum = longLen + shortLen - inter.length



  if (inter.length === 0 && sum === 0) return K

  return parseInt(inter.length / sum * K)

}

function genArr(string) {
  let result = []
  string = string.toUpperCase().replace(/[^a-zA-Z]/gi, ' ')

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== ' ' && string[i + 1] !== ' ') {
      result.push(string[i] + string[i + 1])
    }
  }

  return result.sort((a, b) => a > b)
}


console.log(solution("FRANCE", "french"))
console.log(solution("handshake", "shake hands"))
console.log(solution("aa1+aa2", "AAAA12"))
console.log(solution("E=M*C^2", "e=m*c^2"))

console.log(solution("french", "FRANCE"))
console.log(solution("shake hands", "handshake"))
console.log(solution("AAAA12", "aa1+aa2"))
console.log(solution("e=m*c^2", "E=M*C^2"))