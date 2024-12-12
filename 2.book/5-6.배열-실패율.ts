// 24.12.12
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절
// 실패율을 구하는 부분에서 위기
// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

//! 정답
// O(n log n)
// 3ms가 넘지 않음
const 실패율ans = (N: number, stages: number[]) => {
  const arr = [];
  let total = stages.length;

  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 배열
  const yetToClear = Array(N + 2).fill(0);
  for (const stage of stages) {
    yetToClear[stage]++;
  }

  // 스테이지에 도달한 플레이어 수
  const cleared = Array(N + 2).fill(0);
  for (let i = 1; i < N + 2; i++) {
    cleared[i] = total;
    total -= yetToClear[i];
  }

  for (let i = 1; i <= N; i++) {
    if (yetToClear[i] === 0) arr.push([0, 1, i]);
    else if (cleared[i] === 0) arr.push([1, 0, i]);
    else arr.push([yetToClear[i], cleared[i], i]);
  }

  arr.sort((a, b) => b[0] * a[1] - a[0] * b[1]);
  return arr.map((v) => v[2]);
};

//! 나의 풀이
// O(n^2) - 2500ms까지도 걸림
// 평가
// filter 대신 forEach를 사용하여 시간,공간 효율을 높임
// 곱셉을 사용하여 부동소수점 오차를 예방
const 실패율 = (N: number, stages: number[]) => {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    let yetToClear = 0;
    stages.forEach((v) => v === i && yetToClear++);
    let cleared = 0;
    stages.forEach((v) => v >= i && cleared++);

    // [분자, 분모, 스테이지 숫자] 저장
    if (yetToClear === 0) arr.push([0, 1, i]);
    else if (cleared === 0) arr.push([1, 0, i]);
    else arr.push([yetToClear, cleared, i]);
  }
  // 실패율을 기준으로 올림차순 정렬 후, 스테이지 숫자를 뽑아 반환
  arr.sort((a, b) => b[0] * a[1] - a[0] * b[1]);
  return arr.map((v) => v[2]);
};

//! 개선 전
// 1. filter는 배열을 생성하므로 효율이 forEach 보다 좋지 않다.
// 시간적 측면과 메모리 측면 모두 안 좋음
// 2. 부동소수점 오차가 발생하여 정확성이 떨어질 수 있다.
const 실패율a = (N: number, stages: number[]) => {
  const arr = [];
  for (let i = 1; i <= N; i++) {
    let yetToClear = stages.filter((v) => v === i).length;
    let cleared = stages.filter((v) => v >= i).length;

    // 튜플 구조로 [실패율, 스테이지 숫자]를 저장한다.
    if (yetToClear === 0) arr.push([0, i]);
    else if (cleared === 0) arr.push([1, i]);
    else arr.push([yetToClear / cleared, i]); //* 나눗셈이 거슬림
  }
  arr.sort((a, b) => b[0] - a[0]);
  return arr.map((v) => v[1]);
};

console.log(실패율(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(실패율(4, [4, 4, 4, 4, 4])); // [4,1,2,3]

console.log(실패율ans(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(실패율ans(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
