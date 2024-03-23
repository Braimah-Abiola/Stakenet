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
    <div className="w-full flex flex-col px-40">
      <div className="flex flex-row items-center justify-center -space-x-40">
        <div className="flex flex-col items-center z-[-10]" ref={(el) => (imageRefs.current[0] = el)}>
          <div className="w-[440px] h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-1.png" alt="Product image" />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center z-[-8] -mt-[10rem]" ref={(el) => (imageRefs.current[1] = el)}>
          <div className="w-[440px] h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-2.png" alt="Product image" />
          </div>
          <div className="flex flex-col items-start gap-2.5 max-w-[18rem] mt-10">
            <h4 className=" text-white text-2xl font-medium">Preference</h4>
            <p className=" text-white/70 font-normal text-lg">
              Nearest hotels to your even are shown on an easy-to use map.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center z-[-10]" ref={(el) => (imageRefs.current[2] = el)}>
          <div className="w-[440px] h-[890px] z-[999] relative">
            <Image fill src="/images/mockup-3.png" alt="Product image" />
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
