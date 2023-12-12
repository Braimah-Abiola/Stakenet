import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col w-full md:h-[96vh] items-center justify-center">
      <div className="flex flex-col md:flex-row w-full md:pl-40 py-10">
        <div className="flex flex-col w-full mt-20 p-5">
          <h1 className="text-6xl md:text-7xl font-medium text-white w-full md:w-[80%]">
            Levelling the sports betting playing field for everyone!
          </h1>
          <p className="text-white font-normal text-xl mt-8">
            Join the winning side now!
          </p>
        </div>

        <div className="w-full hidden md:block">
          <Image
            width={3302}
            height={3078}
            src="/images/hero_img.png"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
