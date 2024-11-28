// 마라톤
// 한 명만 미완주

//! ver 1. 최초 코드
function dnfPerson(participant, completion) {
  // 동명 이인 없을 경우 => 시간 효율 측면에서 불필요
  // const firstLoop = participant.filter(name => {
  //     if(!completion.some(v=> v === name)) return true
  // })
  // if(firstLoop.length !== 0) return firstLoop.at(0)

  // 동명이인도 있는 경우
  const prtMap = new Map();
  const comMap = new Map();
  participant.forEach((name) => prtMap.set(name, (prtMap.get(name) ?? 0) + 1));
  completion.forEach((name) => comMap.set(name, (comMap.get(name) ?? 0) + 1));

  return participant
    .filter((name) => {
      if (prtMap.get(name) !== comMap.get(name)) return true;
    })
    .at(0);
}

//! ver 2. 개선 코드
// filter의 콜백 함수 단순화
const dnfPerson2 = (participant, completion) => {
  const prtMap = new Map();
  const comMap = new Map();
  participant.forEach((name) => prtMap.set(name, (prtMap.get(name) ?? 0) + 1));
  completion.forEach((name) => comMap.set(name, (comMap.get(name) ?? 0) + 1));

  // 코어 로직 한 줄 정리
  return participant.filter((name) => prtMap.get(name) !== comMap.get(name)).at(0);
};

console.log(dnfPerson(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(dnfPerson(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
console.log(dnfPerson(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"

console.log(dnfPerson2(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(dnfPerson2(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
console.log(dnfPerson2(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
