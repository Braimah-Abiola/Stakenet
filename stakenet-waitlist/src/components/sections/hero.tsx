import HeroInteraction from "../ui/hero-interaction";
import JoinForm from "../ui/join-form";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-fit flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-5xl text-white">
          Join our waitlist to
        </h1>
        <h1 className=" font-semibold text-5xl text-white">
          <span>level up</span> online betting
        </h1>
        <p className=" text-white/70 mt-2 text-base">
          Stakenet is currently invite-only. Sign up to get early access!
        </p>

        <div className="mt-8" />
        <JoinForm />
        <div className="h-60"></div>
      </div>
      <HeroInteraction />
    </div>
  );
};

export default Hero;
