import * as Slider from "@radix-ui/react-slider";
import { useEffect, useState, useRef } from "react";
import useGetDataStore from "../../hook/useGetDataStore";
import { useDispatch } from "react-redux";
import { setSelectedOptionPrice } from "../../store/slices/categorySlice";
import { showPrice } from "../../function/showPrice";
import MenuDropDown from "../ui/MenuDropDown";
import { optionPrices } from "../../config/category";

export default function FilterPrice({
  isResetSlider,
  setIsResetSlider,
  setPreFilteredPrices,
  preFilteredBrands,
}) {
  const dispatch = useDispatch();
  const { filteredPrices, listProductsBrand, selectedOptionPrice } =
    useGetDataStore();

  const [allowUpdateSliderValue, setAllowUpdateSliderValue] = useState(false);

  const [minMaxPrice, setMinMaxPrice] = useState([0, 0]);
  const [sliderValue, setSliderValue] = useState(filteredPrices);

  console.log("minMaxPrice:", minMaxPrice);
  console.log("sliderValue:", sliderValue);

  const debounceRef = useRef(null);

  // Cập nhật minMaxPrice theo selectedOptionPrice
  useEffect(() => {
    const maxPriceDefault = Math.max(
      ...(listProductsBrand?.map((product) => Number(product.price)) || []),
    );

    switch (selectedOptionPrice) {
      case "under 2 million":
        setMinMaxPrice([0, 1999999]);
        break;
      case "from 2 to 7 million":
        setMinMaxPrice([2000000, 7000000]);
        break;
      case "over 7 million":
        setMinMaxPrice([7000001, maxPriceDefault]);
        break;
      default:
        setMinMaxPrice([0, maxPriceDefault]);
        console.log(666);
        break;
    }
  }, [selectedOptionPrice, listProductsBrand, preFilteredBrands]);

  // Nếu User click chọn option Price -> allowUpdateSliderValue được bật, cập nhật sliderValue
  useEffect(() => {
    if (allowUpdateSliderValue && minMaxPrice[0] >= 0 && minMaxPrice[1] >= 0) {
      console.log(123);
      setSliderValue(minMaxPrice);
      setTimeout(() => {
        setAllowUpdateSliderValue(false);
      }, 500);
    }
  }, [minMaxPrice, allowUpdateSliderValue]);

  // If filter Brands -> change SliderValue
  useEffect(() => {
    if (minMaxPrice[0] >= 0 && minMaxPrice[1] >= 0) {
      console.log(1234);
      setSliderValue(minMaxPrice);
    }
  }, [minMaxPrice, listProductsBrand]);

  // Chỉ định giá trị khởi tạo khi filteredPrice rỗng (tải trang lần đầu)
  useEffect(() => {
    const maxPriceDefault = Math.max(
      ...(listProductsBrand?.map((product) => Number(product.price)) || []),
    );

    if (filteredPrices?.length === 0) {
      console.log(12345);
      setSliderValue([0, maxPriceDefault]);
    }
  }, []);

  // Cập nhật Redux state mỗi khi sliderValue thay đổi, có debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // dispatch(setFilteredPrices(sliderValue));
      setPreFilteredPrices(sliderValue);
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [sliderValue]);

  // Reset slider khi click Clear Filter
  useEffect(() => {
    if (isResetSlider) {
      console.log(123456);
      setSliderValue(minMaxPrice);
      setTimeout(() => {
        setIsResetSlider(false);
      }, 500);
    }
  }, [isResetSlider, minMaxPrice]);

  function handleSelectPriceOption(option) {
    dispatch(setSelectedOptionPrice(option));
    setAllowUpdateSliderValue(true);
  }

  return (
    <div className="w-full">
      <h5 className="border-border-gray-20 mb-3 border-b pb-2">Price</h5>

      <div className="flex-col-center gap-2">
        {/* Menu Price option */}
        <MenuDropDown
          options={optionPrices}
          selectedOption={selectedOptionPrice}
          onClickOption={handleSelectPriceOption}
          className="w-full"
        />

        {/* Giá min - max hiển thị */}
        <div className="flex-between mb-4 w-full">
          <span>{showPrice(sliderValue?.[0])}</span>
          <span>{showPrice(sliderValue?.[1])}</span>
        </div>

        {/* Slider */}
        <Slider.Root
          className="relative mb-6 flex w-full touch-none items-center select-none"
          min={minMaxPrice[0]}
          max={minMaxPrice[1]}
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
