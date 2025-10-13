// func_practice.js

//* == JS 함수 예시 ==

//? 요구 사항 정리

// 1. 회사의 직원들을 위해 월별 근무 시간과 시급을 기반으로 급여 계산 프로그램 작성
// - clculatePay(hours, rate);
// - 근무 시간(hours), 시급(rate)을 인자로 받고, 총 급여를 게산하여 반환

// 2. 근무 시간이 160시간을 초과할 경우, 초과 근무 시간은 기본 시급의 1.5배로 계산

// 3. 각 직원의 월별 근무시간과 시급이 다를 수 있기 때문에
//      , 유연하게 동작될 수 잇는 함수 작성

// 직원 A: 172시간, 시급 20달러
// 직원 B: 160시간, 시급 22달러
// 직원 C: 180시간, 시급 18달러

// >> 직원 @ 급여: $ 계산된 금액

function clculatePay(hours, rate) {
  let sumRate = 0;

  if (hours > 160) {
    sumRate = (160 * rate) + ((hours-160)*(rate*1.5));
  } else {
    sumRate = hours * rate;
  }

  return sumRate;
}

console.log(clculatePay(172, 20));
console.log(clculatePay(160, 22));
console.log(clculatePay(180, 18));
