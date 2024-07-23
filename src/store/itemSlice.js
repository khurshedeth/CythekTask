import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentItem: null,
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const { setItems, setCurrentItem } = itemSlice.actions;
export default itemSlice.reducer;
