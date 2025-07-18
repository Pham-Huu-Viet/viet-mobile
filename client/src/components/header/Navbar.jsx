import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";
import useGetDataStore from "../../hook/useGetDataStore";

export default function NavBar() {
  const { categoryName } = useParams();
  const { searchInput } = useGetDataStore();

  const listNavItem = ["Phones", "Tablets", "Headphones", "Accessories"];

  return (
    <div className="flex gap-2">
      {listNavItem?.map((item, index) => {
        const isActive = !searchInput
          ? categoryName?.toLowerCase() === item.toLowerCase()
          : false;

        return (
          <NavLink
            key={index}
            to={`/category/${item.toLowerCase()}`}
            className="hover:text-accent transition-base relative flex items-center justify-center px-4 text-sm select-none"
          >
            {item}

            {isActive && (
              <motion.div
                layoutId="underline"
                className="bg-accent absolute bottom-0 left-0 h-1 w-full rounded-full"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
