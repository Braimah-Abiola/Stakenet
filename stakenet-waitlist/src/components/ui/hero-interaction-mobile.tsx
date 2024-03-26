import Image from "next/image";
import LandingWrapper from "../landing-wrapper";

const HeroInteractionMobile = () => {
  return (
    <div className="w-full -mt-14 z-[1]">
      <LandingWrapper className="gap-14 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-[750px] z-[1] relative">
            <Image
              fill
              src="/images/mockup-2.png"
              className=" object-contain"
              alt="Product image"
            />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-[750px] z-[1] relative">
            <Image
              fill
              src="/images/mockup-1.png"
              className=" object-contain"
              alt="Product image"
            />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-[750px] z-[1] relative">
            <Image
              fill
              src="/images/mockup-3.png"
              className=" object-contain"
              alt="Product image"
            />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default HeroInteractionMobile;
