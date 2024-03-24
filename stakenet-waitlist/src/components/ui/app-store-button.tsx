import Image from "next/image";

const AppStoreButton = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white cursor-pointer rounded-xl px-4 py-2 hover:scale-105 transition-transform ease-in-out">
      <div className=" relative w-[135px] h-[32px]">
        <Image
          className=" object-contain"
          fill
          src="/images/app-store.svg"
          alt="Google Play"
        />
      </div>
    </div>
  );
};

export default AppStoreButton;
