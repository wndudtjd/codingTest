// DAY1 codingTest
// 문제설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// 내가짠코드
function solution01(sizes) {
  var biggerSizeMax = 0;
  var smallerSizeMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (Math.max(sizes[i][0], sizes[i][1]) > biggerSizeMax) {
      biggerSizeMax = Math.max(sizes[i][0], sizes[i][1])
    }
    if (Math.min(sizes[i][0], sizes[i][1]) > smallerSizeMax) {
      smallerSizeMax = Math.min(sizes[i][0], size[i][1])
    }
  }
  return biggerSizeMax * smallerSizeMax;
}

// 항해99 백승호님 코드
function solution02(sizes) {
  var biggerSizeMax = 0;
  var biggerSizeMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      if (sizes[i][0] >= biggerSizeMax) {
        biggerSizeMax = sizes[i][0]
      }
      if (sizes[i][1] >= smallerSizeMax) {
        biggerSizeMax = sizes[i][1]
      }
    }else {
      if (sizes[i][1] >= biggerSizeMax) {
        biggerSizeMax = sizes[i][1]
      }
      if (sizes[i][0] >= smallerSizeMax) {
        biggerSizeMax = sizes[i][0]
      }
    }
  }
}

//DAY2 codingTest

//문제설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

//제한조건

// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.
// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

function solution01(strings, n) {
    return strings.sort(function (a, b) {
        // 인덱스 n번째 글자를 기준으로 오름차순 정렬
        if (a[n] > b[n]) return 1
        if (a[n] < b[n]) return -1
        // 인덱스 n번째 글자가 같으면 사전순 정렬
        if (a[n] === b[n]) {
            if (a > b) return 1
            if (a < b) return -1
            // if (a === b) return 0
        }
    })
}
function solution02(strings, n) {
  return strings.sort((a, b) => {
      // 인덱스 n번째 글자를 기준으로 오름차순 정렬
      if (a[n] > b[n]) return 1
      if (a[n] < b[n]) return -1
      // 인덱스 n번째 글자가 같으면 사전순 정렬
      if (a[n] === b[n]) return a > b ? 1 : -1
  })
}


// DAY3 

// codingTest-1

//문제설명
//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

//제한 조건

//n과 m은 각각 1000 이하인 자연수입니다.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a); // 가로
    // console.log(b); // 세로
    for (let i = 0; i < b; i ++) {
        let val = ""
        for (let j = 0; j < a; j++) {
            val = val + "*"
        }
        console.log(val)
    }
}); // 이번거는 옛날에 해봤던 문제라 쉽게 풀었음.



// codingTest-2

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

