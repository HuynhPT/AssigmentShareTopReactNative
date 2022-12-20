import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'Home',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsloading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});
export const {setIsloading} = slice.actions;
export default slice.reducer;
