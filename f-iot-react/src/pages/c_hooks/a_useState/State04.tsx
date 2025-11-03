import React, { useState } from "react";

/*
* UseState를 사용한 상태 관리 & 이벤트 처리

? == 요구 사항 정리 ==
  1. 사용자 아이디, 비밀번호, 비밀번호 확인란, 이메일 주소 입력

  2. 입력 유효성 검사
    : 모든 입력 필드창은 비워질 수 없음
    - 모두 입력해야 함
  
  3. 상태 관리
    : 입력 값들은 하나의 객체로 useState를 통해 관리 (formData)
  
  4. 폼 제출
    : 폼 제출 시 모든 입력값이 콘솔에 출력
    - 입력 조건을 만족하지 않는 경우 오류 메시지 출력
      > 오류 메시지도 상태 관리 
*/

interface FormData {
  id: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const initialFormData: FormData = {
  id: "",
  password: "",
  confirmPassword: "",
  email: "",
};

function State04() {
  //% == Hooks ==
  // 1) 폼 데이터 상태 관리
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // 2) 폼 입력 오류 메시지 상태 관리
  const [error, setError] = useState<FormData>(initialFormData);

  // + 폼 데이터 구조 분해 할당
  const { id, password, confirmPassword, email } = formData;

  //% Event Handler ==
  // 1) 입력 필드의 변경을 감지하느 이벤트 핸들러
  const handleSignUpInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 2) 폼 제출 이벤트를 처리하는 이벤트 핸들러
  //  : 제출 전 각 입력 요소에 대한 유효성 검사
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //? 임시 오류 메시지 객체 생성
    let tempError = {
      id: "",
      password: "",
      confirmPassword: "",
      email: "",
    };

    //? 폼의 유효성 상태를 추적하는 변수
    let isValid = true; // 하나라도 유효하지 않으면 false로 지정

    //? -- 필수 입력밧 체그 --
    if (!id.trim()) {
      tempError.id = '아이디를 입력해주세요.';
      isValid = false;
    }

    if (!password.trim()) {
      tempError.password = '비밀번호를 입력해주세요.';
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      tempError.confirmPassword = '비밀번호 확인을 입력해주세요.';
      isValid = false;
    }

    if (!email.trim()) {
      tempError.email = '이메일을 입력해주세요.';
      isValid = false;
    }

    // -- 비밀번호 일치 여부 검사 --
    if (password && confirmPassword && password != confirmPassword) {
      tempError.confirmPassword = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    setError(tempError);
    if (isValid) {
      // 모든 유효성 검사 통과 성공!
      console.log('회원가입 데이터: ', formData);
      alert(`축하합니다. ${id}님`);

      setFormData(initialFormData);
    }
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>
            🍔아이디
            <input
              type="text"
              name="id"
              value={id}
              onChange={handleSignUpInputChange}
            />
          </label>
          {/* error에 객체에 해당 속성이 있으면 에러 출력 */}
          {/* 
            p태그 외부 소괄호 생략 가능
            : JSX 안에서 한 줄짜리 표현식은 ()소괄호로 안 감싸도 됨!
          */}
          {error.id && <p style={{ color: 'red'}}>{error.id}</p>}
        </div>
        <div>
          <label>
            🍟비밀번호
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleSignUpInputChange}
            />
          </label>
          {error.password && <p style={{ color: 'red'}}>{error.password}</p>}
        </div>
        <div>
          <label>
            🍟비밀번호 확인
            <input
              type="text"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleSignUpInputChange}
            />
          </label>
          {error.confirmPassword && <p style={{ color: 'red'}}>{error.confirmPassword}</p>}
        </div>
        <div>
          <label>
            🥤이메일
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleSignUpInputChange}
            />
          </label>
          {error.email && <p style={{ color: 'red'}}>{error.email}</p>}
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default State04;
