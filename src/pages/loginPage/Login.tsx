import * as React from 'react';
import styles from './login.module.css';

import { useState } from 'react';

// props로 받은 회원가입 화면 state 변경함수 타입 지정
interface SetSignup {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

//로그인 아이디, 비밀번호에 대한 타입 지정
interface LoginInfo {
  id: string;
  password: string;
}

function Login({ setSignup }: SetSignup) {
  // id, password 저장하는 state
  const [loginState, setLoginState] = useState<LoginInfo>({
    id: '',
    password: '',
  });

  // submit 눌렀을 때
  const handleLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // 서버로 입력 받은 아이디, 비밀번호 전송 axios 사용
  };

  return (
    <div className={styles.loginBox}>
      <div className={styles.loginWrapper}>
        <h2>Eyeve</h2>
        <form className={styles.loginForm} method='post' action=''>
          <input
            type='text'
            name='userID'
            placeholder='ID'
            value={loginState?.id}
            // onChange={handleId}
            onChange={(e) => {
              setLoginState({
                ...loginState,
                id: e.target.value,
              });
              console.log(loginState);
            }}
          />
          <input
            type='password'
            name='userPassword'
            placeholder='Password'
            value={loginState?.password}
            onChange={(e) => {
              setLoginState({
                ...loginState,
                password: e.target.value,
              });
              console.log(loginState);
            }}
          />
          <input type='submit' value='Login' onClick={handleLoginSubmit} />
        </form>
        <h3
          onClick={() => {
            setSignup((prev) => !prev);
          }}>
          회원가입
        </h3>
      </div>
    </div>
  );
}

export default Login;
