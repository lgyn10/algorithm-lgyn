// https://school.programmers.co.kr/learn/courses/30/lessons/120835

const 진료순서정하기 = (emergency: number[]): number[] => {
  const sortedEM = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sortedEM.indexOf(v) + 1);
};

console.log(진료순서정하기([3, 76, 24])); // [3, 1, 2]
console.log(진료순서정하기([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(진료순서정하기([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]
