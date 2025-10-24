// type06.ts

//* == 리터럴(literal, 문자 그대로의) 타입 ==
// : 특정 '값'만을 가질 수 있는 타입을 정의할 때 사용
// - 특정 '값'으로 타입을 제한

//? 리터럴 타입의 종류
// 1) 해당 값만을 가지는 상수(const)
let str1 = '안녕하세요';
str1 = 'hello';
str1 = '곤니치와';

const str2 = '안녕하세요'; // const str2 = '안녕하세요'; (리터럴 "안녕하세요" 타입)
// str2 = 'hello';

// 2) 해당 값을 타입으로 지정한 변수
let num1 = 123;
num1 = 3425361;
num1 = 232;

let num2: 123 = 123; // let num2 = 123
// num2 = 342523;

// >> 다른 값을 할당할려고 하면 타입 에러가 발생

//? 리터럴 타입 사용 예시 
// : type 키워드(타입 별칭)와 함께 사용
// +) 유니언 타입과 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
//    >> 변수가 '특정 값'들 중 '하나만 가질 수 있도록 제한'

// 1) 변수 사용 // 대소문자 구문해야함
type Directions = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

let move: Directions;
move = 'UP';

// let move2: string;
// move2 = 'diagocal';

// 2) 매개변수 사용
function setAlignment(align: 'LEFT' | 'CENTER' | 'RIGHT') {
  // let container = document.querySelector('#container');
  // container.textAlign = align;
}

setAlignment('CENTER');

// 3) iot반 학생 관리 시스템
type Students = '샛빨강' | '샛노랑' | '샛초록' | '샛파랑' | '샛보라';
let student: Students;

function attendanceFunc(student: Students) {
  console.log(`${student}가 출석하였습니다.`);
}

// attendanceFunc('샛핑크');
attendanceFunc('샛노랑');

// cf) 리터럴 타입을 활용한유니언 타입 사용 시 여러타입의 데이터 혼합 가능
type mixedType1 = 'yes' | 'no' | 1 | 2 | 3 ;
type micedType2 = [1, 2] | {id: string; password: string};

//* 객체 리터럴 타입
// : 실제 객체 데이터 정의

type UserType = {
  name: '샛노랑',
  height: 178
}

let user: UserType = {
  name: '샛노랑',
  height: 178
}

// user.name = '샛초록'

//& +) 객체의 구조적 타이핑 (덕 타이핑)
// 객체의 타입을 실제 값 보다는 그 구조나 멤버에 의해 결정하는 방식
// - 객체의 형태가 유사하다면, 같은 타입으로 간주

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '샛노랑',
}

const p2 = {
  name: '샛초록',
  age: 33,
  bobby: '배구보기'
}

const p3 = {
  name: '샛파랑',
  age: 44
}

// console.log(greet(p1)); - Person 타입의 구조와 일치 X (Person으로 취급 X)
greet(p2); // 구조적 타이핑에 의해 Person 취급 (hobby 속성 무시)
greet(p3); // Person과 구조가 일치하기 때문에 Person 취급

//& +) 중첩ㅈ된 객체 타입 정의
type Address = {
  street: string;
  city: string;
  zipCode?: string;
}

type UserProfile = {
  username: string;
  email: string;
  address: Address; // 타입 객체의 구조를 가짐
}

let userProfile: UserProfile = {
  username: '샛빨강',
  email: '123qqwe',
  address: {
    street: '123 St',
    city: 'Busan'
  }
}
userProfile.address.zipCode = '중앙대로';

//& +) 객체의 인덱스 서명
// : 객체의 모든 속성에 대해 타입을정의하지 않고
//    , 키와 값의 타입만 정의하여 구조를 유연하게 적용하는 방법

type UserDataType = {
  //? 일반적인 객체 속성 타입 명시
  name: string; // 속성명: 속성타입;

  //? 인덱스 서명(signature, 시그니처)
  // [속성명: 인덱스타입]: 속성값타입;
  [key: string]: string | number | boolean;

  // +) 키(key)는 string 사용 권장
  //    값(value)은 어떤 타입으로든 가능
}

let userData: UserDataType = {
  name: '샛파랑',

  height: 123,
  age: 29,
  isStudent: false,
  hobby: '운동'
  // hobby: ['운동', '독서'] - 인덱스 서명에 존재하지 않는 값은 항당 불가!
}

userData.email = 'devasdasd123';
// userData.address = { city: 'Busan'};