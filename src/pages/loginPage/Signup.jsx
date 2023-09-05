import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import axios from 'axios';

import { hide } from '../../store/modules/showSignupSlice';

import styles from '../../styles/login.module.css';

const API = 'http://localhost:8080';

/*
회원가입 할 때, 서버와 통신해서 해당 결과가 성공이냐 실패냐에 따라 return 값을 다르게 하여 handleSignupSubmit 함수에서 성공 실패 처리
*/

// 회원가입 정보 서버로 전송
async function sendSignup(userSignupData) {
  try {
    const { data, status } = await axios.post(
      `${API}/send_signup`,
      userSignupData
    );

    console.log(JSON.stringify(data, null, 4));
    // alert('회원가입 성공!');
    console.log(status); // 상태 코드 가져옴 ex) 200

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return false;
    } else {
      console.log('unexpected error: ', error);
      return false;
    }
  }
}

function Signup() {
  const [signupState, setSignupState] = useState({
    username: '',
    id: '',
    password: '',
    role: '',
  });

  const dispatch = useDispatch();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (!signupState.username) {
      return alert('이름을 입력하세요.');
    } else if (!signupState.id) {
      return alert('아이디를 입력하세요.');
    } else if (!signupState.password) {
      return alert('패스워드를 입력하세요.');
    } else if (!signupState.role) {
      return alert('권한을 체크하세요.');
    }

    const data = sendSignup(signupState);

    console.log(data);

    data.then((res) => {
      console.log(res);
      if (res === false) {
        alert('회원가입 실패');
      } else {
        alert(
          `반갑습니다. ${signupState.username} 님\n회원가입이 완료되었습니다. `
        );
        dispatch(hide());
      }
    });
  };

  return (
    <div className={styles.signUpBox}>
      <div className={styles.signUpWrapper}>
        <button
          className={styles.closeButton}
          onClick={() => {
            dispatch(hide());
          }}>
          ✖
        </button>
        <h2>회원가입</h2>
        <form className={styles.signupForm} action='' method='post'>
          <input
            type='text'
            name='userName'
            placeholder='Name'
            value={signupState.username}
            onChange={(e) => {
              setSignupState({
                ...signupState,
                username: e.target.value,
              });
              console.log(signupState);
            }}
          />
          <input
            type='text'
            name='userID'
            placeholder='ID'
            value={signupState.id}
            onChange={(e) => {
              setSignupState({
                ...signupState,
                id: e.target.value,
              });
              console.log(signupState);
            }}
          />
          <input
            type='password'
            name='userPassword'
            placeholder='Password'
            value={signupState.password}
            onChange={(e) => {
              setSignupState({
                ...signupState,
                password: e.target.value,
              });
              console.log(signupState);
            }}
          />
          <label>
            <input
              type='radio'
              name='termsAndConditions'
              //   checked={signupState.termsAndConditions}
              value='professor'
              onChange={(e) => {
                setSignupState({
                  ...signupState,
                  role: e.target.value,
                });

                console.log(signupState.role);
              }}
            />
            교수자
          </label>
          <label>
            <input
              type='radio'
              name='termsAndConditions'
              //   checked={signupState.termsAndConditions}
              value='student'
              onChange={(e) => {
                setSignupState({
                  ...signupState,
                  role: e.target.value,
                });

                console.log(signupState.role);
              }}
            />
            학생
          </label>

          <input type='submit' value='SignUp' onClick={handleSignupSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Signup;
