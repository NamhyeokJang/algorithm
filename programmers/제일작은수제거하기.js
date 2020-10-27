function solution(arr) {
  return arr.length <= 1 ? [-1] : arr.filter(x => x > Math.min.apply(null, arr))
}

console.log(solution([4, 3, 2, 1]))
console.log(solution([10]));