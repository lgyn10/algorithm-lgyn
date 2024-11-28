// https://school.programmers.co.kr/learn/courses/30/lessons/120864

import { sum } from 'lodash';

// ver 1. 틀린 코드
// /\d/의 경우 한자리 자연수만 검사하게 된다. 문제 의도와 다르다.
const 숨어있는숫자의덧셈2a = (str: string): number => {
  return sum([...str].filter((v) => /\d/.test(v)).map((v) => parseInt(v, 10)));
};

//! 최적의 코드인 것 같다.
// ver 2. split 사용
const 숨어있는숫자의덧셈2b = (str: string): number => {
  return sum(
    str
      .split(/[a-z]/i)
      .filter((v) => v !== '')
      .map((v) => parseInt(v, 10)),
  );
};

// ver 3. replace 사용
const 숨어있는숫자의덧셈2c = (str: string) => {
  let ans = 0;
  str
    .replace(/\D/g, ' ')
    .split(' ')
    .forEach((v) => {
      if (v !== '') ans += parseInt(v, 10);
    });
  return ans;
};

// ver 4. 다른 사람 코드
// /\D+/g와 reduce 활용

console.log(숨어있는숫자의덧셈2a('aAb1B2cC34oOp')); // 37
console.log(숨어있는숫자의덧셈2a('1a2b3c4d123Z')); // 133

console.log(숨어있는숫자의덧셈2b('aAb1B2cC34oOp')); // 37
console.log(숨어있는숫자의덧셈2b('1a2b3c4d123Z')); // 133

console.log(숨어있는숫자의덧셈2c('aAb1B2cC34oOp')); // 37
console.log(숨어있는숫자의덧셈2c('1a2b3c4d123Z')); // 133
