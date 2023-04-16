import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 2,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action.payload)
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increaseItem: (state, action) => {
      const itemId = action.payload;
      const cardItem = state.cardItems.find((item) => item.id === itemId);
      cardItem.quantity += 1
    },
    decreaseItem: (state, action) => {
      const itemId = action.payload;
      const cardItem = state.cardItems.find((item) => item.id === itemId);
      cardItem.quantity -= 1;
    },
  },
});

export const { clearCard, removeItem, increaseItem, decreaseItem } =
  cardSlice.actions;

export default cardSlice.reducer;
