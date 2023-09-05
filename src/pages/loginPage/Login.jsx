import React from 'react';
import styles from '../../styles/login.module.css';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { show } from '../../store/modules/showSignupSlice';

// async function SendSignup(userLoginData) {
//   try {
//     const { data, status } = await axios.post(`${API}/`, userLoginData);

//     console.log(JSON.stringify(data, null, 4));
//     // alert('회원가입 성공!');
//     console.log(status); // 상태 코드 가져옴 ex) 200

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       return false;
//     } else {
//       console.log('unexpected error: ', error);
//       return false;
//     }
//   }
// }

function Login() {
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({
    id: '',
    password: '',
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginState.id) {
      return alert('아이디를 입력하세요.');
    } else if (!loginState.password) {
      return alert('패스워드를 입력하세요.');
    }
    //로그인 처리

    /*
    
    1.axios 요청을 통해 서버로 입력받은 아이디와 패스워드 전송

    2.서버로부터 받은 상태코드에 따라 로그인 상태 변수 바꾸기

    3. 로그인 성공 시, 
      3-1. 로컬 스토리지에 받은 토큰 값 저장
      3-2. 토큰 마이페이지로 이동

    4. 페이지가 새로고침 시, 로컬 스토리지에 있는 토큰 값을 바탕으로 isLogin 값 갱신 (useEffect 사용)

    */
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
            value={loginState.id}
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
            value={loginState.password}
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
            dispatch(show());
          }}>
          회원가입
        </h3>
      </div>
    </div>
  );
}

export default Login;
