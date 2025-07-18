import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { showPrice } from "../../function/showPrice";
import { useRef } from "react";

export default function CartItem({ product }) {
  const quantityRef = useRef(null);

  function handleQuantityInput(e) {
    const value = e.currentTarget.textContent;
    console.log("new quantity:", value);
  }

  return (
    <div className="relative grid w-full grid-cols-[35%_18%_18%_18%_11%] items-center p-4">
      <div className="flex-start gap-4 p-1">
        <div className="card-static-row h-20 w-20 flex-shrink-0"></div>
        <div>{product.name}</div>
      </div>

      <div className="p-1 text-right break-words whitespace-normal">
        {showPrice(product.price)}
      </div>

      <div className="flex-center h-10 p-1">
        <Minus size={16} className="h-full cursor-pointer" />
        <div
          contentEditable
          suppressContentEditableWarning={true}
          inputMode="numeric"
          ref={quantityRef}
          onInput={handleQuantityInput}
          className="input-item mx-2 h-full rounded-sm px-4 pt-0.5"
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          1
        </div>
        <Plus size={16} className="h-full cursor-pointer" />
      </div>

      <div className="p-1 text-right">
        <div className="break-words whitespace-normal">
          {showPrice(product?.price * product?.quantity)}
        </div>
      </div>

      <div className="flex-col-center gap-3">
        <div className="btn-icon-in-card-sm text-accent place-self-center">
          <ArrowRight size={16} />
        </div>
        <div className="flex-end text-gray-10 absolute right-0 bottom-0 h-5 w-10 cursor-pointer place-self-center rounded-none rounded-tl-full bg-red-200 pr-2 transition-all hover:bg-red-300">
          <Trash2 size={16} />
        </div>
      </div>
    </div>
  );
}
