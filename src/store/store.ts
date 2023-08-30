import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: 'user1',
  reducers: {
    changeName(state) {},
  },
});

const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export default store;
