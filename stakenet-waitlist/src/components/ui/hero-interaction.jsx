"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroInteraction = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-350px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("image-reveal");

          if (entry.target === imageRefs.current[0]) {
            entry.target.classList.add("slide-hero-left");
          } else if (entry.target === imageRefs.current[1]) {
            entry.target.classList.add("slide-hero-up");
          }
          else if (entry.target === imageRefs.current[2]) {
            entry.target.classList.add("slide-hero-right");
          }
          else {
            setTimeout(() => {
              entry.target.classList.remove("image-reveal", "slide-hero-left", "slide-hero-up", "slide-hero-right");
            }, 500);
          }

          observer.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="w-full flex flex-col lg:px-10 xl:px-20 2xl:px-40 z-[1]">
      <div className="flex flex-row items-center justify-center lg:-space-x-24 xl:-space-x-44 2xl:-space-x-40">
        <div className="flex flex-col items-center z-[1]" ref={(el) => (imageRefs.current[0] = el)}>
          <div className=" lg:w-[320px] lg:h-[690px] xl:w-[400px] xl:h-[790px] 2xl:w-[440px] 2xl:h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-1.webp" className=" object-contain" alt="Product image" />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center z-[2] -mt-[10rem]" ref={(el) => (imageRefs.current[1] = el)}>
          <div className=" lg:w-[320px] lg:h-[690px] xl:w-[400px] xl:h-[790px] 2xl:w-[440px] 2xl:h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-2.webp" className=" object-contain" alt="Product image" />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center z-[1]" ref={(el) => (imageRefs.current[2] = el)}>
          <div className=" lg:w-[320px] lg:h-[690px] xl:w-[400px] xl:h-[790px] 2xl:w-[440px] 2xl:h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-3.webp" className=" object-contain" alt="Product image" />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInteraction;
