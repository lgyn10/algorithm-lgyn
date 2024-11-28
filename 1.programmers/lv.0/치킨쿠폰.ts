// https://school.programmers.co.kr/learn/courses/30/lessons/120884

// ver 1. 최초 코드
const 치킨쿠폰 = (chicken: number): number => {
  let coupon = 0;
  let totalService = 0;
  while (chicken > 0) {
    coupon += chicken % 10;
    totalService += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10);
    if (coupon >= 10) {
      totalService += Math.floor(coupon / 10);
      chicken += Math.floor(coupon / 10);
      coupon = coupon % 10;
    }
  }
  return totalService;
};

// ver 2. 개선 코드

console.log(치킨쿠폰(100)); // 11
console.log(치킨쿠폰(1081)); // 120
console.log(치킨쿠폰(1999)); // 222
