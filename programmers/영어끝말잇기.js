function solution(n, words) {
  let turn = 0
  for (let i = 0; i < words.length; i++) {
    if (i % n === 0) turn++
    const prev = words[i - 1] ? words[i - 1] : ''
    const now = words[i]
    if (words.slice(0, i).includes(words[i])) {
      return [i % n + 1, turn]
    }
    if (prev[prev.length - 1] !== undefined && prev[prev.length - 1] !== now[0]) {
      return [i % n + 1, turn]
    }
  }

  return [0, 0]
}


console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']))
console.log(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']))
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']))