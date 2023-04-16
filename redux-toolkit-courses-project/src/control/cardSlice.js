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
});

console.log(cardSlice);


export default cardSlice.reducer;