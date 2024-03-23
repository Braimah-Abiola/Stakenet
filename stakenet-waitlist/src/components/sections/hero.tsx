import Beams from "../ui/beam";
import HeroInteraction from "../ui/hero-interaction";
import JoinForm from "../ui/join-form";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center z-50">
      <div className="w-fit flex flex-col items-center justify-center mb-32">
        <h1 className=" font-semibold text-6xl text-white">
          Join our waitlist to
        </h1>
        <h1 className=" font-semibold text-6xl text-white">
          <span>level up</span> online betting
        </h1>
        <p className=" text-white/70 mt-4 text-lg">
          Stakenet is currently invite-only. Sign up to get early access!
        </p>

        <div className="mt-6" />
        <JoinForm />
        <Beams />
      </div>
      <HeroInteraction />
    </div>
  );
};

export default Hero;
