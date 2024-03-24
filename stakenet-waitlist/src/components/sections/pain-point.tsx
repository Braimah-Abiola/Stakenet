import { ArrowRight } from "lucide-react";
import Cards from "./cards";
import Link from "next/link";

const PainPoint = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className=" font-semibold text-6xl text-white">No More</h1>
      <h1 className=" font-semibold text-6xl text-white">Losing Streaks</h1>
      <p className=" text-center text-white/70 mt-2 text-lg mb-4">
        Harness the power of community and AI to improve
        <br /> your sports betting winning rates
      </p>
      <Link href="/#home">
        <div className="bg-[#E9FF8C] h-12 flex flex-col justify-end rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-200 mb-20">
          <button
            type="submit"
            className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] hover:bg-gradient-to-r px-4 h-[46px] bg-gradient-to-b from-[#E0FF5F] to-[#AECE2A] text-black rounded-xl font-medium text-base transition-all duration-100 ease-in-out"
          >
            Join Waitlist <ArrowRight className="ml-4" />
          </button>
        </div>
      </Link>
      <Cards />
    </div>
  );
};

export default PainPoint;
