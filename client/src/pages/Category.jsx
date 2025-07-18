import { useParams } from "react-router-dom";
import Filter from "../components/category/Filter";
import { listProductsAllMock, categoriesMock } from "../mock/dataCategoryPage";
import { useDispatch } from "react-redux";
import {
  setListProductsAll,
  setCurrentCategory,
  setListProductsCategory,
  setPaginatedProducts,
  setListProductsOrigin,
} from "../store/slices/categorySlice";
import Toolbar from "../components/category/Toolbar";
import useGetDataStore from "../hook/useGetDataStore";
import ProductItem from "../components/home/ProductItem";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Category() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const {
    listProductsAll,
    currentCategory,
    listProductsCategory,
    listProductsSearch,
    listProductsRender,
    paginatedProducts,
    sizePage,
    openFilter,
    searchInput,
  } = useGetDataStore();

  console.log("listProductsSearch:", listProductsSearch);

  // get data mock
  const dataCategories = categoriesMock;
  const datalistProductsAll = listProductsAllMock;

  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Update datalistProductsAll
  useEffect(() => {
    dispatch(setListProductsAll(datalistProductsAll));
  }, []);

  // Update CurrentCategory
  useEffect(() => {
    const newCurrentCategory = dataCategories?.[categoryName];
    dispatch(setCurrentCategory(newCurrentCategory));
  }, [categoryName]);

  // update listProductsCategory
  useEffect(() => {
    const productsOfCategory = listProductsAll?.[categoryName];
    dispatch(setListProductsCategory(productsOfCategory));
  }, [listProductsAll, categoryName]);

  // update listProductsOrigin
  useEffect(() => {
    const newListProductsOrigin =
      searchInput?.length > 0 ? listProductsSearch : listProductsCategory;

    dispatch(setListProductsOrigin(newListProductsOrigin));
  }, [listProductsCategory, listProductsSearch, searchInput]);

  // update pageCount
  useEffect(() => {
    const newPageCount = Math.ceil(listProductsRender?.length / sizePage) || 1;
    setPageCount(newPageCount);
  }, [listProductsRender, sizePage]);

  // update PaginatedProducts
  useEffect(() => {
    const startIndex = (currentPage - 1) * sizePage;
    const endIndex = startIndex + sizePage;

    // console.log("endIndex:", endIndex);
    const newPaginatedProducts = listProductsRender?.slice(
      startIndex,
      endIndex,
    );

    dispatch(setPaginatedProducts(newPaginatedProducts));
  }, [listProductsRender, currentPage, sizePage]);

  return (
    <div className="section-container bg-gray-20 flex-1">
      <div className="section-content flex-col">
        <div className="mb-8">
          <h1 className="mb-2">
            {searchInput?.length > 0 ? "Search" : currentCategory?.name}
          </h1>
          <p className="text-sub-text">
            {searchInput?.length > 0
              ? `${listProductsSearch?.length} product${listProductsSearch?.length >= 2 ? "s" : ""} found`
              : currentCategory?.description}
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-[auto_1fr] gap-6">
          {/* Filter */}
          <div
            className={`${openFilter ? "row-end-[-1]" : ""} col-span-1 col-start-1 row-start-1`}
          >
            <Filter />
          </div>

          {/* Toolbar */}
          <div className="col-span-3 row-start-1">
            <Toolbar />
          </div>

          {/* Products list */}
          <div
            className={`${openFilter ? "col-span-3 col-start-2" : "col-span-4 col-start-1"} flex-col-center row-start-2 w-full`}
          >
            <div
              className={`${openFilter ? "grid-cols-3" : "grid-cols-4"} ${paginatedProducts?.length > 0 ? "mb-6" : ""} grid w-full gap-6`}
            >
              {paginatedProducts?.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))}
            </div>

            {paginatedProducts?.length == 0 && (
              <div className="flex-center text-gray-20 text-neumorphism mb-6 h-full w-full text-4xl font-extrabold">
                No products found
              </div>
            )}

            {/* page pagination */}
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              containerClassName="flex-center gap-2 mt-auto ml-0 mb-0"
              pageClassName="btn-in-card h-8 w-8 p-0 rounded-md"
              pageLinkClassName="w-full h-full flex-center"
              activeClassName="shadow-neumorphism-xs-active text-accent"
              breakClassName="px-2"
              previousLabel={<ChevronLeft size={16} />}
              nextLabel={<ChevronRight size={16} />}
              previousClassName="btn-in-card h-8 w-8 p-0 rounded-md "
              previousLinkClassName="w-full h-full flex-center"
              nextClassName="btn-in-card h-8 w-8 p-0 rounded-md"
              nextLinkClassName="w-full h-full flex-center"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
