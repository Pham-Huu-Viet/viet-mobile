import { ShoppingCart, Heart } from "lucide-react";
import { showPrice } from "../../function/showPrice";

export default function ProductItem({ product }) {
  return (
    <div className="card h-full cursor-pointer overflow-hidden">
      <div
        className="aspect-square w-full items-start overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${product?.image})` }}
      ></div>

      <div className="flex-col-start z-1 w-full p-4">
        <h5>{product?.name}</h5>
        <p className="font-bold">{showPrice(product.price)}</p>
      </div>

      <div className="z-1 w-full px-4 pt-0 pb-4">
        <div className="btn-in-card gap-2 text-sm">
          <ShoppingCart size={16} /> Add to Cart
        </div>
      </div>

      <div className="btn-icon-in-card absolute top-3 right-3">
        <Heart />
      </div>
    </div>
  );
}
