import { ChevronDown, ChevronUp } from "lucide-react";
import DropDown from "./DropDown";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import { setSelectedSort, setSizePage } from "../../store/slices/categorySlice";
import { useState } from "react";

export default function Toolbar() {
  const dispatch = useDispatch();
  const { listProductsRender, sizePage, paginatedProducts, selectedSort } =
    useGetDataStore();
  const [openSizePageOption, setOpenSizePageOption] = useState(false);

  const [openSortOption, setOpenSortOption] = useState(false);

  const sizePageOption = ["12 products", "24 products", "36 products"];

  const sortOption = [
    "popular",
    "ascending price",
    "descending price",
    "A-Z name",
    "Z-A name",
  ];

  function handleOpenSizePageOption() {
    setOpenSizePageOption((prev) => !prev);
    setOpenSortOption(false);
  }

  function handleOpenSortOption() {
    setOpenSortOption((prev) => !prev);
    setOpenSizePageOption(false);
  }

  function handleSelectSizePageOption(sizePage) {
    const newSizePage = parseInt(sizePage);

    dispatch(setSizePage(newSizePage));
    setOpenSizePageOption(false);
  }

  function handleSelectSortOption(newSelectedSort) {
    dispatch(setSelectedSort(newSelectedSort));
    setOpenSortOption(false);
  }

  return (
    <div className="flex-between card-static-row h-fit flex-row overflow-visible">
      <div>
        Showing {paginatedProducts?.length} / {listProductsRender?.length}{" "}
        products
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <div
            className="btn-in-card h-8 w-fit"
            onClick={handleOpenSizePageOption}
          >
            {sizePage} products
            {!openSizePageOption ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronUp size={16} />
            )}
          </div>
          <DropDown
            options={sizePageOption}
            selectedOption={`${sizePage} products`}
            condition={openSizePageOption}
            handleClick={handleSelectSizePageOption}
            className="bg-gray-20 absolute top-[calc(100%+8px)] left-0 z-200"
          />
        </div>

        <div className="relative">
          <div className="btn-in-card h-8 w-fit" onClick={handleOpenSortOption}>
            Sort by: {selectedSort}
            {!openSortOption ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronUp size={16} />
            )}
          </div>
          <DropDown
            options={sortOption}
            selectedOption={selectedSort}
            condition={openSortOption}
            handleClick={handleSelectSortOption}
            className="bg-gray-20 absolute top-[calc(100%+8px)] left-0 z-200"
          />
        </div>
      </div>
    </div>
  );
}
