// obj04.js

//* 객체의 속성 존재 여부 확인
// : 객체에 존재하지 않는 속성에 접근: undefined
// > 조건문 + undefined 여부 확인

let obj = {
  name: '샛노랑',
  height: 168,
  job: 'developer'
}

if (obj.name !== undefined) {
  console.log(obj.name); // 샛노랑
} else {
  console.log('name 속성 X');
}

//* == 조건문을 연산자로 검증 ==
// 1) 논리 연산자
//? or 연산자: 하나라도 true면 true
console.log('== or 연산자 ==');
obj.name || console.log('name 속성 X'); // 출력 없음
obj.hobby || console.log('hobby 속성 X'); // hobby 속성 X

//? and 연산자: 모두 true여야 true
obj.name && console.log('name 속성 O'); // name 속성 O
obj.hobby && console.log('hobby 속성 O'); // 출력 없음

// 2) 삼항 연산자
// : 객체의 기본 속성 지정
obj.name = obj.name ? obj.name : '비회원 고객';
console.log(obj.name); // 샛노랑

obj.nickname = obj.nickname ? obj.nickname : '임시 닉네임';
console.log(obj.nickname); // 임시 닉네임

// >> 논리 연산자 변환
obj.name = obj.name || '이름을 알 수 없음'
obj.age = obj.age || '나이을 알 수 없음'

console.log(obj.name); // 샛노랑
console.log(obj.age); // 나이을 알 수 없음