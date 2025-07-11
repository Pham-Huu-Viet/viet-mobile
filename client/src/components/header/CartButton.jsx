import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CartButton() {
  return (
    <NavLink className="btn-icon">
      <ShoppingCart />
    </NavLink>
  );
}
