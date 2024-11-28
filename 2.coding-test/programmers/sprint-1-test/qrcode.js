// https://school.programmers.co.kr/learn/courses/30/lessons/181903

//! ver 1. 최초 코드
function restIdxString(q, r, code) {
  return [...code]
    .filter((v, i) => {
      if (i % q === r) return true;
    })
    .join('');
}

//! ver 2. 개선 코드
// 불필요한 if문 제거
const restIdxString2 = (q, r, code) => {
  return [...code].filter((_, i) => i % q === r).join('');
};

//| 입출력 예
console.log(restIdxString(3, 1, 'qjnwezgrpirldywt')); // "jerry"
console.log(restIdxString(1, 0, 'programmers')); // "programmers"
console.log(restIdxString2(3, 1, 'qjnwezgrpirldywt')); // "jerry"
console.log(restIdxString2(1, 0, 'programmers')); // "programmers"
