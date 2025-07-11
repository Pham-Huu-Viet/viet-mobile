import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import ProductCategories from "../components/home/ProductCategories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
    </div>
  );
}
