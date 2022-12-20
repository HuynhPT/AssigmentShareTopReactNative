import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'cart',
  initialState: {
    buyCart: [],
  },
  reducers: {
    setBuyCart: (state, actions) => {
      state.buyCart.push(actions.payload);
    },
    removeCart: (state, actions) => {
      const itemId = actions.payload;
      state.buyCart = state.buyCart.filter(i => i.id !== itemId);
    },
  },
});
export const {setBuyCart, removeCart} = slice.actions;
export default slice.reducer;
