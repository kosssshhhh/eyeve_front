import e from 'express';
import * as React from 'react';
import { useState } from 'react';

import styles from './login.module.css';

interface SetSignup {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignupInfo {
  username: string;
  id: string;
  password: string;
}

function SignUp({ setSignup }: SetSignup) {
  const [signupState, setSignupState] = useState<SignupInfo>({
    username: '',
    id: '',
    password: '',
  });

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // 서버에 회원 정보 넘겨서 DB에 저장하도록
  };

  return (
    <div className={styles.signUpBox}>
      <div className={styles.signUpWrapper}>
        <button
          className={styles.closeButton}
          onClick={() => {
            setSignup((prev) => !prev);
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
          <input type='submit' value='SignUp' onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
