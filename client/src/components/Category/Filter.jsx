import { ChevronDown, ChevronUp } from "lucide-react";
import FilterBrands from "./FilterBrands";
import FilterPrice from "./FilterPrice";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import {
  setFilteredBrands,
  setFilteredPrices,
  setListProductsBrand,
  setListProductsPrice,
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
    listProductsBrand,
    listProductsPrice,
    filteredBrands,
    filteredPrices,
    selectedSort,
  } = useGetDataStore();

  const [preFilteredBrands, setPreFilteredBrands] = useState([]);
  const [preFilteredPrices, setPreFilteredPrices] = useState([]);
  const [isResetSlider, setIsResetSlider] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  console.log("preFilteredBrands:", preFilteredBrands);
  console.log("preFilteredPrices:", preFilteredPrices);
  console.log("isFiltered:", isFiltered);

  useEffect(() => {
    if (filteredBrands?.length > 0 || filteredPrices?.length > 0)
      setIsFiltered(true);
  }, [filteredBrands, filteredPrices]);

  useEffect(() => {
    const brandsChanged =
      JSON.stringify(preFilteredBrands) !== JSON.stringify(filteredBrands);
    const pricesChanged =
      JSON.stringify(preFilteredPrices) !== JSON.stringify(filteredPrices);

    if (brandsChanged || pricesChanged) {
      setIsFiltered(false);
    }
  }, [preFilteredBrands, preFilteredPrices, filteredBrands, filteredPrices]);

  // Filter brands
  useEffect(() => {
    if (listProductsOrigin?.length > 0 && preFilteredBrands?.length > 0) {
      const result = listProductsOrigin?.filter((product) =>
        preFilteredBrands.includes(product.brand),
      );
      dispatch(setListProductsBrand(result));
    } else {
      dispatch(setListProductsBrand(listProductsOrigin));
    }
  }, [listProductsOrigin, preFilteredBrands]);

  // Filter prices
  useEffect(() => {
    if (listProductsBrand?.length > 0 && filteredPrices?.length > 0) {
      const result = listProductsBrand?.filter(
        (product) =>
          product.price >= filteredPrices[0] &&
          product.price <= filteredPrices[1],
      );
      dispatch(setListProductsPrice(result));
    } else {
      dispatch(setListProductsPrice(listProductsBrand));
    }
  }, [listProductsBrand, filteredPrices]);

  // Sorting
  useEffect(() => {
    if (selectedSort) {
      let result =
        filteredBrands?.length > 0 || filteredPrices?.length > 0
          ? [...(listProductsPrice || [])]
          : [...(listProductsOrigin || [])];

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

      dispatch(setListProductsRender(result));
    }
  }, [
    listProductsPrice,
    listProductsOrigin,
    selectedSort,
    filteredBrands,
    filteredPrices,
  ]);

  function handleOpenFilter() {
    dispatch(setOpenFilter(!openFilter));
  }

  function handleApplyFilter() {
    dispatch(setFilteredBrands(preFilteredBrands));
    dispatch(setFilteredPrices(preFilteredPrices));
  }

  function handleClearFilter() {
    dispatch(setFilteredBrands([]));
    setPreFilteredBrands([]);
    dispatch(setSelectedOptionPrice("all Prices"));
    dispatch(setFilteredPrices([]));
    // setPreFilteredPrices([0, 0]);
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
          <FilterBrands
            preFilteredBrands={preFilteredBrands}
            setPreFilteredBrands={setPreFilteredBrands}
            preFilteredPrices={preFilteredPrices}
          />

          <FilterPrice
            isResetSlider={isResetSlider}
            setIsResetSlider={setIsResetSlider}
            setPreFilteredPrices={setPreFilteredPrices}
            preFilteredBrands={preFilteredBrands}
          />

          <div
            className={`btn-in-card ${isFiltered ? "text-cancel" : "text-accent"}`}
            onClick={() => {
              if (isFiltered) {
                handleClearFilter();
              } else {
                handleApplyFilter();
              }
            }}
          >
            {isFiltered ? "Clear Filters" : "Apply Filters"}
          </div>
        </>
      )}
    </div>
  );
}
