import { motion } from "motion/react";
import { PiEnvelope } from "react-icons/pi";

function MainCTA() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-md bg-green-brand px-4 py-2 text-xl font-light text-gray-darkest transition-all duration-300 hover:bg-green-dark lg:px-6 lg:py-3 lg:text-2xl lg:tracking-wide"
    >
      <a href="#contact" className="flex items-center gap-3">
        <span>
          <PiEnvelope className="size-6 lg:size-8" />
        </span>
        <span>Connect with me</span>
      </a>
    </motion.button>
  );
}

export default MainCTA;
