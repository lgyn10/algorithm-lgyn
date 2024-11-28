// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 탐험 시작 위한 `최소 필요 피로도`
// 탐험 끝났을 때 소모되는 `소모 피로도`

//! ver 1. 최초 코드 - 못 품
function maxDungeon(k, dungeons) {
  dungeons.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  const a = dungeons.filter((v) => {
    k - v[1];
    if (k >= 0) return true;
  });
  console.log(dungeons);
  console.log(a);
  return a.length;
}

//! ver 2. 최초 코드 - 재풀이
const maxDungeon2 = (k, dungeons) => {};
