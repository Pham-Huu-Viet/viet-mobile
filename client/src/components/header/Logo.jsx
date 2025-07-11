import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <NavLink to={"/"}>
        <span className="text-xl font-semibold">VietMobile</span>
      </NavLink>
    </div>
  );
}
