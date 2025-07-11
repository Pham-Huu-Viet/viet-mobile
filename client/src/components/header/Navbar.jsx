import { NavLink } from "react-router-dom";

export default function NavBar() {
  const listNavItem = ["Phones", "Tablets", "Headphones", "Accessories"];

  return (
    <div className="flex gap-2">
      {listNavItem?.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-4 text-sm select-none"
        >
          <NavLink to={`/category/${item.toLowerCase()}`}>{item}</NavLink>
        </div>
      ))}
    </div>
  );
}
