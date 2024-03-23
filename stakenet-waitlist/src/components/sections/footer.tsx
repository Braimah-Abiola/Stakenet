import Image from "next/image";
import AppStoreButton from "../ui/app-store-button";
import GooglePlayButton from "../ui/google-play-button";
import FooterLink from "../ui/footer-link";

const Footer = () => {
  return (
    <div className="w-full pt-20 pb-6">
      <div className="w-full flex items-center flex-row justify-between px-40">
        <div className="flex flex-col items-start w-1/2">
          <h1 className=" font-semibold text-5xl text-white">
            10X your winning <br />
            rate the StakeNet <br />
            app now!
          </h1>
          <div className="flex flex-row gap-4 mt-12">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
        <div className="w-full ">
          <div className="relative h-[750px] ml-20 w-full" id="float">
            <Image
              className=" object-contain"
              fill
              src="/images/footer-img.png"
              alt="Product mockup"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-end px-40 mt-10">
        <div className="flex flex-col items-start gap-2">
          <FooterLink link="" text="Mail: contact@stakenet.co" />
          <FooterLink link="" text="Tel: +233 557 661 362" />
          <FooterLink
            link=""
            text="Address: 58 Okodee Road, KNUST Kumasi, GH"
          />
        </div>
        <div className="flex flex-row gap-10">
          <FooterLink link="" text="StakeNet Privacy Policy" />
          <FooterLink link="" text="Terms of Services" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
