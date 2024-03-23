"use client";

import { ArrowRight } from "lucide-react";
import { CustomInput } from "./custom-input";

const JoinForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" w-full">
      <form
        className="items-center flex flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <CustomInput className="w-[400px]" id="email" type="email" />
        <div className="bg-[#E9FF8C] h-12 flex flex-col justify-end rounded-xl cursor-pointer">
          <button
            type="submit"
            className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-4 h-[46px] bg-gradient-to-b from-[#E0FF5F] to-[#AECE2A] text-black rounded-xl font-medium text-base transition duration-200 ease-linear"
          >
            Join Waitlist <ArrowRight className="ml-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;
