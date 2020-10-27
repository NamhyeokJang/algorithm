function solution(numbers) {
  numbers = numbers.split('')

  for (let i = 0; i < numbers.length; i++) {
    permu(numbers, i + 1)

  }
}

function permu(arr, len) {
  console.log(arr, len)
}

console.log(solution('17'));
console.log(solution('011'));
console.log(solution('1234'));