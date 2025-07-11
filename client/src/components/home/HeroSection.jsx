import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { slides } from "../../mock/data";

export default function HeroSection() {
  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);
  console.log("currentIndexSlide:", currentIndexSlide);

  function handlePrevSlide() {
    if (currentIndexSlide > 0) {
      setCurrentIndexSlide(currentIndexSlide - 1);
    } else {
      setCurrentIndexSlide(slides?.length - 1);
    }
  }

  function handleNextSlide() {
    if (currentIndexSlide < slides?.length - 1) {
      setCurrentIndexSlide(currentIndexSlide + 1);
    } else {
      setCurrentIndexSlide(0);
    }
  }

  return (
    <div className="section-container">
      <div className="section-content gap-2">
        {/* Text */}
        <div className="flex-col-start flex-1 flex-col gap-6">
          <h1 className="text-4xl">Latest technology for modern life</h1>
          <p className="text-lg">
            Explore a collection of genuine technology products at preferential
            prices and the best after-sales service.
          </p>
          <div className="flex-start gap-4">
            <NavLink className="btn text-accent h-12">Shop Now</NavLink>
            <NavLink className="btn h-12">View Promotions</NavLink>
          </div>
        </div>

        {/* Carousel */}
        <div className="bg-gray-20 shadow-neumorphism-sm relative h-100 flex-1 overflow-hidden rounded-xl">
          {/* Carousel content */}
          <div
            className="transition-base flex h-full"
            style={{ transform: `translateX(-${currentIndexSlide * 100}%)` }}
          >
            {slides.map((item, index) => (
              <div key={index} className="h-full flex-shrink-0 basis-full">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel button */}
          <div className="flex-center absolute top-1/2 left-0 w-full -translate-y-1/2 justify-between px-4">
            <div className="btn-icon" onClick={handlePrevSlide}>
              <ChevronLeft />
            </div>
            <div className="btn-icon" onClick={handleNextSlide}>
              <ChevronRight />
            </div>
          </div>

          {/* Dots */}
          <div className="flex-center absolute bottom-4 left-0 w-full gap-2 px-4">
            {slides.map((item, index) => {
              const isCurrentDot = item.id == currentIndexSlide;
              return (
                <div
                  key={index}
                  className="shadow-neumorphism-dot transition-base h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: isCurrentDot ? "var(--color-accent)" : "",
                    width: isCurrentDot ? "20px" : "",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
