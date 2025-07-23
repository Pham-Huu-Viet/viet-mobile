import { TbShoppingBagDiscount } from "react-icons/tb";
import { ImGift } from "react-icons/im";
import { IoQrCodeOutline } from "react-icons/io5";
import { useState } from "react";
import { showPrice } from "../../function/showPrice";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PaymentMethod from "./PaymentMethod";
import InputItem from "../ui/InputItem";

export default function CartSummary() {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="card-static-col h-fit gap-6">
      <h2 className="mb-6 text-xl">Order Summary</h2>

      <div className="flex-between w-full">
        <span>Subtotal</span>
        <span>{showPrice(20000000)}</span>
      </div>

      <div className="flex-between w-full">
        <span>Shipping fee</span>
        <span>Free</span>
      </div>

      <div className="border-border-gray-20 w-full border-b"></div>

      <div className="flex-between w-full font-bold">
        <span>Total</span>
        <span className="text-accent text-xl">{showPrice(34970000)}</span>
      </div>

      <div className="flex-between gap-4">
        {/* discountCode */}
        <InputItem
          className="!h-10 flex-1"
          id="discountCode"
          placeholder="Discount code"
          type="text"
          value={discountCode}
          onChange={setDiscountCode}
          iconLeft={
            <TbShoppingBagDiscount strokeWidth={1.2} className="h-6 w-6" />
          }
        />
        <div className="btn-in-card w-fit">Apply</div>
      </div>

      <div className="flex-col-center gap-3">
        <p className="text-sm">We accept (choose one):</p>
        <div className="flex-center gap-4">
          <PaymentMethod icon={<ImGift />} label={"COD"} />
          <PaymentMethod icon={<IoQrCodeOutline />} label={"QR"} />
        </div>
      </div>

      <div className="btn-in-card text-accent font-bold">
        Checkout <ArrowRight size={16} className="ml-2" />
      </div>

      <div className="flex-center gap-2 text-sm">
        <ArrowLeft size={16} /> continue shopping
      </div>
    </div>
  );
}
