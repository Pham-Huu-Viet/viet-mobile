import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // filter
  searchUser: "",
  userRole: "All Roles",
  userStatus: "All Status",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setSearchUser: (state, action) => {
      console.log("setSearchUser:", action.payload);
      state.searchUser = action.payload;
    },
    setUserRole: (state, action) => {
      console.log("setUserRole:", action.payload);
      state.userRole = action.payload;
    },
    setUserStatus: (state, action) => {
      console.log("setUserStatus:", action.payload);
      state.userStatus = action.payload;
    },
  },
});

export const { setSearchUser, setUserRole, setUserStatus } = userSlice.actions;

export default userSlice;
