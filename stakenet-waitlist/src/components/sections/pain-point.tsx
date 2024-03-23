import { ArrowRight } from "lucide-react";
import Cards from "./cards";

const PainPoint = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className=" font-semibold text-6xl text-white">No More</h1>
      <h1 className=" font-semibold text-6xl text-white">Losing Streaks</h1>
      <p className=" text-center text-white/70 mt-2 text-lg mb-4">
        Harness the power of community and AI to improve
        <br /> your sports betting winning rates
      </p>
      <div className="bg-[#E9FF8C] h-12 flex flex-col justify-end mb-20 rounded-xl cursor-pointer">
        <button
          type="submit"
          className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-4 h-[46px] bg-gradient-to-b from-[#E0FF5F] to-[#AECE2A] text-black rounded-xl font-medium text-base transition duration-200 ease-linear"
        >
          Join Waitlist <ArrowRight className="ml-4" />
        </button>
      </div>
      <Cards />
    </div>
  );
};

export default PainPoint;
