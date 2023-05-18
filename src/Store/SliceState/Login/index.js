import {createSlice} from '@reduxjs/toolkit';
/**
 * Khởi tạo slice redux toolkit
 * Đây là một cách để tạo state,
 * Ngoài ra có thể dùng
 * @fom useState() để thay thế nhưng chỉ sử dụng ở cấp độ component
 */
const slice = createSlice({
  name: 'loginState',
  initialState: {
    isCheck: true,
    isLoading: false,
    isCheckUser: false,
    isCheckPass: false,
    isAccount: [],
    isCheckRemember: false,
  },
  reducers: {
    getAccount:(state,actions )=>{
      state.isAccount = actions.payload
    },
    setIsCheck: (state, actions) => {
      state.isCheck = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
    setIsCheckUser: (state, actions) => {
      state.isCheckUser = actions.payload;
    },
    setIsCheckPass: (state, actions) => {
      state.isCheckPass = actions.payload;
    },
    setIsCheckRemember: (state, actions) => {
      state.isCheckRemember = actions.payload;
    },
  },
});
export const {
  setIsCheck,
  setIsLoading,
  setIsCheckUser,
  setIsCheckPass,
  setIsCheckRemember,
  getAccount
} = slice.actions;
export default slice.reducer;
