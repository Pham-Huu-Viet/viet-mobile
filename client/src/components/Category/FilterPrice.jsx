import * as Slider from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { capitalize } from "../../function/capitalize";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import {
  setFilteredPrice,
  setSelectedOptionPrice,
} from "../../store/slices/categorySlice";
import { showPrice } from "../../function/showPrice";

export default function FilterPrice({ isResetSlider, setIsResetSlider }) {
  const dispatch = useDispatch();
  const { filteredPrice, listProductsOrigin, selectedOptionPrice } =
    useGetDataStore();

  const optionPrices = [
    "all Prices",
    "under 2 million",
    "from 2 to 7 million",
    "over 7 million",
  ];

  const [openPriceOption, setOpenPriceOption] = useState(false);
  const [allowUpdateSliderValue, setAllowUpdateSliderValue] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sliderValue, setSliderValue] = useState(filteredPrice);

  console.log("minPrice:", minPrice);
  console.log("maxPrice:", maxPrice);
  console.log("sliderValue:", sliderValue);

  // update filteredPrice:
  useEffect(() => {
    // get init max price
    const maxPriceDefault = Math.max(
      ...(listProductsOrigin?.map((product) => Number(product.price)) || []),
    );
    switch (selectedOptionPrice) {
      case "all Prices":
        setMinPrice(0);
        setMaxPrice(maxPriceDefault);
        break;
      case "under 2 million":
        setMinPrice(0);
        setMaxPrice(1999999);
        break;
      case "from 2 to 7 million":
        setMinPrice(2000000);
        setMaxPrice(7000000);
        break;
      case "over 7 million":
        setMinPrice(7000001);
        setMaxPrice(maxPriceDefault);
        break;
      default:
        setMinPrice(0);
        setMaxPrice(maxPriceDefault);
        break;
    }
  }, [selectedOptionPrice, listProductsOrigin]);

  useEffect(() => {
    // get init max price
    const maxPriceDefault = Math.max(
      ...(listProductsOrigin?.map((product) => Number(product.price)) || []),
    );

    if (filteredPrice?.length == 0) {
      setSliderValue([0, maxPriceDefault]);
    }
  }, []);

  // reset SliderValue
  useEffect(() => {
    if (minPrice >= 0 && maxPrice >= 0 && allowUpdateSliderValue) {
      setSliderValue([minPrice, maxPrice]);
      setAllowUpdateSliderValue(false);
    }
  }, [minPrice, maxPrice]);

  // Update FilteredPrice when change Slider
  useEffect(() => {
    dispatch(setFilteredPrice(sliderValue));
  }, [sliderValue]);

  // reset Slider when click Clear filter button:
  useEffect(() => {
    if (isResetSlider) {
      setSliderValue([minPrice, maxPrice]);
      setTimeout(() => {
        setIsResetSlider(false);
      }, 500);
    }
  }, [isResetSlider, minPrice, maxPrice]);

  function handleClickOptionPrice() {
    setOpenPriceOption((prev) => !prev);
  }

  function handleSelectPriceOption(option) {
    dispatch(setSelectedOptionPrice(option));
    setAllowUpdateSliderValue(true);
    setOpenPriceOption(false);
  }

  return (
    <div className="w-full">
      <h5 className="border-border-gray-20 mb-3 border-b pb-2">Price</h5>

      <div className="flex-col-center gap-2">
        {/* Selected option price */}
        <div
          className="btn-in-card flex-center z-1 mb-3"
          onClick={handleClickOptionPrice}
        >
          {capitalize(selectedOptionPrice)}{" "}
          <ChevronDown size={16} className="ml-auto" />
        </div>

        {/* Option Price */}
        <DropDown
          options={optionPrices}
          selectedOption={selectedOptionPrice}
          condition={openPriceOption}
          handleClick={handleSelectPriceOption}
        />

        {/* range price */}
        <div className="flex-between mb-4 w-full">
          <span>{showPrice(filteredPrice?.[0])}</span>
          <span>{showPrice(filteredPrice?.[1])}</span>
        </div>

        {/* Slider */}
        <Slider.Root
          className="relative mb-6 flex w-full touch-none items-center select-none"
          min={minPrice}
          max={maxPrice}
          step={10000}
          value={sliderValue}
          onValueChange={(val) => setSliderValue(val)}
        >
          <Slider.Track className="shadow-neumorphism-dot relative h-1.5 w-full grow rounded-full">
            <Slider.Range className="bg-accent absolute h-full rounded-full" />
          </Slider.Track>
          <Slider.Thumb className="btn-icon-xs bg-gray-20 block h-5 w-5 rounded-full focus:outline-none" />
          <Slider.Thumb className="btn-icon-xs bg-gray-20 block h-5 w-5 rounded-full focus:outline-none" />
        </Slider.Root>
      </div>
    </div>
  );
}
