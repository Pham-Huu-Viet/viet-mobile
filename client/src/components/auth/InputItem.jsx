export default function InputItem({
  className,
  id,
  placeholder,
  value,
  onChange,
  type,
  iconLeft,
  iconRight,
  handleIconRight,
}) {
  console.log("value:", value);

  return (
    <div
      className={`input-item relative h-12 w-full min-w-[200px] ${className}`}
    >
      {iconLeft && <div className="pl-4">{iconLeft}</div>}

      <div className="relative h-full flex-1">
        <input
          id={id}
          type={type ? type : "text"}
          className="peer input-content h-full w-full pl-4"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <label
          htmlFor={id}
          className={`bg-gray-20 label-fade text-sub-text-2 absolute left-2.5 origin-left -translate-y-1/2 cursor-text p-2 transition-all select-none peer-focus:-top-0 peer-focus:left-2.5 peer-focus:scale-90 peer-focus:text-xs ${value?.length > 0 ? "top-0 scale-90 text-xs" : "top-1/2 text-sm"}`}
        >
          {placeholder ? placeholder : "Type Here..."}
        </label>
      </div>

      {iconRight && (
        <div className="cursor-pointer pr-4" onClick={handleIconRight}>
          {iconRight}
        </div>
      )}
    </div>
  );
}
