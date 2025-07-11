import { useSelector } from "react-redux";

export default function useGetDataStore() {
  // categorySlice:
  const currentCategory = useSelector(
    (state) => state.categorySlice.currentCategory,
  );
  const allProducts = useSelector((state) => state.categorySlice.allProducts);
  const listProductsOrigin = useSelector(
    (state) => state.categorySlice.listProductsOrigin,
  );
  const listProductsRender = useSelector(
    (state) => state.categorySlice.listProductsRender,
  );
  const paginatedProducts = useSelector(
    (state) => state.categorySlice.paginatedProducts,
  );
  const openFilter = useSelector((state) => state.categorySlice.openFilter);
  const sizePage = useSelector((state) => state.categorySlice.sizePage);
  const selectedSort = useSelector((state) => state.categorySlice.selectedSort);
  const filteredBrands = useSelector(
    (state) => state.categorySlice.filteredBrands,
  );
  const selectedOptionPrice = useSelector(
    (state) => state.categorySlice.selectedOptionPrice,
  );
  const filteredPrice = useSelector(
    (state) => state.categorySlice.filteredPrice,
  );

  return {
    // categorySlice:
    currentCategory,
    allProducts,
    listProductsOrigin,
    listProductsRender,
    paginatedProducts,
    openFilter,
    sizePage,
    selectedSort,
    filteredBrands,
    selectedOptionPrice,
    filteredPrice,
  };
}
