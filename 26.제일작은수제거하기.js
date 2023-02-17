// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예
// arr	       return
// [4,3,2,1]	[4,3,2]
// [10]	       [-1]

// 처음 작성한 내 풀이 유효성 검사에서 실패
function solution(arr) {
  let answer = arr.sort((a,b) => b-a);
  answer.splice(arr.length -1,1)
  if (answer.length <= 1) {
    answer.push(-1);
  }
  console.log(answer)
  return answer;
}

// 두번째 풀이 indexOf()사용
solution([4,5,3,2])
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1)
  arr.length <= 1 ? answer = [-1] : answer = arr
  console.log(answer)
  return answer;
}