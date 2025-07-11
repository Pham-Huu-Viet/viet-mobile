import { useParams } from "react-router-dom";
import Filter from "../components/Category/Filter";
import { allProductsMock, categoriesMock } from "../mock/dataCategoryPage";
import { useDispatch } from "react-redux";
import {
  setAllProducts,
  setCurrentCategory,
  setListProductsOrigin,
  setPaginatedProducts,
} from "../store/slices/categorySlice";
import Toolbar from "../components/Category/Toolbar";
import useGetDataStore from "../hook/useGetDataStore";
import ProductItem from "../components/home/ProductItem";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Category() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const {
    allProducts,
    currentCategory,
    listProductsOrigin,
    listProductsRender,
    paginatedProducts,
    sizePage,
    openFilter,
  } = useGetDataStore();

  const dataCategories = categoriesMock;
  const dataAllProducts = allProductsMock;

  useEffect(() => {
    const newCurrentCategory = dataCategories?.[categoryName];
    dispatch(setCurrentCategory(newCurrentCategory));

    dispatch(setAllProducts(dataAllProducts));
  }, [categoryName]);

  const [pageCount, setPageCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // update listProductsOrigin
  useEffect(() => {
    const productsOfCategory = allProducts?.[categoryName];
    dispatch(setListProductsOrigin(productsOfCategory));
  }, [allProducts, categoryName]);

  // update pageCount
  useEffect(() => {
    const newPageCount = Math.ceil(listProductsRender?.length / sizePage);
    setPageCount(newPageCount);
  }, [listProductsRender, sizePage]);

  // update PaginatedProducts
  useEffect(() => {
    const startIndex = (currentPage - 1) * sizePage;
    const endIndex = startIndex + sizePage;

    console.log("endIndex:", endIndex);
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
          <h1 className="mb-2">{currentCategory?.name}</h1>
          <p className="text-sub-text">{currentCategory?.description}</p>
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
              className={`${openFilter ? "grid-cols-3" : "grid-cols-4"} mb-6 grid w-full gap-6`}
            >
              {paginatedProducts?.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))}
            </div>

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
