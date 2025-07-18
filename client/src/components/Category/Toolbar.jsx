import {
  ArrowDown,
  ArrowDownAZ,
  ArrowDownZA,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  List,
  ListOrdered,
  ListPlus,
  TrendingUp,
} from "lucide-react";
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

  const sizePageOption = [
    {
      label: "12 products",
      icon: <List size={16} />,
    },
    {
      label: "24 products",
      icon: <ListOrdered size={16} />,
    },
    {
      label: "36 products",
      icon: <ListPlus size={16} />,
    },
  ];

  const sortOption = [
    {
      label: "popular",
      icon: <TrendingUp size={16} />,
    },
    {
      label: "ascending price",
      icon: <ArrowUp size={16} />,
    },
    {
      label: "descending price",
      icon: <ArrowDown size={16} />,
    },
    {
      label: "A-Z name",
      icon: <ArrowDownAZ size={16} />,
    },
    {
      label: "Z-A name",
      icon: <ArrowDownZA size={16} />,
    },
  ];

  const productShowingId =
    paginatedProducts?.[paginatedProducts?.length - 1]?.id;
  const productShowingIndex =
    listProductsRender?.findIndex((product) => product.id == productShowingId) +
    1;

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
        Showing {productShowingIndex} / {listProductsRender?.length} products
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
            className="bg-gray-20 absolute top-[calc(100%+8px)] right-0 z-200 min-w-fit"
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
            className="bg-gray-20 absolute top-[calc(100%+8px)] right-0 z-200 min-w-fit"
          />
        </div>
      </div>
    </div>
  );
}
