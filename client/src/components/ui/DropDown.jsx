import { AnimatePresence, motion } from "framer-motion";
import { capitalize } from "../../function/capitalize";

export default function DropDown({
  options,
  selectedOption,
  condition,
  handleClick,
  className,
  positionDrop,
}) {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          className={`card-static-col ${positionDrop} ${positionDrop == "absolute" ? "top-[calc(100%+8px)]" : "mt-2"} right-0 z-200 mb-4 h-fit min-w-fit items-start rounded-lg p-0 ${className || ""}`}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{
            duration: 0.2,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          {options?.map((option, index) => (
            <div
              key={index}
              className="hover:bg-gray-hover transition-quick flex-between w-full cursor-pointer gap-4 px-4 py-2 leading-none whitespace-nowrap select-none"
              style={{
                color:
                  option?.label == selectedOption ? "var(--color-accent)" : "",
              }}
              onClick={() => handleClick(option.label)}
            >
              {capitalize(option.label)}

              {option.icon && (
                <div className="flex-center text-sub-text h-4 w-4">
                  {option.icon}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
