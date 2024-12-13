// 2024.12.13
// https://school.programmers.co.kr/learn/courses/30/lessons/49994

// U, D, R, L : 위, 아래, 오른쪽, 왼쪽

//! 내 풀이
// 해설과 같음..!
const 방문길이 = (dirs: string) => {
  const points = [0, 0, 0, 0];

  let startPoint = [0, 0];
  const endPoint = [0, 0];

  const set = new Set();

  for (const dir of dirs) {
    switch (dir) {
      case 'U':
        if (endPoint[0] < 5) endPoint[0]++;
        break;
      case 'D':
        if (endPoint[0] > -5) endPoint[0]--;
        break;
      case 'R':
        if (endPoint[1] < 5) endPoint[1]++;
        break;
      case 'L':
        if (endPoint[1] > -5) endPoint[1]--;
        break;
    }
    // 막다른 길이여서 이동하지 않았을 때. 즉, 벗어난 좌표
    if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]) continue;

    // A-B와 B-A는 같음
    const loc1 = [...startPoint, ...endPoint].join('');
    const loc2 = [...endPoint, ...startPoint].join('');
    set.add(loc1);
    set.add(loc2);
    startPoint = [...endPoint];
  }
  return set.size / 2;
};

console.log(방문길이('ULURRDLLU')); // 7
console.log(방문길이('LULLLLLLU')); // 7
console.log(방문길이('UDLRDURL')); // 4
