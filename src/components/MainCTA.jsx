import { PiEnvelope } from "react-icons/pi";

function MainCTA() {
  return (
    <button className="hover:bg-green-dark flex cursor-pointer items-center gap-3 rounded-md bg-green-brand px-4 py-2 text-xl text-gray-darkest transition-all duration-300 lg:px-6 lg:py-3 lg:text-2xl lg:tracking-wide">
      <a href="#contact">
        <PiEnvelope className="size-6 lg:size-8" />
      </a>
      <span>Connect with me</span>
    </button>
  );
}

export default MainCTA;
