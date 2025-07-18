import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPromotions: [],
};

const promotionsSlice = createSlice({
  name: "promotionsSlice",
  initialState,
  reducers: {
    setListPromotions: (state, action) => {
      console.log("setListPromotions:", action.payload);
      state.listPromotions = action.payload;
    },
  },
});

export const { setListPromotions } = promotionsSlice.actions;

export default promotionsSlice;
