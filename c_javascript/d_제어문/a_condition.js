// a_condition.js

//* cf) 제어문(Control): 프로그래밍 실행 흐름을 제어
//      >> 조건문(Condition), 반복문(Loop)

//* == 자바스크립트 '조건문' == //
//  : 주어진 조건에 따라 코드 실행 흐름을 제어
//  - '조건'에는 주로 비교 연산자를 활용
//      >> 조건 boolean 값을 통해 조건을 검증
//  - if문, else문, else if문, switch문

//*  1) if문 & else문 & else if문
/*
if (조건식) {
  조건이 참일 때 실행
} else if (조건식){
  앞선 조건은 거짓 + 해당 조건은 참인 경우 실행
}
...
  else {
  앞선 모든 조건이 거짓일 때 실    
}
*/

//? 자바 변수 선언 및 초기화: 데이터타입 변수명 = 데이터값;
//? 자바스크립트 변수 선언 및 초기화: 변수종류(변수|상수) 변수명 = 데이터값;

// +) 변수(let, var), 상수(const)

let number = 10;
if (number > 0) {
  // clg: console.log('');의 스니펫
  //      >> 괄호 안의 데이터를 문자열로 간단하게 출력해주는 구문
  console.log(number); // 10
}

// cf) 변수명(식별자)를 활용한 조건 검증
//      false값: '', 0, undefined, null 등

let stringData = "";
let numberData = 0;

if (stringData || numberData) {
  // 둘 줄 하나라도 true인 경우 실행
  console.log("해당 코드는 실행되지 않습니다.");
}

console.log("해당 코드는 실행됩니다.");

// == if/else/else if문 예제 ==
let num = 10;

if (num < 0) {
  console.log("음수입니다.");
} else if (num === 0) {
  // '0'과 0을 불일치로 봄
  console.log("0입니다.");
} else {
  console.log("양수입니다.");
}

// cf) 실행될 코드 블럭이 한 줄일 경우 코드 축약 가능
if (num < 0) console.log("음수입니다.");
else if (num === 0) console.log("0입니다.");
else console.log("양수입니다.");

//? 조건문 에제

let age = 14;

if (age < 13) {
  console.log("어린이");
} else if (age >= 13 && age < 20) {
  console.log("청소년");
} else {
  console.log("성인");
}

//* 2) switch case문
//  : 하나의 표현식 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행
//  : switch 블럭 내에 case 값들이 나열
//  +) djejs case와도 일치하지 않을 경우 default문 실행

let fruit = "banana";

// case의 데이터 유형은 switch 식의 데이터 유형과 일치!
switch (fruit) {
  case "apple":
    console.log("사과");
    // 각 case 실행은 흐름을 제어하지 x
    // : 해당 case 이후의 모든 코드를 실행
    // > break; (case문 제어/중지)
    break;
  case "banana":
    console.log("바나나");
  case "train":
    console.log("바나나는 길어 길면 기차");
    break;
  default:
    console.log("일치하는 조건이 없습니다.");
}

//? === if 조건문 VS 삼항 연산자 VS switch문 ===

let score; // 점수
let grade; // 학점

console.log("== if 조건문 ==");
score = 81
if (score < 0 || score > 100) console.log('유효한 점수가 아닙니다.');
else if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else if (score >= 60) grade = 'D';
else grade = 'F';

console.log(`학점은 ${grade}입니다.`); // 학점은 B입니다.


console.log("== 삼항 연산자 ==");
score = 91;
grade = 
score > 100 || score < 0
? '유효한 점수가 아닙니다.' : score >= 90
? 'A' : score >= 80
? 'B' : score >= 70
? 'C' : score >= 60
? 'D' : 'F';

console.log(`학점은 ${grade}입니다.`); // 학점은 A입니다.


console.log("== switch문 ==");
score = 35;
switch (true) {
  case (score < 0 || score > 100):
    grade = '유효한 점수가 아닙니다.';
    break;
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}
console.log(`학점은 ${grade}입니다.`); // 학점은 F입니다.