function solution(bridge_length, weight, truck_weights) {
  let onBridge = Array(bridge_length).fill(0)

  while (truck_weights.length !== 0) {
    onBridge.push(truck_weights[0])
    if (onBridge.reduce((acc, cur) => acc + cur) > weight) {
      onBridge.slice(0, bridge_length)
    } else {
      truck_weights.unshift()
      onBridge.unshift()
    }
    console.log(onBridge)
  }

  return
}

console.log(solution(2, 10, [7, 4, 5, 6]))
// console.log(solution(100, 100, [10]))
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))