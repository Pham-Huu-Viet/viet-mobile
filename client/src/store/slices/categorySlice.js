import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: null,
  listProductsAll: null,
  listProductsCategory: [],
  listProductsSearch: [],
  listProductsOrigin: [],
  listProductsBrand: [],
  listProductsPrice: [],
  listProductsRender: [],
  paginatedProducts: [],
  openFilter: false,
  sizePage: 12,
  selectedSort: "popular",
  filteredBrands: [],
  selectedOptionPrice: "all Prices",
  filteredPrices: [],
  searchInput: "",
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      console.log("setCurrentCategory:", action.payload);
      state.currentCategory = action.payload;
    },
    setListProductsAll: (state, action) => {
      console.log("setListProductsAll:", action.payload);
      state.listProductsAll = action.payload;
    },
    setListProductsCategory: (state, action) => {
      console.log("setListProductsCategory:", action.payload);
      state.listProductsCategory = action.payload;
    },
    setListProductsSearch: (state, action) => {
      console.log("setListProductsSearch:", action.payload);
      state.listProductsSearch = action.payload;
    },
    setListProductsOrigin: (state, action) => {
      console.log("setListProductsOrigin:", action.payload);
      state.listProductsOrigin = action.payload;
    },
    setListProductsBrand: (state, action) => {
      console.log("setListProductsBrand:", action.payload);
      state.listProductsBrand = action.payload;
    },
    setListProductsPrice: (state, action) => {
      console.log("setListProductsPrice:", action.payload);
      state.listProductsPrice = action.payload;
    },
    setListProductsRender: (state, action) => {
      console.log("setListProductsRender:", action.payload);
      state.listProductsRender = action.payload;
    },
    setPaginatedProducts: (state, action) => {
      console.log("setPaginatedProducts:", action.payload);
      state.paginatedProducts = action.payload;
    },
    setOpenFilter: (state, action) => {
      // console.log("setOpenFilter:", action.payload);
      state.openFilter = action.payload;
    },
    setSizePage: (state, action) => {
      console.log("setSizePage:", action.payload);
      state.sizePage = action.payload;
    },
    setSelectedSort: (state, action) => {
      // console.log("setSelectedSort:", action.payload);
      state.selectedSort = action.payload;
    },
    setFilteredBrands: (state, action) => {
      // console.log("setFilteredBrands:", action.payload);
      state.filteredBrands = action.payload;
    },
    setSelectedOptionPrice: (state, action) => {
      // console.log("setSelectedOptionPrice:", action.payload);
      state.selectedOptionPrice = action.payload;
    },
    setFilteredPrices: (state, action) => {
      console.log("setFilteredPrices:", action.payload);
      state.filteredPrices = action.payload;
    },
    setSearchInput: (state, action) => {
      console.log("setSearchInput:", action.payload);
      state.searchInput = action.payload;
    },
  },
});

export const {
  setCurrentCategory,
  setListProductsAll,
  setListProductsCategory,
  setListProductsSearch,
  setListProductsOrigin,
  setListProductsBrand,
  setListProductsPrice,
  setListProductsRender,
  setPaginatedProducts,
  setOpenFilter,
  setSizePage,
  setSelectedSort,
  setFilteredBrands,
  setSelectedOptionPrice,
  setFilteredPrices,
  setSearchInput,
} = categorySlice.actions;

export default categorySlice;
