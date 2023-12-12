import Image from "next/image";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col px-5 md:px-40 py-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Image width={150} height={35} src="/images/logo.png" alt="Logo" />
        </div>

        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-12">
            <div className="gap-8 flex flex-row items-center">
              <p className="text-white text-lg">Features</p>
              <p className="text-white text-lg">About</p>
              <p className="text-white text-lg">FAQ</p>
            </div>
            <Button>Join Waitlist</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
