import { useEffect } from "react";
import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import { listProductsCartMock } from "../mock/dataCartPage";
import { useDispatch } from "react-redux";
import { setListProductsCard } from "../store/slices/cardSlice";

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setListProductsCard(listProductsCartMock));
  }, []);

  return (
    <div className="section-container bg-gray-20 flex-1">
      <div className="section-content flex-col">
        <h1 className="mb-8 text-center">Your cart</h1>

        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <CartList />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
