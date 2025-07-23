import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import categorySlice from "./slices/categorySlice";
import cardSlice from "./slices/cardSlice";
import promotionsSlice from "./slices/promotionsSlice";
import userSlice from "./slices/admin/userSlice";

const store = configureStore({
  reducer: {
    categorySlice: categorySlice.reducer,
    cardSlice: cardSlice.reducer,
    promotionsSlice: promotionsSlice.reducer,

    // admin
    userSlice: userSlice.reducer,
  },
});

export default function StoreProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
