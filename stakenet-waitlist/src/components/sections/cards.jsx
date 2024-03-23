"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

const Cards = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("image-reveal");

          if (entry.target === imageRefs.current[0]) {
            entry.target.classList.add("rotate-left-top");
          } else if (entry.target === imageRefs.current[1]) {
            entry.target.classList.add("slide-left");
          }
          else if (entry.target === imageRefs.current[2]) {
            entry.target.classList.add("rotate-left-bottom");
          }
          else if (entry.target === imageRefs.current[3]) {
            entry.target.classList.add("rotate-right-top");
          }
          else if (entry.target === imageRefs.current[4]) {
            entry.target.classList.add("slide-right");
          }
          else if (entry.target === imageRefs.current[5]) {
            entry.target.classList.add("rotate-right-bottom");
          } else {
            setTimeout(() => {
              entry.target.classList.add("");
            }, 500); // Delay the slide-in animation
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
    <div className="w-full flex flex-row items-center justify-center px-40">
      {/* Left */}
      <div className="flex flex-col -mr-60 -space-y-20">
        <div
          className="w-[400px] h-[200px] relative rotate-12 z-[-50]"
          ref={(el) => (imageRefs.current[0] = el)}
        >
          <Image fill src="/images/sportybet.png" alt="Sportybet" />
        </div>
        <div className="w-[400px] h-[200px] relative z-[-10]" ref={(el) => (imageRefs.current[1] = el)}>
          <Image fill src="/images/betway.png" alt="Betway" />
        </div>
        <div className="w-[400px] h-[200px] relative -rotate-12 z-[-20]" ref={(el) => (imageRefs.current[2] = el)}>
          <Image fill src="/images/1xbet.png" alt="1xBet" />
        </div>
      </div>

      {/* Product Image */}
      <div className="w-[440px] h-[890px] z-0 relative">
        <Image fill src="/images/mockup-3.png" alt="Product image" />
      </div>

      {/* Right */}
      <div className="flex flex-col -ml-60 -space-y-20">
        <div className="w-[400px] h-[200px] relative -rotate-12 z-[-50]" ref={(el) => (imageRefs.current[3] = el)}>
          <Image fill src="/images/msport.png" alt="MSport" />
        </div>
        <div className="w-[400px] h-[200px] relative z-[-10]" ref={(el) => (imageRefs.current[4] = el)}>
          <Image fill src="/images/bet365.png" alt="Bet365" />
        </div>
        <div className="w-[400px] h-[200px] rotate-12 relative z-[-50]" ref={(el) => (imageRefs.current[5] = el)}>
          <Image fill src="/images/betking.png" alt="BetKing" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
