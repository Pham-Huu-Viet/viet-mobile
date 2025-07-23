import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import DropDown from "./DropDown";
import { capitalize } from "../../function/capitalize";

export default function MenuDropDown({
  subTitle,
  options,
  selectedOption,
  onClickMenu,
  onClickOption,
  className,
  background,
  positionDrop = "absolute",
  height,
}) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClickMenu() {
    setIsOpenMenu((prev) => !prev);
    onClickMenu?.();
  }

  function handleClickOption(label) {
    setIsOpenMenu(false);
    onClickOption?.(label);
  }

  return (
    <div className={`relative h-fit ${className ?? ""}`}>
      <div
        className={`btn-in-card w-full justify-between gap-2 ${height ?? "h-8"}`}
        onClick={handleClickMenu}
      >
        <div>
          {subTitle ?? ""}
          {capitalize(selectedOption)}
        </div>
        {!isOpenMenu ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </div>
      <DropDown
        options={options}
        selectedOption={selectedOption}
        condition={isOpenMenu}
        handleClick={handleClickOption}
        className={`${background ?? "bg-gray-20"} `}
        positionDrop={positionDrop}
      />
    </div>
  );
}
