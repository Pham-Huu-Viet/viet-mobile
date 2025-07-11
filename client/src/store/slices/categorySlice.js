import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: null,
  allProducts: null,
  listProductsOrigin: [],
  listProductsRender: [],
  paginatedProducts: [],
  openFilter: false,
  sizePage: 12,
  selectedSort: "popular",
  filteredBrands: [],
  selectedOptionPrice: "all Prices",
  filteredPrice: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      console.log("setCurrentCategory:", action.payload);
      state.currentCategory = action.payload;
    },
    setAllProducts: (state, action) => {
      console.log("setAllProducts:", action.payload);
      state.allProducts = action.payload;
    },
    setListProductsOrigin: (state, action) => {
      console.log("setListProductsOrigin:", action.payload);
      state.listProductsOrigin = action.payload;
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
      console.log("setOpenFilter:", action.payload);
      state.openFilter = action.payload;
    },
    setSizePage: (state, action) => {
      console.log("setSizePage:", action.payload);
      state.sizePage = action.payload;
    },
    setSelectedSort: (state, action) => {
      console.log("setSelectedSort:", action.payload);
      state.selectedSort = action.payload;
    },
    setFilteredBrands: (state, action) => {
      console.log("setFilteredBrands:", action.payload);
      state.filteredBrands = action.payload;
    },
    setSelectedOptionPrice: (state, action) => {
      console.log("setSelectedOptionPrice:", action.payload);
      state.selectedOptionPrice = action.payload;
    },
    setFilteredPrice: (state, action) => {
      console.log("setFilteredPrice:", action.payload);
      state.filteredPrice = action.payload;
    },
  },
});

export const {
  setCurrentCategory,
  setAllProducts,
  setListProductsOrigin,
  setListProductsRender,
  setPaginatedProducts,
  setOpenFilter,
  setSizePage,
  setSelectedSort,
  setFilteredBrands,
  setSelectedOptionPrice,
  setFilteredPrice,
} = categorySlice.actions;

export default categorySlice;
