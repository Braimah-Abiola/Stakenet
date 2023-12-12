"use client";

import { features } from "@/constants/featuresData";
import FeatureCard from "./feature-cards";
import Lenis from "@studio-freight/lenis";
import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface Feature {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

interface CardsProps {
  features?: Feature[];
}

const Cards: React.FC<CardsProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="main flex flex-col items-center">
      <h2 className="text-white text-7xl text-center font-medium">
        We are eliminating the issues <br /> of traditional ticketing
      </h2>
      {features.map((feature, i) => {
        const targetScale: number = 1 - (features.length - i) * 0.05;
        return (
          <FeatureCard
            key={`p_${i}`}
            i={i}
            {...feature}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

Cards.defaultProps = {
  features: [],
};

export default Cards;
