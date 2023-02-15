//문제설명
//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

//제한조건

//num은 int 범위의 정수입니다.
//0은 짝수입니다.
function solution(num) {
  var answer = '';
  if (num % 2 === 0) {
      answer = answer + 'Even'
      }else {
      answer = answer + 'Odd'
  }
  return answer;
} // 이번거도 아주 무난하게 쉽게 풀었다. 아직 =, ==, ===이 익숙하지않아 잘못사용하는실수가 있었다.