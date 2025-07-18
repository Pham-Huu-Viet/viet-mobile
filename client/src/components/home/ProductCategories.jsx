import { categories } from "../../mock/data";
import ProductCategoriesItem from "./ProductCategoriesItem";

export default function ProductCategories() {
  return (
    <div className="section-container bg-gray-20 py-12 pb-20">
      <div className="section-content flex-col gap-8">
        <h1>Product Categories</h1>
        <div className="flex-center zigzag gap-6">
          {categories?.map((item, index) => (
            <ProductCategoriesItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
