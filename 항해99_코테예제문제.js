// 1. 신대륙 발견
// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 입출력 예
// month day result
// 11 27 "3월 5일"
// 6 22 "9월 28일"

// 지정 입력값
// month day result
// 1 18 "4월 26일"

function solution(month, day){
  let date = new Date(2023, month - 1, day + 98)
  let getMonth = date.getMonth()+1
  let getDay = date.getDate()
  return getMonth + "월 " + getDay + "일"
}
// console.log(solution(1,18))


// 2. 몇시간 했더라?
// 지용이는 항해에서 한 주 동안 공부 기록을 남길 알고리즘을 만들어보기로 결심했다.
// 항해의 체크인 페이지에는 몇가지 조건이 있는데 이를 만족하는 알고리즘을 만들어보자.

// - 체크인과 체크아웃은 항상 정시에 진행한 것으로 가정한다.
// - 체크아웃을 할 때 익일 시간은 24+a 로 계산한다. 즉 새벽 2시는 24+2 인 26으로 표기한다.
// - 체크인 페이지는 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 체크아웃을 깜빡한 것으로 간주한다.
// 따라서 새벽 5시가 넘어가 체크아웃을 하게 되면 자동으로 체크아웃을 오후 9시(21시)로 한 것으로 처리한다.

// ### 제한 조건

// - 체크인(checkin)과 체크아웃(checkout)을 진행한 시간이 담긴 배열 두 개가 주어진다.
// - 각 배열에는 월요일부터 일요일까지 체크인/아웃을 한 시간이 담겨있다.
// - checkin과 checkout 배열의 길이는 각각 7 이다.

// 입출력 예
// checkIn checkOut result
// [9, 9, 8, 8, 7, 8, 9] | [21, 25, 30, 29, 22, 23, 30] | 96
// [9, 7, 8, 9, 7, 9, 8] | [23, 22, 26, 26, 29, 27, 22] | 110

// 지정 입력값
// checkIn checkOut result
// [9, 9, 9, 9, 7, 9, 8] | [23, 23, 30, 28, 30, 23, 23] | 102

function solution02(arr1, arr2) {
  let answer = 0;
  for(let i = 0; i < 7; i++) {
    if(arr2[i] - 24 >= 5) {
      arr2[i] = 21
    }
    let result = arr2[i] - arr1[i]
    answer += result
  }
  // console.log(answer)
  return answer;
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
// console.log(solution02(arr1, arr2))



// 3. 소수의 개수와 덧셈
// ### **문제 설명**

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가
// 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// ---

// ### 제한사항

// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.

// 입출력 예
// s result
// "2 3 4 5" "4 5"
// "15 3 10 9 7 8" "8 7"

// 지정 입력값
// s result
// "97 75 88 99 95 92 73" "75 97"

// 
function solution03(s){
let sArr = s.split(" ")
let num = [];
sArr.forEach((item) => {
  for (let i = 2; i < item; i++) {
    if (item % i === 0 ) {
      num.push(item)
      break;
    }
  }
})
console.log(num)
let result1 = [...new Set(num)];

result1.sort()
sArr.sort()

console.log("result1: ",result1)
console.log("sArr: ",sArr)

let difference = sArr.filter(x => !result1.includes(x))
console.log(difference)

let max = Math.max(...difference)
let min = Math.min(...result1)
return String(min+" "+max);
}
let s="97 75 88 99 95 92 73";

console.log(solution03(s))