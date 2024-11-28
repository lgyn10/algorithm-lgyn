// https://school.programmers.co.kr/learn/courses/30/lessons/120896

// ver 1. 최초 코드
// 비효율이 보인다.
const 한번만등장한문자 = (s: string): string => {
  const strMap = new Map();
  [...s].forEach((v) => {
    const val = strMap.get(v);
    if (!val) strMap.set(v, 1);
    else strMap.set(v, val + 1);
  });
  return Array.from(strMap)
    .filter((v) => v[1] === 1)
    .join('')
    .match(/[a-z]+/gi)
    ?.sort((a, b) => a.localeCompare(b))
    .join('') as string;
};

// ver 2. 효율 개선

console.log(한번만등장한문자('abcabcadc')); // "d"
console.log(한번만등장한문자('abdc')); // "abcd"
console.log(한번만등장한문자('hello')); // "eho"
