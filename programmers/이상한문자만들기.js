function solution(s) {
  return s.toLowerCase().split(' ').map(word => word.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join('')).join(' ')
}

console.log(solution('try hello world'));