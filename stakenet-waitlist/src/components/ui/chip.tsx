import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-black font-medium"
          : "text-white/70 hover:text-white hover:bg-[#242525]"
      } text-base transition-colors px-4 py-1.5 rounded-full relative`}
    >
      <span className="relative z-10">{text}</span>

      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#DCFB5A] to-[#AECE2A] rounded-full"
        ></motion.span>
      )}
    </button>
  );
};
export default Chip;
