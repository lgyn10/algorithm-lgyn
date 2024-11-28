// https://school.programmers.co.kr/learn/courses/30/lessons/120848

// ver 1. 최초 코드
// 코드가 명시적임
// 시간 효율은 ver 2보다 떨어진다.
const 팩토리얼 = (n: number): number => {
  // 팩토리얼 함수
  const factorialFunc = (num: number): number => {
    if (num === 1) return 1;
    return num * factorialFunc(num - 1);
  };
  // 코어 로직
  let cnt = 0;
  while (factorialFunc(cnt + 1) <= n) cnt++;
  return cnt;
};

// ver 2. 개선 코드
// 코드 의미가 명시적이지는 않지만, 시간 효율은 좋다.
const 팩토리얼2 = (n: number): number => {
  let fac = 1;
  let i = 1;
  while (fac <= n) fac *= ++i;
  return i - 1;
};

console.log(팩토리얼(3628800)); // 10
console.log(팩토리얼(7)); // 3

console.log(팩토리얼2(3628800)); // 10
console.log(팩토리얼2(7)); // 3
console.log(팩토리얼2(5)); // 2
