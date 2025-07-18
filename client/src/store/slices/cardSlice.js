import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProductsCard: [],
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    setListProductsCard: (state, action) => {
      console.log("setListProductsCard:", action.payload);
      state.listProductsCard = action.payload;
    },
  },
});

export const { setListProductsCard } = cardSlice.actions;

export default cardSlice;
