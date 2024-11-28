// https://school.programmers.co.kr/learn/courses/30/lessons/92335

//! ver 1. 최초 코드
function primeCnt(n: number, k: number) {
  // 소수 판별 함수
  const isPrime = (num: number) => {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return true;
  };

  const convertedNum = n.toString(k); // k진수로 변환
  const splitedConvertedNum = convertedNum.split('0'); // 조건에 맞게 분리

  const ans = splitedConvertedNum.filter((v) => {
    if (v === '') return false;
    if (isPrime(parseInt(v, 10))) return true;
    else return false;
  });
  return ans.length;
}

//! ver 2. 개선 코드
// filter 함수의 콜백 함수를 리펙토링함
const primeCnt2 = (n: number, k: number) => {
  // 소수 판별 함수
  const isPrime = (num: number) => {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return true;
  };
  // 코어 로직
  const convertedNum = n.toString(k); // k진수로 변환
  const splitedConvertedNum = convertedNum.split('0'); // 조건에 맞게 분리
  return splitedConvertedNum.filter((v) => isPrime(parseInt(v, 10)) && v !== '').length;
};

console.log(primeCnt(437674, 3)); // 3
console.log(primeCnt(110011, 10)); // 2
console.log(primeCnt2(437674, 3)); // 3
console.log(primeCnt2(110011, 10)); // 2
