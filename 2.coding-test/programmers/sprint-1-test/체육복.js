// https://school.programmers.co.kr/learn/courses/30/lessons/42862

//! ver 1. 최초 코드
// 정답률 90%
function 체육복(n, lost, reserve) {
  const finalLost = lost.filter((v) => {
    if (reserve.some((e) => e === v)) {
      reserve.splice(reserve.indexOf(v), 1);
    } else if (reserve.some((e) => e === v - 1)) {
      reserve.splice(reserve.indexOf(v - 1), 1);
    } else if (reserve.some((e) => e === v + 1)) {
      reserve.splice(reserve.indexOf(v + 1), 1);
    } else return true;
  });
  return n - finalLost.length;
}

//| 입출력 예
console.log(체육복(5, [2, 4], [1, 3, 5])); // 5
console.log(체육복(5, [2, 4], [3])); // 4
console.log(체육복(3, [3], [1])); // 2
