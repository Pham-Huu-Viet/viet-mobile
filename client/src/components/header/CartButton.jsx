import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CartButton() {
  return (
    <NavLink to={"/cart"} className="btn-icon">
      <ShoppingCart />
    </NavLink>
  );
}
