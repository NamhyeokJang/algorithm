/* *** */


/* 문제 잘못 이해한 case */
/* 제한사항:y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 한다.
function sol(start, end) {
  let len = end - start
  let position = 0
  let current = 0
  let count = 0
  while (position !== len) {
    let posible = [current - 1, current, current + 1]

    for (let i = 2; i >= 0; i--) {
      if (len - (position + posible[i]) < 0) {
        continue
      } else {
        position = position + posible[i]
        current = posible[i]
        count++
        console.log(`len: ${len}, position: ${position}, posible: ${posible}`)
        break;
      }
    }
  }
  return count
}

console.log(sol(0, 3))
console.log(sol(1, 5))
console.log(sol(45, 50))
*/

/*
거리(y-x)	    이동 변화 	작동 횟수	  제곱 여부
1	            1	          1	         O
2	            11	        2
3	            111	        3
4	            121	        3	         O
5	            1211	      4
6	            1221	      4
7	            12211	      5
8	            12221	      5
9	            12321	      5	         O
10	          123211	    6
11	          123221	    6
12	          123321	    6
13	          1233211	    7
14	          1233221	    7
15	          1233321	    7
16	          1234321	    7	         O
17	          12343211	  8
…	            …	          …	         …
*/