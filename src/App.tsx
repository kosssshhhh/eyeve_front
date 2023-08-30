import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './login.module.css';

import LoginPage from './pages/loginPage/LoginPage';
import TeacherPage from './pages/TeacherPage/TeacherPage';

function App(): JSX.Element {
  return (
    <div className='App'>
      <LoginPage></LoginPage>
      {/* <TeacherPage></TeacherPage> */}
    </div>
  );
}

export default App;
