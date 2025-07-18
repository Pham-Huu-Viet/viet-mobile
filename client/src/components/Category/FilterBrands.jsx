import { Check } from "lucide-react";
import useGetDataStore from "../../hook/useGetDataStore";

export default function FilterBrands({
  preFilteredBrands,
  setPreFilteredBrands,
  preFilteredPrices,
}) {
  const { listProductsOrigin } = useGetDataStore();
  // const brands = currentCategory?.brands;
  const brands = [
    ...new Set(listProductsOrigin?.map((product) => product.brand)),
  ];

  function handleClickBrand(brand) {
    const newFilteredBrands = preFilteredBrands.includes(brand)
      ? preFilteredBrands.filter((b) => b != brand)
      : [...preFilteredBrands, brand];
    setPreFilteredBrands(newFilteredBrands);
  }

  return (
    <div className="w-full">
      <h5 className="border-border-gray-20 flex-between mb-3 border-b pb-2">
        Brands
      </h5>

      <div className="flex flex-col gap-2">
        {brands?.map((brand, index) => {
          const countProducts =
            listProductsOrigin?.filter(
              (product) =>
                product.brand == brand &&
                product.price >= preFilteredPrices[0] &&
                product.price <= preFilteredPrices[1],
            ).length || 0;

          const isBrandEmpty = countProducts == 0;

          return (
            <label
              key={index}
              htmlFor={brand}
              className={`flex-start w-full gap-2 ${isBrandEmpty ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
            >
              <div className="shadow-neumorphism-dot flex-center relative h-4.5 w-4.5 rounded-sm">
                <input
                  id={brand}
                  className="peer sr-only h-0 w-0"
                  type="checkbox"
                  onClick={() => handleClickBrand(brand)}
                  disabled={isBrandEmpty}
                />
                {preFilteredBrands?.includes(brand) && <Check size={12} />}
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
