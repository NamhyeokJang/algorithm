
function solution(n, arr1, arr2) {
    const toArr = (arr) => arr.map(value => {
        const toBin = value.toString(2).split('').reverse()
        const zeroArr = new Array(n).fill('0')

        return zeroArr.map((value, index) => {
            if (toBin[index]) return toBin[index]
            else return value
        }).reverse()
    })

    const toArr1 = toArr(arr1)
    const toArr2 = toArr(arr2)
    let answer = []
    for (let i = 0; i < toArr1.length; i++) {
        let tempArr = []
        for (let j = 0; j < toArr2.length; j++) {
            if (j === 0) tempArr = []
            if (toArr1[i][j] === '1' || toArr2[i][j] === '1') {
                tempArr.push('#')
            } else {
                tempArr.push(' ')
            }
            if (j === toArr2.length - 1) {
                answer.push(tempArr)
            }
        }

    }

    return answer.map(arr => arr.join(''))
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))



/*
[1차] 비밀지도
문제 설명
비밀지도
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 공백(" ) 또는벽(#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 지도 1과 지도 2라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
지도 1과 지도 2는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
secret map

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

1 ≦ n ≦ 16
arr1, arr2는 길이 n인 정수 배열로 주어진다.
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
출력 형식
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

입출력 예제
매개변수	    값
n	           5
arr1	       [9, 20, 28, 18, 11]
arr2	       [30, 1, 21, 17, 28]
출력	        ["#####","# # #", "### #", "# ##", "#####"]

매개변수	     값
n	            6
arr1	        46, 33, 33 ,22, 31, 50]
arr2	        27 ,56, 19, 14, 14, 10]
출력	         ["######", "### #", "## ##", " #### ", " #####", "### # "]
*/