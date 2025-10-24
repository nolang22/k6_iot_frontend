// practice01.ts
// export const tmp = '';

//& ============ 유니언 =============//
//* 1. Union 타입을 사용한 변수 선언
// string, number, boolean 중 하나의 타입을 가질 수 있는 MixedType 변수를 선언하고, 각 타입에 해당하는 값을 할당하는 예시 코드를 작성
type MixType = string | number | boolean;

const mix1: MixType = 1;
const mix2: MixType = "2";
const mix3: MixType = true;

//* 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

type Gaga = number | string;

function doubleOrNothing(num: Gaga) {
  if (typeof num === "number") {
    return (num *= 2);
  } else {
    return num;
  }
}

console.log(doubleOrNothing("1"));
console.log(doubleOrNothing(5));

//* 3. Union 타입과 타입 가드를 활용한 고급 예제
// Admin과 User 타입 명시
// - Admin은 id (number 타입)와 isAdmin (boolean 타입) 속성을, User는 id (number 타입)와 username (string 타입) 속성 포함
type Admin = {
  id: number;
  isAdmin: boolean;
};

type User = {
  id: number;
  username: string;
};

//? - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체를 생성
type Person = Admin | User;

const man: Person = {
  id: 12,
  isAdmin: false,
  // username: "샛노랑",
};

//? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

function identifyPerson(isman: Person) {
  if ("isAdmin" in isman && isman.isAdmin === true) {
    return "Admin";
  } else {
    return "User";
  }
}

console.log(identifyPerson(man));

//& ============ 인터섹션 =============//
//* 문제 1: 기본 Intersection 타입 생성
// - Person 타입과 ContactDetails 타입을 결합하여 Employee 타입을 생성
// - Employee 타입은 Person의 모든 속성(name, age)과 ContactDetails의 모든 속성(email, phone)을 포함
type Person1 = {
  name: string;
  age: number;
};

type ContactDetails = {
  email: string;
  phone: string;
};

type Employee = Person1 & ContactDetails;

//* 문제 2: 함수 반환 타입으로 Intersection 사용
// - Vehicle 타입과 Engine 타입을 결합하여 Car 타입 생성
type Vehicle = {
  name: string;
  speed: number;
};

type Engine = {
  engineType: string;
};

type Car = Vehicle & Engine;

// - createCar 함수를 구현하여, 주어진 Vehicle과 Engine 정보를 받아 Car 객체를 반환하도록 구현

let ben: Car = {
  name: "벤",
  speed: 200,
  engineType: "노랑색",
};

function bben(ben: Car) {
  console.log(
    `${ben.name}은 속도 ${ben.speed}를 내며 엔진 색상은 ${ben.engineType} 입니다.`
  );
}

bben(ben);

//& ============ 유니언 =============//
//* 1. Union 타입을 사용한 변수 선언
// string, number, boolean 중 하나의 타입을 가질 수 있는 MixedType 변수를 선언하고, 각 타입에 해당하는 값을 할당하는 예시 코드를 작성

//* 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

//* 3. Union 타입과 타입 가드를 활용한 고급 예제
// Admin과 User 타입 명시
// - Admin은 id (number 타입)와 isAdmin (boolean 타입) 속성을, User는 id (number 타입)와 username (string 타입) 속성 포함

//? - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체를 생성

//? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

//& ============ 인터섹션 =============//
//* 문제 1: 기본 Intersection 타입 생성
// - Person 타입과 ContactDetails 타입을 결합하여 Employee 타입을 생성
// - Employee 타입은 Person의 모든 속성(name, age)과 ContactDetails의 모든 속성(email, phone)을 포함

//* 문제 2: 함수 반환 타입으로 Intersection 사용
// - Vehicle 타입과 Engine 타입을 결합하여 Car 타입 생성
// - createCar 함수를 구현하여, 주어진 Vehicle과 Engine 정보를 받아 Car 객체를 반환하도록 구현
