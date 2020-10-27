function solution(citations) {
  const sorted = citations.sort((a, b) => b - a)
  let index = 1

  while (index <= sorted[index - 1]) {
    index++
  }
  return index - 1
}

console.log(solution([3, 0, 6, 1, 5])); //3
console.log('====');
console.log(solution([25, 8, 5, 3, 3])); //3 
console.log('====');
console.log(solution([10, 8, 5, 4, 3])) //4
console.log('====');
console.log(solution([0, 1, 3, 5, 5, 5, 5, 5, 5, 6])) //5
console.log('====');
console.log(solution([5, 5, 5, 5])) //5