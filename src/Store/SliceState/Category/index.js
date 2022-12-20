import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'category',
  initialState: {
    type: 'NIKE',
    isLoading: true,
  },
  reducers: {
    setType: (state, actions) => {
      state.type = actions.payload;
    },
    setIsloading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});
export const {setType,setIsloading} = slice.actions;
export default slice.reducer;
