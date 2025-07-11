import { Check } from "lucide-react";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import { setFilteredBrands } from "../../store/slices/categorySlice";

export default function FilterBrands() {
  const dispatch = useDispatch();
  const { currentCategory, allProducts, filteredBrands } = useGetDataStore();
  const brands = currentCategory?.brands;

  function handleClickBrand(brand) {
    const newFilteredBrands = filteredBrands.includes(brand)
      ? filteredBrands.filter((b) => b != brand)
      : [...filteredBrands, brand];
    dispatch(setFilteredBrands(newFilteredBrands));
  }

  return (
    <div className="w-full">
      <h5 className="border-border-gray-20 mb-3 border-b pb-2">Brands</h5>

      <div className="flex flex-col gap-2">
        {brands?.map((brand, index) => {
          const countProducts =
            allProducts?.[currentCategory?.id].filter(
              (product) => product.brand == brand,
            ).length || 0;

          return (
            <label
              key={index}
              htmlFor={brand}
              className="flex-start w-full cursor-pointer gap-2"
            >
              <div className="shadow-neumorphism-dot flex-center relative h-4.5 w-4.5 rounded-sm">
                <input
                  id={brand}
                  className="peer sr-only h-0 w-0"
                  type="checkbox"
                  onClick={() => handleClickBrand(brand)}
                />
                {filteredBrands?.includes(brand) && <Check size={12} />}
              </div>
              <span className="select-none">{brand}</span>
              <span className="text-sub-text-2 ml-auto">({countProducts})</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
