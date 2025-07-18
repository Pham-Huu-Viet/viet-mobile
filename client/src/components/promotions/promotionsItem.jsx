import { formatDateToDDMMYYYY } from "../../function/formatDateToDDMMYYYY";
import { showPrice } from "../../function/showPrice";

export default function PromotionsItem({ promotion }) {
  return (
    <div className="card flex-col-center">
      <div className="flex-between bg-accent w-full p-4 font-bold text-white">
        <div className="rounded-md bg-[rgb(255,255,255,0.2)] px-4 py-2 text-lg">
          {promotion?.code}
        </div>
        <div className="text-xl">
          {promotion?.type.includes("fixed")
            ? showPrice(promotion?.discount)
            : promotion?.type.includes("percent")
              ? `${promotion?.discount}%`
              : promotion?.code === "FREESHIP"
                ? "Free shipping"
                : promotion?.discount}
        </div>
      </div>

      <div className="flex-col-start text-sub-text w-full flex-1 justify-start gap-2 p-4 text-sm">
        <h3 className="text-text text-lg">{promotion?.description}</h3>
        {promotion?.startDate && (
          <p>Valid from: {formatDateToDDMMYYYY(promotion?.startDate)}</p>
        )}
        {promotion?.endDate && (
          <p>Valid until: {formatDateToDDMMYYYY(promotion?.endDate)}</p>
        )}
        {promotion?.minOrderValue && (
          <p>Minimum order: {showPrice(promotion?.minOrderValue)}</p>
        )}
        {promotion?.maxDiscountValue && (
          <p>Maximum discount: {showPrice(promotion?.maxDiscountValue)}</p>
        )}
      </div>

      <div className="btn-in-card text-accent mt-auto rounded-t-none font-bold">
        Copy code
      </div>
    </div>
  );
}
