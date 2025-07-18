import { useSelector } from "react-redux";

export default function useGetDataStore() {
  // categorySlice:
  const currentCategory = useSelector(
    (state) => state.categorySlice.currentCategory,
  );
  const listProductsAll = useSelector(
    (state) => state.categorySlice.listProductsAll,
  );
  const listProductsCategory = useSelector(
    (state) => state.categorySlice.listProductsCategory,
  );
  const listProductsSearch = useSelector(
    (state) => state.categorySlice.listProductsSearch,
  );
  const listProductsOrigin = useSelector(
    (state) => state.categorySlice.listProductsOrigin,
  );
  const listProductsBrand = useSelector(
    (state) => state.categorySlice.listProductsBrand,
  );
  const listProductsPrice = useSelector(
    (state) => state.categorySlice.listProductsPrice,
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
  const filteredPrices = useSelector(
    (state) => state.categorySlice.filteredPrices,
  );
  const searchInput = useSelector((state) => state.categorySlice.searchInput);

  // cardSlice:
  const listProductsCard = useSelector(
    (state) => state.cardSlice.listProductsCard,
  );

  // promotionsSlice:
  const listPromotions = useSelector(
    (state) => state.promotionsSlice.listPromotions,
  );

  return {
    // categorySlice:
    currentCategory,
    listProductsAll,
    listProductsCategory,
    listProductsSearch,
    listProductsOrigin,
    listProductsBrand,
    listProductsPrice,
    listProductsRender,
    paginatedProducts,
    openFilter,
    sizePage,
    selectedSort,
    filteredBrands,
    selectedOptionPrice,
    filteredPrices,
    searchInput,

    // cardSlice:
    listProductsCard,

    // promotionsSlice:
    listPromotions,
  };
}
