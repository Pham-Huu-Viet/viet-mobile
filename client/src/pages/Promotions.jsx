import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setListPromotions } from "../store/slices/promotionsSlice";
import { listPromotionsMock } from "../mock/dataPromotionsPage";
import useGetDataStore from "../hook/useGetDataStore";
import PromotionsItem from "../components/promotions/promotionsItem";

export default function Promotions() {
  const dispatch = useDispatch();
  const { listPromotions } = useGetDataStore();

  useEffect(() => {
    dispatch(setListPromotions(listPromotionsMock));
  }, []);

  return (
    <div className="section-container bg-gray-20 flex-1">
      <div className="section-content flex-col">
        <h1 className="mb-2 text-center">Special Promotion</h1>
        <p className="text-sub-text mb-12 text-center text-lg">
          Discover exciting offers from VietMobile
        </p>

        <div className="grid grid-cols-3 gap-6">
          {listPromotions?.map((promotion) => (
            <PromotionsItem promotion={promotion} />
          ))}
        </div>
      </div>
    </div>
  );
}
