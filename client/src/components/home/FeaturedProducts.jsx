import { featuredProducts } from "../../mock/data";
import ProductItem from "./ProductItem";

export default function FeaturedProducts({ item }) {
  return (
    <div className="section-container py-12">
      <div className="section-content flex-col gap-8">
        <h1>Featured Products</h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {featuredProducts?.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
