import { configureStore } from '@reduxjs/toolkit';

import showSignupSlice from './modules/showSignupSlice';
import isLoginSlice from './modules/isLoginSlice';

export const store = configureStore({
  reducer: {
    showSignup: showSignupSlice,
    isLogin: isLoginSlice,
  },
});
