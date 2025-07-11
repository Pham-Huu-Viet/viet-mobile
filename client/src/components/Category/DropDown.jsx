import { AnimatePresence, motion } from "framer-motion";
import { capitalize } from "../../function/capitalize";

export default function DropDown({
  options,
  selectedOption,
  condition,
  handleClick,
  className,
}) {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          className={`card-static-col mb-4 h-fit items-start rounded-lg p-0 ${className || ""}`}
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
              className="hover:bg-gray-hover transition-quick w-full cursor-pointer px-4 py-2 leading-none select-none"
              style={{
                color: option == selectedOption ? "var(--color-accent)" : "",
              }}
              onClick={() => handleClick(option)}
            >
              {capitalize(option)}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
