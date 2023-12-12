"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start end", "start start"],
    });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${color}, #101010)`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card w-full px-40"
      >
        <div className="body mt-20">
          <div className="flex flex-col items-start w-[40%] justify-center -mt-20">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="mt-4 text-2xl">{description}</p>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
