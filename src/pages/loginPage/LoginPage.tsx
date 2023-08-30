import styles from './login.module.css';

import * as React from 'react';
import { useState } from 'react';

import Login from './Login';
import SignUp from './SignUp';

/*
1. 회원가입 
  유효성 검사

  유저가 입력한 값 state에 저장하고 있다가
  서버에게 아이디 비번 이름 보내줌


  

2. 로그인 
  유저가 타이핑 하는 값 state로 저장

  axios 요청해서 회원정보 존재하는지 확인



  회원정보 존재하지 않으면 팝업창 발생
    서버에게 POST GET 요청하여 정보 확인


*/

function LoginPage(): JSX.Element {
  const [signup, setSignup] = useState<boolean>(false);

  return (
    <div>
      <Login setSignup={setSignup} />
      {signup && <SignUp setSignup={setSignup} />}
    </div>
  );
}

export default LoginPage;
