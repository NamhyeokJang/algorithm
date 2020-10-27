function solution(nums) {
  let numbers = []
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let number = []
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        number = [nums[i], nums[j], nums[k]]
        numbers.push(number)
      }
    }
  }
  const sumOfNum = numbers.map(arr => arr.reduce((acc, cur) => acc + cur))
  const max = Math.max.apply(null, sumOfNum)
  const initArr = Array(max + 1).fill(true).fill(false, 0, 2)
  for (let i = 2; i * i <= max; i++) {
    if (initArr[i]) {
      for (let j = i * i; j <= max; j += i) {
        initArr[j] = false
      }
    }
  }
  for (let i = 1; i <= max; i++) {
    if (sumOfNum.includes(i) && initArr[i]) {
      count = count + sumOfNum.filter(x => x === i).length
    }
  }
  return count
}

console.log(solution([1, 2, 7, 6, 4]))