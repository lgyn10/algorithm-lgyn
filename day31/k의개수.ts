// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// 최초 코드
const k의개수 = (i: number, j: number, k: number): number => {
  let cnt = 0;
  while (i <= j) {
    cnt += [...i.toString()].filter((v) => parseInt(v, 10) === k).length;
    i++;
  }
  return cnt;
};

// 개선 코드
const k의개수2 = (i: number, j: number, k: number): number => {
  let str = '';
  while (i <= j) str += i++;
  // k를 기준으로 문자열을 나누면 k+1개의 요소로 나눠진다.
  return str.split(k.toString()).length - 1;
};

console.log(k의개수(1, 13, 1)); // 6
console.log(k의개수(10, 50, 5)); // 5
console.log(k의개수(3, 10, 2)); // 0

console.log(k의개수2(1, 13, 1)); // 6
console.log(k의개수2(10, 50, 5)); // 5
console.log(k의개수2(3, 10, 2)); // 0
