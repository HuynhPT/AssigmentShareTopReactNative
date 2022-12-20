import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'favorite',
  initialState: {
    dataFavorite: [],
  },
  reducers: {
    addFavorite: (state, actions) => {
      state.dataFavorite.push(actions.payload);
    },
    removeFavorite: (state, actions) => {
      const itemId = actions.payload;
      state.dataFavorite = state.dataFavorite.filter(i => i.id !== itemId);
    },
  },
});
export const {addFavorite, removeFavorite} = slice.actions;
export default slice.reducer;
