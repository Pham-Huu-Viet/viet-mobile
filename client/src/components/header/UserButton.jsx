import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function UserButton() {
  return (
    <NavLink className="btn-icon">
      <User />
    </NavLink>
  );
}
