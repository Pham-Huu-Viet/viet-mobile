import { ChevronDown, ChevronUp } from "lucide-react";
import FilterBrands from "./FilterBrands";
import FilterPrice from "./FilterPrice";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import {
  setFilteredBrands,
  setFilteredPrice,
  setListProductsRender,
  setOpenFilter,
  setSelectedOptionPrice,
} from "../../store/slices/categorySlice";
import { useEffect, useState } from "react";

export default function Filter() {
  const dispatch = useDispatch();
  const {
    openFilter,
    listProductsOrigin,
    filteredBrands,
    filteredPrice,
    selectedSort,
  } = useGetDataStore();

  const [isResetSlider, setIsResetSlider] = useState(false);

  console.log("listProductsOrigin:", listProductsOrigin);

  useEffect(() => {
    let result = Array.isArray(listProductsOrigin)
      ? [...listProductsOrigin]
      : [];

    // Filter brands
    if (filteredBrands?.length > 0) {
      result = result?.filter((product) =>
        filteredBrands.includes(product.brand),
      );
    }

    // Filter prices
    if (filteredPrice?.length > 0) {
      result = result?.filter(
        (product) =>
          product.price >= filteredPrice[0] &&
          product.price <= filteredPrice[1],
      );
    }

    // Sorting
    if (selectedSort) {
      switch (selectedSort) {
        case "popular":
          break;
        case "ascending price":
          result = [...result].sort(
            (a, b) => Number(a.price) - Number(b.price),
          );
          break;
        case "descending price":
          result = [...result].sort(
            (a, b) => Number(b.price) - Number(a.price),
          );
          break;
        case "A-Z name":
          result = [...result].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A name":
          result = [...result].sort((a, b) => b.name.localeCompare(a.name));
          break;

        default:
          break;
      }
    }

    dispatch(setListProductsRender(result));
  }, [listProductsOrigin, filteredBrands, filteredPrice, selectedSort]);

  function handleOpenFilter() {
    dispatch(setOpenFilter(!openFilter));
  }

  function handleClearFilter() {
    dispatch(setFilteredBrands([]));
    dispatch(setSelectedOptionPrice("all Prices"));
    setIsResetSlider(true);
  }

  return (
    <div
      className={`card-static-col items-start gap-4 select-none ${openFilter ? "h-fit" : "flex h-full items-center"}`}
    >
      <div
        className="flex-between mt-0.5 w-full cursor-pointer"
        onClick={handleOpenFilter}
      >
        <h4 className="font-semibold">Filter</h4>
        {!openFilter ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </div>

      {openFilter && (
        <>
          <FilterBrands />
          <FilterPrice
            isResetSlider={isResetSlider}
            setIsResetSlider={setIsResetSlider}
          />
          <div className="btn-in-card" onClick={() => handleClearFilter()}>
            Clear Filters
          </div>
        </>
      )}
    </div>
  );
}
