import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import categorySlice from "./slices/categorySlice";
import cardSlice from "./slices/cardSlice";
import promotionsSlice from "./slices/promotionsSlice";

const store = configureStore({
  reducer: {
    categorySlice: categorySlice.reducer,
    cardSlice: cardSlice.reducer,
    promotionsSlice: promotionsSlice.reducer,
  },
});

export default function StoreProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
