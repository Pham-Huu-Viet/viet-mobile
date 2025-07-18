import { ChevronsRight, Trash2 } from "lucide-react";
import { PiPaintBrushHouseholdLight } from "react-icons/pi";
import useGetDataStore from "../../hook/useGetDataStore";
import CartItem from "./CartItem";

export default function CartList() {
  const { listProductsCard } = useGetDataStore();

  return (
    <div className="card-static-col p-0">
      <div className="border-border-gray-20 relative grid w-full grid-cols-[35%_18%_18%_18%_11%] border-b p-4">
        <div className="flex-center">Product</div>
        <div className="flex-center">Price</div>
        <div className="flex-center">Quantity</div>
        <div className="flex-center">Total</div>

        <div className="flex-col-center gap-3">
          <div className="btn-icon-in-card-sm text-accent place-self-center">
            <ChevronsRight size={16} />
          </div>
          <div className="flex-end text-gray-10 absolute right-0 bottom-0 h-5 w-10 cursor-pointer place-self-center rounded-none rounded-tl-full bg-red-200 pr-2 transition-all hover:bg-red-300">
            <PiPaintBrushHouseholdLight size={16} />
          </div>
        </div>
      </div>

      <div className="flex-col-start divide-border-gray-20 w-full gap-2 divide-y">
        {listProductsCard?.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
