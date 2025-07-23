import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import { setSelectedSort, setSizePage } from "../../store/slices/categorySlice";
import MenuDropDown from "../ui/MenuDropDown";
import { sizePageOption, sortOption } from "../../config/category";

export default function Toolbar() {
  const dispatch = useDispatch();
  const { listProductsRender, sizePage, paginatedProducts, selectedSort } =
    useGetDataStore();

  const productShowingId =
    paginatedProducts?.[paginatedProducts?.length - 1]?.id;
  const productShowingIndex =
    listProductsRender?.findIndex((product) => product.id == productShowingId) +
    1;

  function handleSelectSizePageOption(sizePage) {
    const newSizePage = parseInt(sizePage);
    dispatch(setSizePage(newSizePage));
  }

  function handleSelectSortOption(newSelectedSort) {
    dispatch(setSelectedSort(newSelectedSort));
  }

  return (
    <div className="flex-between card-static-row h-fit flex-row overflow-visible">
      <div>
        Showing {productShowingIndex} / {listProductsRender?.length} products
      </div>
      <div className="flex gap-4">
        {/* Size page */}
        <MenuDropDown
          options={sizePageOption}
          selectedOption={`${sizePage} products`}
          onClickOption={handleSelectSizePageOption}
        />

        {/* Sorting */}
        <MenuDropDown
          subTitle="Sorting by: "
          options={sortOption}
          selectedOption={selectedSort}
          onClickOption={handleSelectSortOption}
        />
      </div>
    </div>
  );
}
