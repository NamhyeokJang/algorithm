function solution(n) {
    return String(n).split('').reverse().map(a => parseInt(a))
}

console.log(solution(12345))