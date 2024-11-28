// https://school.programmers.co.kr/learn/courses/30/lessons/120890

// 최초 코드
const 가까운수 = (array: number[], n: number): number => {
  array.sort();
  const absArr = array.map((v) => Math.abs(v - n));
  const closestVal = Math.min(...absArr);
  const closestIdx = absArr.findIndex((v) => v === closestVal);
  return array[closestIdx];
};

// 다른 사람 코드
// sort() 메서드의 콜백함수 2가지 기준 정렬 적용
const 가까운수2 = (array: number[], n: number): number => {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
};

// sort() 콜백 함수를 풀어서 작성
const 가까운수3 = (array: number[], n: number): number => {
  array.sort((a, b) => {
    if (Math.abs(n - a) - Math.abs(n - b) === 0) return a - b;
    return Math.abs(n - a) - Math.abs(n - b);
  });
  return array[0];
};

console.log(가까운수([3, 10, 28], 20)); // 28
console.log(가까운수([10, 11, 12], 13)); // 12

console.log(가까운수2([3, 10, 28], 20)); // 28
console.log(가까운수2([10, 11, 12], 13)); // 12

console.log(가까운수3([3, 10, 28], 20)); // 28
console.log(가까운수3([10, 11, 12], 13)); // 12
