import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    categorySlice: categorySlice.reducer,
  },
});

export default function StoreProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
