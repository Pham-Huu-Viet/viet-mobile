import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import {
  setListProductsSearch,
  setSearchInput,
} from "../../store/slices/categorySlice";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { searchInput, listProductsAll } = useGetDataStore();

  const lastPathRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchInput && listProductsAll) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);

      const allProducts = Object.values(listProductsAll).flat();

      const newListProductsSearch = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchInput?.toLowerCase()),
      );

      dispatch(setListProductsSearch(newListProductsSearch));
    } else {
      backPreSearch();
    }
  }, [searchInput]);

  useEffect(() => {
    if (isOpenSearch) {
      inputRef.current?.focus();
    }
  }, [isOpenSearch]);

  function handleChangeInput(e) {
    dispatch(setSearchInput(e.target.value));
  }

  function backPreSearch() {
    const fallbackPath = lastPathRef.current || "/";
    navigate(fallbackPath);
  }

  function handleOpenSearch() {
    setIsOpenSearch(true);
    if (!searchInput) {
      lastPathRef.current = location.pathname + location.search;
    }
  }

  function handleClearSearch(e) {
    e.stopPropagation();
    setIsOpenSearch(false);
    dispatch(setSearchInput(null));

    backPreSearch();
  }

  return (
    <div
      className={`overflow-hidden transition-all ${!isOpenSearch ? "btn-icon w-[40px] rounded-full" : "input-item w-[240px] rounded-xl"} `}
      onClick={handleOpenSearch}
    >
      {isOpenSearch ? (
        <>
          <input
            type="text"
            className="input-content placeholder:text-sub-text pr-0 pl-4"
            placeholder="Search for products..."
            value={searchInput}
            onChange={(e) => handleChangeInput(e)}
            spellCheck={false}
            ref={inputRef}
          />
          <div
            className="flex-center aspect-square h-full cursor-pointer"
            onClick={(e) => handleClearSearch(e)}
          >
            <X className="h-5 w-5" />
          </div>
        </>
      ) : (
        <Search />
      )}
    </div>
  );
}
